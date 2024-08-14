import Card from "../Components/Card";
import AddCard from "../Components/Card";
import {FaTrashAlt} from 'react-icons/fa';
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


function Body() {

    // State to hold the list of cards
  const [cards, setCards] = useState([
    { profilePic: badMrsInc, name: "Mrs Mediocre" },
    { profilePic: badMrInc, name: "Mr Gay" },
    { profilePic: badViolet, name: "Turquoise" },
    { profilePic: badDash, name: "Rash" }
  ]);

  const addNewCard = () => {
    const newCard = { profilePic: mrInc, name: "New Incredible" };  // New card details
    setCards([...cards, newCard]);  // ... is the spread operator. It takes the elements of the 'cards' array and 'spreads them into a new array 
};

    return(
        <>  
            <button onClick={addNewCard}>Add New Card</button>
            <hr/>
                {cards.map((card, index) => (
                    <Card 
                        key={index} 
                        profilePic={card.profilePic} 
                        name={card.name} 
                    />
                ))}
            <hr/>
            <FaTrashAlt
                role="button"
                tabIndex   ="0" 
            />
        </>
    );
}

export default Body;