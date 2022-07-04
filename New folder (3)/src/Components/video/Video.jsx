import Button from "../common/Button";
import { useRef } from "react";

function VideoPlayer() {
  
  const videoer = useRef(null)

  return (
    <div>
      <video ref={videoer}  data-testid="video-container" width="400" controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button vid={videoer} fun='pl'>
          PLAY
        </Button>
        <Button vid={videoer} fun='pz'>
          PAUSE
        </Button>
        <Button vid={videoer} fun='sk'>
          SKIP 30 SECONDS
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
