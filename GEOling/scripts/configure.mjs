import {createInterface} from 'node:readline/promises';
import {stdin,stdout} from 'node:process';
import {writeFile} from 'node:fs/promises';
const rl=createInterface({input:stdin,output:stdout});
console.log('GEOling: connect Supabase. Use ONLY the PUBLIC publishable/anon key.');
try{const url=(await rl.question('Supabase project URL (https://...supabase.co): ')).trim();const key=(await rl.question('Public publishable/anon key: ')).trim();const parsed=new URL(url);if(parsed.protocol!=='https:'||!parsed.hostname.endsWith('.supabase.co'))throw Error('Use your https://PROJECT.supabase.co URL.');if(!key.startsWith('sb_publishable_')){const claims=JSON.parse(Buffer.from(key.split('.')[1]||'','base64url').toString());if(claims.role!=='anon')throw Error('Only the public anon key is accepted. Never use service_role.')}await writeFile('public/config.js','// Public project configuration. No server secrets.\nwindow.GEOLING_CONFIG = '+JSON.stringify({supabaseUrl:url.replace(/\/$/,''),supabaseKey:key},null,2)+';\n');console.log('Saved public/config.js. Run npm run build and redeploy if already hosted.')}catch(e){console.error('Not saved: '+e.message);process.exitCode=1}finally{rl.close()}
