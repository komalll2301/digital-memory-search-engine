self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method === 'POST' && url.pathname.endsWith('/share-target')) {
    e.respondWith((async () => {
      const fd = await req.formData();
      const cache = await caches.open('shared');
      let i = 0;
      for (const f of fd.getAll('files')) {
        const key = new URL('shared/' + Date.now() + '-' + (i++), self.registration.scope).href;
        await cache.put(key, new Response(f, {headers: {'Content-Type': f.type, 'X-Name': encodeURIComponent(f.name)}}));
      }
      return Response.redirect('./?shared=1', 303);
    })());
    return;
  }
  if (req.method === 'GET' && url.origin === location.origin) {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open('app').then(x => x.put(req, c)); return r; })
      .catch(() => caches.match(req)));
  }
});
