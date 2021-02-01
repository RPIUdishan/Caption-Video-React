import React from "react";
import '../node_modules/video-react/dist/video-react.css'
import { Player } from 'video-react';

import sub from './sub.vtt'
export const Captions = () => {
    return (
      <div className="caption-container">
      <Player videoId="video-1" autoPlay>
      <source
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        type="video/mp4"
      />
      <track
        kind="captions"
        src={sub}
        default
      />
      </Player>
      </div>
    );
}