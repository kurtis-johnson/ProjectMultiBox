var captureButton = document.getElementById('capture_stream_button');

captureButton.onclick = function(element) {
    chrome.runtime.sendMessage('gapgalfpoocakedbgkojmceggnnippdg', 'capture', {}, function (args) {
        // chrome.windows.create({
        //     url: 'playback_window.html',
        //     type: 'popup',
        //     width: 800,
        //     height: 600
        // }, function(displayWindow) {
        //     displayWindow['showStream'](args.streamId);
        // });
    });
};