(() => {
    let stackbotelem = document.querySelector('stack-bot');
    let appstackbotelem = document.querySelector('app-stackbot');
    if (!stackbotelem && !appstackbotelem) {
        let elem = document.createElement('app-stackbot');
        document.querySelector('body').appendChild(elem);
    }
})();