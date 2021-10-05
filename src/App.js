import './App.css';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Howl} from 'howler';
import Cosmos from "./Beats/Cosmos.mp3"
import drums from "./Beats/drums.mp3"
import natrio from "./Beats/natrio.mp3"
import power from "./Beats/power.mp3"
import schoolbell from "./Beats/schoolbell.mp3"
import sfx from "./Beats/sfx.mp3"
import Sun from "./Beats/Sun.mp3"
import Toutdrums from "./Beats/Toutdrums.mp3"
import tranquilo from "./Beats/tranquilo.mp3"

const audioClips = [
  {src: Cosmos, label: 'Functions', key: 'Q'},
  {src: drums, label: 'Flex', key: 'W'},
  {src: natrio, label: 'Components', key: 'E'},
  {src: power, label: 'Recursions!!', key: 'A'},
  {src: schoolbell, label: 'BootCamp in Session', key: 'S'},
  {src: sfx, label: 'Return', key: 'D'},
  {src: Sun, label: 'onClick', key: 'Z'},
  {src: Toutdrums, label: 'Blinking Cursor', key: 'X'},
  {src: tranquilo, label: 'Array', key: 'C'},
];

function App() {
  const[label,setLabel] = useState('Press a Key');

  const playSound = (soundTrack, label) => {
    let sound = new Howl({
      src: [soundTrack]
    });
    sound.play();
    setLabel(label);
  }
  
  return (
    <Wrapper>
      <Background />
      <Drumkit>
        <Display>
          <Name>{label}</Name>
        </Display>
        <Keys>
         {
           audioClips.map((soundObj) => {
            let soundKey = soundObj.key;
            let label = soundObj.label;
            let soundTrack = soundObj.src;
            
            return <SingleKeys onClick={()=>playSound(soundTrack, label)}>{soundKey}</SingleKeys>
           })}
        </Keys>
      </Drumkit>
    </Wrapper>
  );
}

export default App;

const Wrapper =styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
`
const Background =styled.div`

`
const Drumkit =styled.div`
background: linear-gradient(145deg, #ffffff, #f0f0f0);
box-shadow:  10px 10px 20px #c3c3c3,
             -10px -10px 20px #fdfdfd;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 350px;
height: 500px;
`
const Display =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: 100px;
margin: 3em;
font: 800 11px system-ui;
padding: 1px 5px 2px; 

background: linear-gradient(145deg, #ffffff, #f0f0f0);
box-shadow:  10px 10px 20px #c3c3c3,
             -10px -10px 20px #fdfdfd;
border-radius: 20px;
`
const Name =styled.div`
align-items: flex-start;
cursor: default;
text-align: center;
justify-content: center;
font-size: 35px;

`
const Keys =styled.div`
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 95%;
height: 280px;

`
const SingleKeys =styled.div`
border-radius: 20px;
background: linear-gradient(145deg, #ffffff, #f0f0f0);
box-shadow:  8px 8px 16px #c3c3c3,
             -8px -8px 16px #fdfdfd;
display: flex;
justify-content: center;
align-items: center;
color: black;
font-weight: bold;
height: 80px;
width: 30%;
margin: 0px 4px 0px 4px;
font-size: x-large;

&:hover{
background: lightslategray;
color: white;
}
`