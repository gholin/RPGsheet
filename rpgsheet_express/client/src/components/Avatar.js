import React, { Component } from 'react';
import '../styles/Avatar.css';
import Image from 'react-bootstrap/Image'

export default class Avatar extends Component {
  render() {
    return (
      // Public folder is accessible everywhere like this
      <div>
        <img id="cyberpunkguy" src={this.props.pathProp} rounded='true' alt={this.props.altProp}/>
      </div>
    );
  }
}

Avatar.defaultProps = {
   pathProp: '/images/cyberpunk2077guy.png',
   altProp: 'Character'
}
