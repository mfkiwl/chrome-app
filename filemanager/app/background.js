chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        id: '',
        singleton: true,
        outerBounds: {
            width: 1600,
            height: 1200
        }
    });
});
