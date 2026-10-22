import { tr, trf } from "../i18n";
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { initialProgress, STORAGE_KEY, completeLesson, activeStreak, newRoot, sanitizeRoot } from './progress.js';
import { supabase } from '../lib/supabase.js';
const Context = createContext(null),
  guestKey = 'giolingo.v2.guest';
const read = key => {
  try {
    return sanitizeRoot(JSON.parse(localStorage.getItem(key)));
  } catch {
    return newRoot();
  }
};
function guest() {
  try {
    if (localStorage.getItem(guestKey)) return read(guestKey);
    return sanitizeRoot(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch {
    return newRoot();
  }
}
export function ProgressProvider({
  children
}) {
  const [root, setRoot] = useState(guest),
    [user, setUser] = useState(null),
    [ready, setReady] = useState(!supabase),
    [storageError, setStorageError] = useState(false),
    [sync, setSync] = useState('local'),
    [authError, setAuthError] = useState('');
  const owner = useRef(null),
    revision = useRef(0),
    queue = useRef(Promise.resolve()),
    hydrating = useRef(false),
    generation = useRef(0),
    retryRef = useRef(null),
    loadedOwner = useRef(undefined),
    baseline = useRef(''),
    blocked = useRef(false),
    latestRoot = useRef(root);
  latestRoot.current = root;
  async function hydrate(nextUser) {
    const run = ++generation.current;
    owner.current = nextUser?.id || null;
    setUser(nextUser);
    setReady(false);
    hydrating.current = true;
    setSync(nextUser ? 'loading' : 'local');
    setAuthError('');
    await queue.current.catch(() => {});
    if (run !== generation.current) return;
    if (!nextUser) {
      setRoot(guest());
      revision.current = 0;
      blocked.current = false;
      loadedOwner.current = null;
      hydrating.current = false;
      setReady(true);
      return;
    }
    try {
      const {
        data,
        error
      } = await supabase.from('giolingo_learning_state').select('state,revision').eq('user_id', nextUser.id).maybeSingle();
      if (error) throw error;
      if (run !== generation.current) return;
      let cache;
      try {
        cache = JSON.parse(localStorage.getItem(`giolingo.v2.${nextUser.id}`));
      } catch {}
      const remote = data ? sanitizeRoot(data.state) : newRoot(),
        remoteRevision = data?.revision || 0;
      baseline.current = JSON.stringify(remote);
      blocked.current = !!cache?.dirty && cache.revision !== remoteRevision;
      revision.current = blocked.current ? cache.revision : remoteRevision;
      setRoot(cache?.dirty ? sanitizeRoot(cache.root) : remote);
      loadedOwner.current = nextUser.id;
      setSync(blocked.current ? 'conflict' : 'saved');
      hydrating.current = false;
      setReady(true);
    } catch {
      if (run !== generation.current) return;
      setSync('load-error');
      setAuthError(tr("\u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10E1 \u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10D8 \u10D5\u10D4\u10E0 \u10E9\u10D0\u10D8\u10E2\u10D5\u10D8\u10E0\u10D7\u10D0. \u10E8\u10D4\u10D0\u10DB\u10DD\u10EC\u10DB\u10D4 \u10D8\u10DC\u10E2\u10D4\u10E0\u10DC\u10D4\u10E2\u10D8 \u10D3\u10D0 \u10E1\u10EA\u10D0\u10D3\u10D4 \u10D7\u10D0\u10D5\u10D8\u10D3\u10D0\u10DC."));
      hydrating.current = false;
    }
  }
  useEffect(() => {
    if (!supabase) return;
    let active = true,
      initialSeen = false;
    const {
      data: {
        subscription
      }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      initialSeen = true;
      const next = session?.user || null;
      if (loadedOwner.current === (next?.id || null)) return;
      setTimeout(() => {
        if (active) hydrate(next);
      }, 0);
    });
    supabase.auth.getSession().then(({
      data,
      error
    }) => {
      if (active && !initialSeen) {
        if (error) setAuthError(tr("\u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D7\u10D0\u10DC \u10D3\u10D0\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D4\u10D1\u10D0 \u10D5\u10D4\u10E0 \u10DB\u10DD\u10EE\u10D4\u10E0\u10EE\u10D3\u10D0."));
        hydrate(data.session?.user || null);
      }
    });
    return () => {
      active = false;
      subscription.unsubscribe();
      generation.current++;
    };
  }, []);
  useEffect(() => {
    if (hydrating.current || !ready) return;
    const id = owner.current;
    try {
      localStorage.setItem(id ? `giolingo.v2.${id}` : guestKey, JSON.stringify(id ? {
        root,
        revision: revision.current,
        dirty: JSON.stringify(root) !== baseline.current
      } : root));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
    if (!id) return;
    if (blocked.current) {
      setSync('conflict');
      return;
    }
    if (JSON.stringify(root) === baseline.current && revision.current > 0) {
      setSync('saved');
      return;
    }
    setSync('pending');
    const snapshot = root,
      run = generation.current;
    const timer = setTimeout(() => {
      queue.current = queue.current.catch(() => {}).then(async () => {
        if (run !== generation.current || id !== owner.current || blocked.current) return;
        setSync('saving');
        try {
          let result;
          if (revision.current === 0) {
            result = await supabase.from('giolingo_learning_state').insert({
              user_id: id,
              state: snapshot,
              revision: 1
            }).select('revision').single();
          } else {
            result = await supabase.from('giolingo_learning_state').update({
              state: snapshot,
              revision: revision.current + 1,
              updated_at: new Date().toISOString()
            }).eq('user_id', id).eq('revision', revision.current).select('revision').maybeSingle();
          }
          if (result.error) throw result.error;
          if (!result.data) throw new Error('conflict');
          if (run !== generation.current) return;
          revision.current = result.data.revision;
          baseline.current = JSON.stringify(snapshot);
          try {
            localStorage.setItem(`giolingo.v2.${id}`, JSON.stringify({
              root: latestRoot.current,
              revision: revision.current,
              dirty: JSON.stringify(latestRoot.current) !== baseline.current
            }));
          } catch {
            setStorageError(true);
          }
          setSync(JSON.stringify(latestRoot.current) === baseline.current ? 'saved' : 'pending');
        } catch (error) {
          if (run !== generation.current) return;
          const conflict = error.message === 'conflict' || error.code === '23505';
          blocked.current = conflict;
          setSync(conflict ? 'conflict' : 'error');
        }
      });
    }, 650);
    return () => clearTimeout(timer);
  }, [root, ready]);
  useEffect(() => {
    retryRef.current = () => {
      if (user && blocked.current) {
        try {
          localStorage.removeItem(`giolingo.v2.${user.id}`);
        } catch {}
      }
      return hydrate(user);
    };
  });
  const mode = root.mode,
    state = {
      ...root.profiles[mode],
      mode
    };
  const update = fn => setRoot(r => ({
    ...r,
    profiles: {
      ...r.profiles,
      [r.mode]: fn(r.profiles[r.mode])
    }
  }));
  return <Context.Provider value={{
    state,
    root,
    user,
    ready,
    sync,
    authError,
    storageError,
    streak: activeStreak(state),
    retrySync: () => retryRef.current?.(),
    saveAgain: () => setRoot(r => ({
      ...r
    })),
    importGuest: () => {
      if (!user || !ready) return;
      setRoot(guest());
    },
    chooseLanguage: language => update(s => ({
      ...s,
      language
    })),
    setMode: mode => setRoot(r => ({
      ...r,
      mode
    })),
    setLevel: level => update(s => ({
      ...s,
      levels: {
        ...s.levels,
        [s.language]: level
      }
    })),
    setPlacement: (language, result) => update(s => ({
      ...s,
      placements: {
        ...s.placements,
        [language]: result
      },
      levels: {
        ...s.levels,
        [language]: result.level
      }
    })),
    loseHeart: () => update(s => ({
      ...s,
      hearts: Math.max(0, s.hearts - 1)
    })),
    refill: () => update(s => ({
      ...s,
      hearts: 5
    })),
    finish: (id, xp) => update(s => completeLesson(s, id, xp)),
    saveDraft: (id, draft) => update(s => ({
      ...s,
      drafts: {
        ...s.drafts,
        [id]: draft
      }
    })),
    seeEntry: (language, e) => update(s => ({
      ...s,
      seenWords: {
        ...s.seenWords,
        [`${language}:${e.target}`]: {
          ...e,
          language
        }
      }
    })),
    recordMistake: (lesson, q) => update(s => ({
      ...s,
      mistakes: {
        ...s.mistakes,
        [`${lesson.id}:${q.id}`]: {
          lessonId: lesson.id,
          language: s.language,
          question: q,
          count: (s.mistakes[`${lesson.id}:${q.id}`]?.count || 0) + 1,
          at: Date.now()
        }
      }
    })),
    resolveMistake: key => update(s => {
      const mistakes = {
        ...s.mistakes
      };
      delete mistakes[key];
      return {
        ...s,
        mistakes
      };
    }),
    setReminder: reminder => setRoot(r => ({
      ...r,
      reminder
    })),
    reset: () => update(() => structuredClone(initialProgress)),
    signOut: async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      await queue.current.catch(() => {});
      if (supabase) {
        const {
          error
        } = await supabase.auth.signOut();
        if (error) throw error;
      }
    }
  }}>{children}</Context.Provider>;
}
export const useProgress = () => useContext(Context);
