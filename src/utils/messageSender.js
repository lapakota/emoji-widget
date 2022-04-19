export default function sendEmojiMessage(char) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { name: 'emoji', char: char });
    });
}