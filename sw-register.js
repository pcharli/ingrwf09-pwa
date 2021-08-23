if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
        .then(function(reg) {
            console.log('notify', 'service worker is started' + reg)
        })
        .catch(error => {
            console.log('error', 'Service worker registration failed : ' + error)
        })
    })
}
else {
    console.log('alert', "Navigateur vieux !!!!")
}