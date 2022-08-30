
var pageHeight = 0;
var pageCount = 8;
var maxPageHeight = 755;

$(document).ready(function () {
    SetPageHeight();
});

window.addEventListener("resize", SetPageHeight);

window.addEventListener("wheel", function (e) {
    if (e.wheelDelta > 0) {
        //console.log("up");
        window.scroll({ top: pageHeight * GetPreviousPageNumber(), behavior: 'smooth' });
    }
    else {
        //console.log("down");
        window.scroll({ top: pageHeight * GetNextPageNumber(), behavior: 'smooth' });
    }
});

function SetPageHeight() {
    pageHeight = document.documentElement.clientHeight;

    if (pageHeight < maxPageHeight) {
        pageHeight = maxPageHeight;
    }

    document.body.style.setProperty('--height-page', pageHeight + 'px');
}

function GetNextPageNumber() {
    let nextPageNumber = GetCurrentPageNumber() + 1;

    if (nextPageNumber > pageCount) {
        nextPageNumber = pageCount;
    }
    return nextPageNumber;
}

function GetPreviousPageNumber() {
    let pervousPageNumber = GetCurrentPageNumber() - 1;

    if (pervousPageNumber < 0) {
        pervousPageNumber = 0;
    }
    return pervousPageNumber;
}


function GetCurrentPageNumber() {    
    return Math.trunc(window.scrollY / pageHeight,0);
}


