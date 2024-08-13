// Function to create the card. Takes prop of profile pic, name and text
import PropTypes from 'prop-types';
import React, { useState } from 'react';


// Profile picture imports
import mrInc from '../assets/mr-incredible.jpg'
import mrsInc from '../assets/mrs-incredible.jpg'
import dash from '../assets/dash-incredibles.jpg'
import violet from '../assets/violet-incredibles.jpg'
// Bad profile picture imports
// import badMrInc from '../assets/mr-incredible.jpg'
import badMrsInc from '../assets/badMrsInc.jpg'
// import badDash from '../assets/dash-incredibles.jpg'
// import badViolet from '../assets/violet-incredibles.jpg'

function Card(props) {

  // This line create a variable name with a state.
  // It is initialised with props.name and changed with setName
  // When called, react will rerender the card function to apply state changes
  const [name, setName] = useState(props.name);
  const [profilePic, setProfilePic] = useState(props.profilePic);

  function onClickEvent() {
    switch (name) {
      case "Mrs Incredible":
        setName("Mrs Mediocre");
        setProfilePic(badMrsInc);
        break;
      case "Mrs Mediocre":
        setName("Mrs Incredible");
        setProfilePic(mrsInc);
        break;
      case "Violet":
        setName("Turquoise");
        break;
      case "Turquoise":
        setName("Violet");
        break;
      case "Mr Incredible":
        setName("Mr Gay");
        break;
      case "Mr Gay":
        setName("Mr Incredible");
        break;
      case "Dash":
        setName("Rash");
        break;
      case "Rash":
        setName("Dash");
        break;
      default:
        return;
    }
  }
  

  return(
      <div className="card">
    <img className="card-image" src={profilePic} alt="profile picture"></img>
    <h2 className = "card-title" alt="Name">{name}</h2>
    <p className="card-text">This is gonna be a sick app bra</p>
    <button onClick={() => onClickEvent()} className = "card-button">Don't Click Me</button>

  </div>
  );
}

Card.propTypes = {
  profilePic: PropTypes.string,
}

export default Card