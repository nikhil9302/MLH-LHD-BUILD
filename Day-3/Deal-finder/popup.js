function openInNewTab() {
    title = document.getElementById('productTitle').innerText;
    //replace spaces with + in title string
    if (title) {
        //replace spaces with + in title string
        toSearch = `https://www.google.co.in/search?q=${title = title.replace(/\s/g, '+')}&newwindow=1&hl=en&psb=1&tbm=shop`;
        window.open(toSearch, 'popup', 'width=800,height=600');
    }
}