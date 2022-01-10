// write a function to log  hello when the extension is installed first time
chrome.runtime.onInstalled.addListener(function () {
    alert("Welcome to AutoLHD");
});

// get minutes from date object
var mins = new Date().getMinutes();

// 1. first check if any event started in last one and half hour
// 2. settimeout for next 28/58 with setinterval of recurring 30mins to check next 2mins of event


// efficient function to open a link in new tab every hour 
function infititeOpen() {
    schedule_items = document.getElementsByClassName('schedule-grid');
    time = []
    links = []

    for (let i = 5; i < schedule_items.length; i++) {
        time[i] = schedule_items[i].getElementsByTagName('p')[0].getAttribute('data-iso-time');
        // slice the first 19 chars of time[i]
        time[i] = time[i].slice(0, 19);
        // convert time[i] to date object
        // yyyy = time[i].slice(0, 4);
        // mm = time[i].slice(5, 7);
        yyyy = 2022;
        mm = 1;
        dd = time[i].slice(8, 10);
        hh = time[i].slice(11, 13);
        min = time[i].slice(14, 16);
        // log all values
        // console.log(yyyy, mm, dd, hh, min);

        //get milliseconds from date object
        millis = new Date(yyyy, mm - 1, dd, hh, min).getTime();
        now = new Date().getTime();

        // check if event was in last hour, if yes open the links[i] in new tab using window.open
        links[i] = schedule_items[i].getElementsByTagName('a')[0].getAttribute('href');
        if (now - millis < 3600000) {
            // window.open(links[i]);
            chrome.tabs.create({
                url: links[i]
            });
        } else {
            console.log('no event in last hour');
            // check if any event in next 5 mins
            if (now - millis < 300000) {
                // window.open(links[i]);
                chrome.tabs.create({
                    url: links[i]
                });
            } else {
                console.log('no event in next 5 mins');
                var millisForNextCheck;
                // settimeout for next 28/58 with setinterval of recurring 30mins to check next 2mins of event
                if (now.getMinutes() < 28) {
                    millisForNextCheck = new Date(yyyy, mm, dd, hh, 28).getTime();
                } else if (now.getMinutes() > 58) {
                    millisForNextCheck = new Date(yyyy, mm, dd, hh, 28).getTime() + 3600000;
                } else {
                    millisForNextCheck = new Date(yyyy, mm, dd, hh, 58).getTime();
                }
                setTimeout(() => {
                    setInterval(() => {

                    }, 1800000);
                }, millisForNextCheck - now);
            }
        }


    }
    chrome.tabs.create(link);
}