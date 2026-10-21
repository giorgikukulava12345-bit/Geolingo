// Retire the previous Geolingo cache-first worker at its original URL.
// Keep this file available so returning browsers can upgrade automatically.
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil((async () => {
  const keys = await caches.keys();
  await Promise.all(keys.filter(key => /^geolingo-v\d+-/.test(key)).map(key => caches.delete(key)));
  await self.clients.claim();
  await self.registration.unregister();
  const windows = await self.clients.matchAll({type: 'window'});
  await Promise.allSettled(windows.map(client => client.navigate(client.url)));
})()));
// No fetch handler: requests go to the current website on the network.
