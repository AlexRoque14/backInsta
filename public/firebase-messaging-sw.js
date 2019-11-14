importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js')

firebase.initializeApp({
    'messagingSendGrid':'976394341394'
});

const messaging  = firebase.messaging();