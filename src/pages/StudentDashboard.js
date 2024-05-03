import { Box } from '@mui/material';
import React from 'react'
import '../App.css'
import Webcam from "react-webcam";
import {useRef} from 'react';

const data = [
    { name: "John Doe", attention: "87%"}
]



export default function StudentDashboard() {

const webRef=useRef(null)


    return (
        <div>
        <div classname="studentFace" style={{ 
            marginLeft: '10%', 
            marginTop: '60px', 
            width: '30%',
            float: 'left'
        }} >
            <div className="App">
                <Webcam refs={webRef}/>
            </div>
        </div>    
        <div classname="chat" style={{ 
            marginRight: '10%',
            marginTop: '60px',
            width: '30%',
            float: 'right'
        }} >
            <Box color="black"
                bgcolor="white" p={30}>
                Box for Chat
            </Box>
        <div class="chatContainer">
            <form>
                <input type="text" id="chatInput" placeholder="Enter Text Here" name="chatInput"/>
            </form>
            <button>Submit</button>
        </div>
        </div>  
        </div>
    );
}
