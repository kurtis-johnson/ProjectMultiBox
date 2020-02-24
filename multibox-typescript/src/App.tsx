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

    const getVideoColumns = (numStreams: number) => {
        const videoCols = [];
        for(let x = 0;x <= numStreams;x++) {
            videoCols.push((
                <div className={"slds-col"}>
                    <video
                        style={{
                            border: '1px',
                            width: '98%',
                            maxWidth: '860px'
                        }}
                        id={"display_output_" + x}
                        autoPlay={true}
                        controls={true}
                    />
                </div>
            ));
        }

        return videoCols;
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className={"slds-gutters slds-grid"}>
                    {
                        getVideoColumns(numStreams)
                    }
                </div>
                <button className="slds-button slds-button_destructive capture_button" onClick={captureStream}>Capture Stream</button>
            </header>
        </div>
    );
}

export default App;
