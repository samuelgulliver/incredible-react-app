import Card from "../Components/Card";

// Profile picture imports
import mrInc from '../assets/mr-incredible.jpg'
import mrsInc from '../assets/mrs-incredible.jpg'
import dash from '../assets/dash-incredibles.jpg'
import violet from '../assets/violet-incredibles.jpg'


function Body() {

    return(
        <>
            <Card profilePic = {mrsInc} name = "Mrs Incredible"/>
            <Card profilePic = {violet} name = "Violet"/>
            <Card profilePic = {dash} name = "Dash"/>
            <Card profilePic = {mrInc} name = "Mr Incredible"/>    
        </>
    );
}

export default Body