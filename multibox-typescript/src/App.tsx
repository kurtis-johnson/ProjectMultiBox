import React from 'react';
import logo from './logo.svg';
import './App.css';

declare const chrome: any;

const App: React.FC = () => {
    const captureStream = () => {

        chrome.runtime.sendMessage(chrome.runtime.getManifest().id, 'capture', {}, async (args: any) => {
            let stream;

            const constraints = {
                audio: true,
                video: true,
                chromeMediaSourceId: args.sourceId
            };

            stream = await navigator.mediaDevices.getUserMedia(constraints);

            const video = document.getElementById('screen-view');
            // @ts-ignore
            video.src = URL.createObjectURL(stream);
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <video id={"display_output"}></video>
                <button onClick={captureStream}>Capture Stream</button>
            </header>
        </div>
    );
}

export default App;
