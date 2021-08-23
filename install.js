const btnInstall = document.querySelector('.install')

let deferredPrompt

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault()
    deferredPrompt = e
    btnInstall.classList.remove('hidden')
    //btnInstall.style.display = 'block'
})

btnInstall.addEventListener("click", (e) => {
    e.preventDefault()
    btnInstall.classList.add('hidden')
    deferredPrompt.prompt()

    deferredPrompt.userChoice.then( (choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log("installtion acceptée")
        }
        else {console.log("installtion non acceptée")}
        deferredPrompt = null
    })
})