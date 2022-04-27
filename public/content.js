chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.name === 'emoji') {
        const activeElement = document.activeElement;

        if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement)
            activeElement.value += request.char;
        if (activeElement instanceof HTMLDivElement) activeElement.textContent += request.char;
    }
    // Чтобы не падала ошибка в консоль
    sendResponse({});
    return true;
});