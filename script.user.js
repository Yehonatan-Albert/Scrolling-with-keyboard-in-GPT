// ==UserScript==
// @name         גלילה עם המקלדת בGPT
// @version      1
// @description  -
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        window.onurlchange
// ==/UserScript==

function loadScript() {
    const timer = setInterval(() => {
        const scrollElem = document.querySelector('[class~="@container/thread"]>*>*>*');
        if (scrollElem) {
            clearInterval(timer);
            scrollElem.setAttribute('tabindex', '0');
            scrollElem.style.outline = 'none';
            scrollElem.focus();
        }
    }, 500);
}

loadScript();
window.onurlchange = loadScript;
