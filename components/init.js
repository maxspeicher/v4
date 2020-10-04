'use strict';

const e = React.createElement;

/* We don't wanna have to deal with cookie banners and GDPR. So let's just get rid of all the cookies that might
    have been set by subdomains. */
function deleteAllCookies(domain) {
    const cookies = document.cookie.split(';');

    for (var i=0; i<cookies.length; ++i) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=' + domain + '; path=/';
    }
}

for (var i=0; i<MAX.deleteCookiesForDomains.length; ++i) { // this comes from config.js
    deleteAllCookies(MAX.deleteCookiesForDomains[i]);
}