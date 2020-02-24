import React from 'react';
import logo from './logo.svg';
import './App.css';

declare const chrome: any;

const App: React.FC = () => {
    const [numStreams, setNumStreams] = React.useState(0);

    const captureStream = () => {
        let gdmConst = {
            audio: true,
            video: true
        };
        // @ts-ignore
        navigator.mediaDevices.getDisplayMedia(gdmConst).then((stream: any) => {
            console.log(stream);
            const video = document.getElementById('display_output_' + numStreams);
            if(video != null) {
                // @ts-ignore
                video.srcObject = stream;
                setNumStreams(numStreams + 1);
            }
        }).catch((error: any) => {
            console.log(error);
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className={"slds-gutters slds-grid"}>
                    <div className={"slds-col"}>
                        <video
                            style={{
                                border: '1px',
                                width: '98%',
                                maxWidth: '860px'
                            }}
                            id={"display_output_0"}
                            autoPlay={true}
                            controls={true}
                        />
                    </div>
                    <div className={"slds-col"}>
                        <video
                            style={{
                                border: '1px',
                                width: '98%',
                                maxWidth: '860px'
                            }}
                            id={"display_output_1"}
                            autoPlay={true}
                            controls={true}
                        />
                    </div>
                </div>
                <button className="slds-button slds-button_destructive capture_button" onClick={captureStream}>Capture Stream</button>
            </header>
        </div>
    );
}

export default App;
