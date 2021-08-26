import { setCallLocalStream } from "../../../actions/callLocalStream"
import store from "../../../store"

const defaultContrain = {
    audio: true,
    video: true
}

export const getLocalStream = () => {
    navigator.mediaDevices.getUserMedia(defaultContrain)
        .then(stream => {
            store.dispatch(setCallLocalStream(stream))
        })
        .catch((err) => {
            console.log("ERROR: Local Stream access denied")
        })
}