const CACHE_NAME = 'fit-quest-v1';
const assets = [
'"'",
'index.html',
'manifest.json',
'music.mp3'
];
// Installation du cache
self.addEventListener('install', (e) => {
e.waitUntil(
caches.open(CACHE_NAME).then((cache) => {
return cache.addAll(assets);
})
);
});
// Stratégie: On cherche dans le cache, sinon on va sur le réseau
self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => {
return response || fetch(e.request);
})
);
});
