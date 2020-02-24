import React from 'react';
import logo from './logo.svg';
import './App.css';

declare const chrome: any;

const App: React.FC = () => {
    const captureStream = () => {
        let gdmConst = {
            audio: true,
            video: true
        };
        // @ts-ignore
        navigator.mediaDevices.getDisplayMedia(gdmConst).then((stream: any) => {
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
        <div className="App slds-gutters">
            <header className="App-header">
                <div className={"slds-col slds-container_left"}>
                    <video style={{
                        border: '1px',
                        width: '98%',
                        maxWidth: '860px'
                    }} id={"display_output"} autoPlay={true} controls={true}></video>
                </div>
                <button className="slds-button slds-button_destructive capture_button" onClick={captureStream}>Capture Stream</button>
            </header>
        </div>
    );
}

export default App;
