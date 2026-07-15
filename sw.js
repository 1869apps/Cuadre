var CACHE_NAME='cu-dev1869apps-cuadre-v1';
var CACHE_MAX=52428800;
var TIMEOUT_MS=15000;

self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(n){return Promise.all(n.filter(function(x){return x!==CACHE_NAME}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(function(cached){var fp=fetch(e.request).then(function(r){if(r&&r.status===200){var cl=r.clone();caches.open(CACHE_NAME).then(function(c){c.put(e.request,cl)})}return r}).catch(function(){return cached||new Response('Offline',{status:503})});return cached||fp}))});
