export default function sendEmojiMessage(char) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        !tabs[0].url.startsWith('chrome://') && chrome.tabs.sendMessage(tabs[0].id, { name: 'emoji', char: char });
    });
}