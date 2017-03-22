var cacheStorageKey = 'app-pwa-2017';
var cacheList = [
  '/',
  'amap-running-app/index.html',
  'amap-running-app/weex.min.j',
  'amap-running-app/running.js'
]

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheStorageKey).then(function(cache) {
      return cache.addAll(cacheList)
    }).then(function() {
      return self.skipWaiting()
    })
  )
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response != null) {
        return response
      }
      return fetch(e.request.url)
    })
  )
})
