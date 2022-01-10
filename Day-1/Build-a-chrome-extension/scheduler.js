// 1. first check if any event started in last one and half hour
// 2. put the next 10 events in the timeout

schedule_items = document.getElementsByClassName('schedule-grid');
time = []
links = []
url = window.location.href;
console.log(url);

for (let i = 5, n = 0; i < schedule_items.length; i++) {
    time[i] = schedule_items[i].getElementsByTagName('p')[0].getAttribute('data-iso-time');
    // slice the first 19 chars of time[i]
    time[i] = time[i].slice(0, 19);
    // convert time[i] to date object
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
    if ((now - millis) < (60 * 60 * 1000) && (now - millis) > 0) {
        window.open(links[i], '_blank');
        console.log('opened now');
    }
    if ((millis - now) > 0) {
        console.log('sent to background');
        n++;
        timeout = millis - now;

        chrome.runtime.sendMessage({
            message: "send_timeout",
            time: timeout,
            link: links[i]
        }, (logs) => {});
    }
    if (n > 9) {
        break;
    }
}