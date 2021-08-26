import React,{useRef,useEffect} from 'react'

export default function RemoteVideoView(props) {


    const remoteVideoPlay = useRef();
    const {remoteStream} = props;


    const styles = {
        videoCont:{
             width:'100%',
             height:'100%',
            
        },

        videoEle: {
            width:'100%',
            height: '100%'
        }
    }

    useEffect(() => {
        if(localStream){
            const remoteVideo = remoteVideoPlay.current;
            remoteVideo.srcObject = remoteStream;

            remoteVideo.onloadmetadata = () => {
                remoteVideo.play();
            }
        }

    }, [remoteStream ])

    return (
        <div
        style={styles.videoCont}
    
        >
            <video 
            style={styles.videoEle}
            ref={remoteVideoPlay} 
            autoPlay
            >

            </video>
        </div>
    )
}
