chrome.runtime.onMessage.addListener(function (request) {
    if (request.name === 'emoji') {
        const activeElement = document.activeElement;

        if (activeElement instanceof HTMLInputElement) activeElement.value += request.char;
        if (activeElement instanceof HTMLDivElement || activeElement instanceof HTMLTextAreaElement)
            activeElement.textContent += request.char;

        console.log(request.char, activeElement);
    }
});