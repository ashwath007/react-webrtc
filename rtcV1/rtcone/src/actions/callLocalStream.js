export const CALL_LOCAL_STREAM = "CALL_LOCAL_STREAM";


export const setCallLocalStream = (localstream) => {
    return ({
        type: CALL_LOCAL_STREAM,
        localstream
    })
}