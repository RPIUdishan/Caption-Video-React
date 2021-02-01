import React from "react";
import {captionData} from './data';
import '../node_modules/video-react/dist/video-react.css'
// import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

export const Captions = () => {
    return (
        // <div className="caption-container">
    

      <div className="caption-container">
      <Player
textTrack = {captionData}
      
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      
    />
        {/* {captionData.map((data, key) => {
          return (
            <div key={key}>
              {data.text +
                " , " +
                data.startTime +
                " ," +
                data.endTime }
            </div>
          );
        })} */}
        
      </div>


    
        // </div>
    );
}