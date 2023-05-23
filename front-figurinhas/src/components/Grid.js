import {FaTrash,FaEdit} from "react-icons/fa";

import './cardGrid.css';

const Grid = ({ cards }) => {
    return (
      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <p>Name: {card.name}</p>
            <p>Country: {card.country}</p>
            <p>Sponsor: {card.sponsor}</p>
            <p>position: {card.position}</p>
            <p>Type: {card.cardtype}</p>
            <p>Age: {card.age}</p>
            <p>Height: {card.height}</p>
            <p>Weight: {card.weight}</p>
            <div className="icon-container">
                <FaEdit className="edit-icon" />
                <FaTrash className="delete-icon" />
            </div>
          </div>          
        ))}
      </div>
      
    );
  };

export default Grid;
