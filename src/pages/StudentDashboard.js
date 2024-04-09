import { Box } from '@mui/material';
import React from 'react'
import '../App.css'

const data = [
    { name: "John Doe", attention: "87%"}
]

export default function StudentDashboard() {
    return (
        <div>
        <div classname="studentFace" style={{ 
            marginLeft: '10%', 
            marginTop: '60px', 
            width: '30%',
            float: 'left'
        }} >
            <Box color="white"
                bgcolor="black" p={30}>
                Box for Camera
            </Box>
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
