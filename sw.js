const version = "0.1"

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