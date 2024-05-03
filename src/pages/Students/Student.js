import { Box } from '@mui/material';
import Webcam from "react-webcam";
import {useRef} from 'react';



export default function Student() {


const webRef=useRef(null)

    return (
        <div>
        <h1>Student Dashboard</h1>
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
        <div class="container">
            <form>
                <input type="text" id="chatInput" placeholder="Enter Text Here" name="chatInput"/>
            </form>
            <button>Submit</button>
        </div>
        </div>    
        </div>
    );
}