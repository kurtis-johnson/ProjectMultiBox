import React from 'react';
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
                        className={x == numStreams ? 'capture_video_max' : 'capture_video'}
                    />
                </div>
            ));
        }

        return videoCols;
    };

    return (
        <div>
            <body className="App-body">
                <div className={"slds-gutters slds-grid"}>
                    <div className="slds-col slds-col slds-size_1-of-8">
                        <nav className="demo-only slds-nav-vertical">
                            <div className="slds-nav-vertical__section">
                                <h2 id="entity-header" className="slds-nav-vertical__title nav-header slds-border_bottom">MultiBox</h2>
                                <ul aria-describedby="entity-header">
                                    <div>
                                        <button className="slds-button slds-button_success capture_button" onClick={captureStream}>Capture Stream</button>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className={"nav-panel slds-gutters slds-grid slds-col slds-size_7-of-8"}>
                        {
                            getVideoColumns(numStreams)
                        }
                    </div>
                </div>
            </body>
        </div>
    );
}

export default App;
