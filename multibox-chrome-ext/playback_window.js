var showStream = async function(streamId) {
    var stream;

    var constraints = {
        audio: true,
        video: true,
        chromeMediaSourceId: streamId
    };

    stream = await navigator.mediaDevices.getUserMedia(constraints);

    var video = document.getElementById('screen-view');
    video.src = URL.createObjectURL(stream);
    console.log(stream);
}