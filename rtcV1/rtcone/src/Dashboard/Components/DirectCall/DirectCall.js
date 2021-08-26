import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../VideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoCall/RemoteVideoView';

const DirectCall = (props) => {
  const { localStream, remoteStream } = props;

  return (
    <>
      <LocalVideoView localStream={localStream} />
      {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
    </>
  );
};

function mapStoreStateToProps ({ call }) {
  return {
    ...call
  };
}

export default connect(mapStoreStateToProps, null)(DirectCall);
