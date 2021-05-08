
import React from 'react'
import ReactPlayer from 'react-player'
import './player.css'
class Player extends React.Component {
  render () {
    return (
    	<div className='player-wrapper'>
        <ReactPlayer
          url={this.props.url}
          className='react-player'
          controls
          muted
          width='100%'
          height='100%'
        />
      </div>
    )
  }
}
export default Player