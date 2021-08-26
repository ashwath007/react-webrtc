import React,{useRef,useEffect} from 'react'

export default function LocalVideoView(props) {


    const localVideoPlay = useRef();
    const {localStream} = props;


    const styles = {
        videoCont:{
             width:'150px',
             height:'150px',
             borderRadius: '8px',
             position: 'absolute',
             top: '5%',
             right: '23%'
        },

        videoEle: {
            width:'100%',
            height: '100%'
        }
    }

    useEffect(() => {
        if(localStream){
            const localVideo = localVideoPlay.current;
            localVideo.srcObject = localStream;

            localVideo.onloadmetadata = () => {
                localVideo.play();
            }
        }

    }, [localStream ])

    return (
        <div
        style={styles.videoCont}
        className="bg_sec"
        >
            <video 
            style={styles.videoEle}
            ref={localVideoPlay} 
            autoPlay
            muted
            >

            </video>
        </div>
    )
}
