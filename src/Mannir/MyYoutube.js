import React from 'react'
import YouTube from 'react-youtube'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


class MyYoutube extends React.Component {
  render() {
    const opts = {
      height: '300',
      width: '400',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
        <Paper elevation={5} style={{margin: 10}}>
          <Typography type="headline" component="h3">
            Makkah Live HD - قناة القران الكريم - بث مباشر
        </Typography>
          
          <YouTube
            videoId="B1WxV33bUd4"
            opts={opts}
            onReady={this._onReady}
          />

        </Paper>
      </div>

      
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default MyYoutube;