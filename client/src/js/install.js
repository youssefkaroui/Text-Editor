const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event
  butInstall.classList.toggle("hidden", false)
});


butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  // display prompt 
  promptEvent.prompt();
  // reset the deffered promt 
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});


window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null
  console.log( "App installed!", event);
});
