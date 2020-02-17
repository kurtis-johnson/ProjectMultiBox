import React from 'react';
import logo from './logo.svg';
import './App.css';

declare const chrome: any;

const App: React.FC = () => {
    const captureStream = () => {
        // @ts-ignore
        navigator.mediaDevices.getDisplayMedia({
            audio: true,
            video: true
        }).then((stream: any) => {
            console.log(stream);
            const video = document.getElementById('display_output');
            if(video != null) {
                // @ts-ignore
                video.srcObject = stream;
            }
        }).catch((error: any) => {
            console.log(error);
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <video style={{
                    border: '1px',
                    width: '98%',
                    maxWidth: '860px'
                }} id={"display_output"} autoPlay={true} controls={true}></video>
                <button onClick={captureStream}>Capture Stream</button>
            </header>
        </div>
    );
}

export default App;
