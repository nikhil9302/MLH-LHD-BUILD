// write a function to log  hello when the extension is installed first time
chrome.runtime.onInstalled.addListener(function () {
    alert("Welcome to AutoLHD");
});

setTimeout(() => {
    chrome.tabs.create({
        url: 'https://localhackday.mlh.io/schedule'
    }, (tab) => {
        setTimeout(() => {
            chrome.tabs.remove(tab.id);
        }, 2500);
    });
}, 1000);

n = 0;
timeouts = [];
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message == 'send_timeout') {
        console.log(message.link, message.time);
        timeouts[n] = setTimeout(function () {
            chrome.tabs.create({
                url: message.link
            });
        }, message.time);
        n++;
        sendResponse('done');
    }
    if (message.message == 'close_tab') {
        console.log('closing tab');
        sendResponse('tab closed');
    }
});