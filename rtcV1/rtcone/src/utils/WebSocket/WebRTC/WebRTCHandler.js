import { setCallLocalStream } from "../../../actions/callLocalStream"
import store from "../../../store"


const defaultConstrains = {
    video: true,
    audio: true
};

export const getLocalStream = () => {
    navigator.mediaDevices.getUserMedia(defaultConstrains)
        .then(stream => {
            store.dispatch(setCallLocalStream(stream));
        })
        .catch(err => {
            console.log('error occured when trying to get an access to get local stream');
            console.log(err);
        });
};