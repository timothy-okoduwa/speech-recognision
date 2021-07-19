import React, { useState, useEffect, Fragment } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MicIcon from "@material-ui/icons/Mic";
import SaveIcon from "@material-ui/icons/Save";
import { Input } from "@material-ui/core";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const Onput = () => {
  const [note, setNote] = useState([
    {
      id: 1,
      title: "this is it",
      msg: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    },
    {
      id: 2,
      title: "this is not ",
      msg: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    },
  ]);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          height: "200px",
          width: "350px",
          backgroundColor: "black",
          borderRadius: "7px",
        }}
      >
        <div>
          <div
            style={{
              color: "white",
              border: "ipx solid white",
              paddingTop: "10px",
            }}
          >
            <Input
              placeholder="text goes into this place.."
              style={{ color: "white" }}
            />
          </div>
          <div style={{ color: "white" }}>{transcript}</div>
          <div
            style={{
              color: "lightblue",
              marginTop: "140px",
              marginLeft: "200px",
              cursor: "pointer",
            }}
          >
            <MicIcon onClick={SpeechRecognition.startListening} />
          </div>
          <div style={{ color: "#191e21", marginTop: "-29px" }}>
            <SaveIcon />
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          marginTop: "50px",
          height: "300px",
          width: "280px",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
      >
        {note.map(({ id, title, msg }) => (
          <div
            style={{
              backgroundColor: "black",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                // backgroundColor: "lightblue",
                height: "50px",
                // borderRadius: "7px",
                display: "flex",
                justifyContent: "center",
                // border: "1px solid white",
                color: "white",
                alignItems: "center",
              }}
            >
              {title}
            </div>

            <div
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {msg}
            </div>
            <div
              style={{
                marginTop: "190px",
                color: "red",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DeleteForeverIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onput;
