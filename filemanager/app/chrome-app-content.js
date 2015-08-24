'use strict';

var webview = ChromeAppManager.initConnection('webview');

webview.register('xyz', function (data, type) {
    data.message = 'hello world';
    this.postMessage(data);
});
