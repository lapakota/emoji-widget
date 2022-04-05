console.log('<----- Content script started running ----->');

chrome.runtime.onMessage.addListener(function (request) {
    if (request.name === 'emoji') {
        const activeElementClass = document.activeElement.className;
        const activeElement = document.getElementsByClassName(activeElementClass)[0];

        if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement)
            activeElement.value += request.char;
        if (activeElement instanceof HTMLDivElement) activeElement.innerText += request.char;

        console.log(request.char, activeElement);
    }
});