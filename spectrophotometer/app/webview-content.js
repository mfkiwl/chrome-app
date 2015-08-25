'use strict';
setTimeout(function () {
    ChromeAppManager.start();
}, 2600);

/*

// message with events
var message = ChromeAppManager.postMessage('test', Math.random());
message.on('warn', function (data) {
    console.log('warning: ', data);
});
message.then(function (result) {
    console.log('result: ', result);
}, function (err) {
    console.log('error:', err);
});

// message with unhandled type
ChromeAppManager.postMessage('abc', Math.random()).then(null, function (err) {
    console.log(err);
});

// message with known type
ChromeAppManager.postMessage('xyz.123', Math.random()).then(function (data) {
    console.log(data);
});
*/

ChromeAppManager.postMessage('fileSystem.test').then(function (data) {
    console.log(data);
});
