// var onAccessApproved = async function(streamId, options) {
//     console.log(streamId, options);
//     try {
//         var constraints = {
//             audio: true,
//             video: true,
//             chromeMediaSourceId: streamId
//         };
//
//         const stream = await navigator.mediaDevices.getUserMedia(constraints);
//         console.log(stream);
//     }catch(error) {
//         console.log(error);
//     }
// };

chrome.runtime.onMessage.addListener(function (msg, sender, callback) {
   if(msg === 'capture') {
        var screenOptions = ['screen', 'window', 'audio', 'tab'];
        chrome.desktopCapture.chooseDesktopMedia(screenOptions, null, function(streamId, options) {
            callback({sourceId: streamId});
            return false;
        });
        return true;
   }
});

chrome.runtime.onStartup.addListener(function (args) {
    console.log(args);
});