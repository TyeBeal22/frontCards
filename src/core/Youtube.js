import React from 'react';
import YouTube from 'react-youtube';


// IsCl6FR383xwpafgEVGYQg

class Youtube extends React.Component {

  VideoOnReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '370',
      width: '430rem',
      playerVars: {
        autoplay: 1,
      },
    };



 
    const {videoId} = this.props
    return <YouTube videoId={videoId} opts={opts} onReady={this.VideoOnReady} className="play" />;
  }
 
}

export default Youtube;