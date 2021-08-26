import { connect } from 'react-redux'
import React from 'react'
import LocalVideoView from '../VideoView/LocalVideoView'


 function DirectCall(porps) {
    return (
        <div>

        </div>
    )


const mapStoreToProps = ({call}) => {
    return{
        ...call
    }   
}

}


export default connect(mapStoreToProps)(DirectCall);
