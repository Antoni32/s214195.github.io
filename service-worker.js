const cacheName = 'twoja-spa-v1';
const staticAssets = [
  './',
  './index.html',
  './style.css',
  './main.js',
  './icon-192x192.png',
  './icon-512x512.png'
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  const request = event.request;
  event.respondWith(cacheFirst(request));
});

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  return cachedResponse || fetch(request);
}
