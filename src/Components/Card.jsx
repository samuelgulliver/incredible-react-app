// Function to create the card. Takes prop of profile pic, name and text
import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Profile picture imports
import mrInc from '../assets/mr-incredible.jpg'
import mrsInc from '../assets/mrs-incredible.jpg'
import dash from '../assets/dash-incredibles.jpg'
import violet from '../assets/violet-incredibles.jpg'
// Bad profile picture imports
import badMrInc from '../assets/bad-mr-inc.jpg'
import badMrsInc from '../assets/bad-mrs-inc.jpg'
import badDash from '../assets/bad-dash.jpg'
import badViolet from '../assets/bad-violet.jpg'

function Card(props) {

  // This line create a variable name with a state.
  // It is initialised with props.name and changed with setName
  // When called, react will rerender the card function to apply state changes
  const [name, setName] = useState(props.name);
  const [profilePic, setProfilePic] = useState(props.profilePic);
  const [buttonText, setButtonText] = useState('Help Me!');
  const [backgroundColour, setBackgroundColour] = useState('lightgrey');

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
        setProfilePic(badViolet);
        break;
      case "Turquoise":
        setName("Violet");
        setProfilePic(violet);
        break;
      case "Mr Incredible":
        setName("Mr Gay");
        setProfilePic(badMrInc);
        break;
      case "Mr Gay":
        setName("Mr Incredible");
        setProfilePic(mrInc);
        break;
      case "Dash":
        setName("Rash");
        setProfilePic(badDash);
        break;
      case "Rash":
        setName("Dash");
        setProfilePic(dash);
        break;
      default:
        return;
    }
    if (buttonText === "Help Me!") {
      setButtonText("Don't Click Me");
      setBackgroundColour('lightgoldenrodyellow');
    }
    else {
      setButtonText('Help Me!');
      setBackgroundColour('lightgrey');
    }
  }

  return(
      <div className="card" style={{backgroundColor: backgroundColour}}>
    <img className="card-image" src={profilePic} alt="profile picture"></img>
    <h2 className = "card-title" alt="Name">{name}</h2>
    <p className="card-text">This is gonna be a sick app bra</p>
    <button onClick={() => onClickEvent()} className = "card-button">{buttonText}</button>

  </div>
  );
}

Card.propTypes = {
  profilePic: PropTypes.string,
}

// Card.defaultProps = {
//   name: "Name"
// }

export default Card