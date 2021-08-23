const version = "0.2"

self.addEventListener("install", () => {
    console.log("Install Service worker version " + version)
    return self.skipWaiting()
})

self.addEventListener("activate", () => {
    console.log("Activate Service worker version " + version)
})

self.addEventListener('fetch', () => {
    //écoute des requests
})

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

if (workbox) {
    //console.log('Yes, worbox is there')
    workbox.precaching.precacheAndRoute([
        {
            "url": "index.html"
        },
        {
            "url": "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
        }
    ])

    //routage sur images
    workbox.routing.registerRoute(
        /(.*)\.(?:png|gif|jpg|css)$/,
        new workbox.strategies.CacheFirst({
            cacheName: "design-cache",
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 30*24*60*60, // 30 days,
                    maxEntries: 50
                })
            ]
        })
    )
    //routage sur js
    workbox.routing.registerRoute(
        /(.*)\.(?:js)$/,
        new workbox.strategies.CacheFirst({
            cacheName: "code-cache",
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 30*24*60*60, // 30 days,
                    maxEntries: 50
                })
            ]
        })
    )

    //routage api
    workbox.routing.registerRoute(
        "https://api.punkapi.com/v2/beers",
        new workbox.strategies.NetworkFirst({
            cacheName: "api-cache",
            plugins : [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 60*60
                })
            ]
        })
    )
}