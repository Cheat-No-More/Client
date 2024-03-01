import { Box } from '@mui/material';

export default function Student1() {
    return (
        <div>
        <h1>Student 1 Dashboard</h1>
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