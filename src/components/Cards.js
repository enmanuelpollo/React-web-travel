import './Cards.css'
import React from 'react'
import CardItem from './CardItem';
import Img9 from '../images/img-9.jpg';
import Img2 from '../images/img-2.jpg';
import Img3 from '../images/img-3.jpg';
import Img8 from '../images/img-8.jpg';
import Img1 from '../images/img-1.jpg';

function Cards() {
  return (
    <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards_comtainer">
            <div className="card__wrapper">
                <ul className="cards__items">
                   <CardItem 
                   src={Img9}
                   text="Watch an unforgetable sunrise in Punta Cana"
                   label='Memorable'
                   path='/services'
                   /> 
                    <CardItem 
                   src={Img2}
                   text="Travel throught the Island of Bali in a Private Cruise"
                   label='Luxery'
                   path='/services'
                   />       
                </ul>
                <ul className="cards__items">
                   <CardItem 
                   src={Img3}
                   text="Get into the beautifull caribe ocean and go fishing with the locals"
                   label='Mistery'
                   path='/services'
                   /> 
                    <CardItem 
                   src={Img8}
                   text="Discover the stunning city of Toledo in spain"
                   label='Discover'
                   path='/services'
                   />   
                   <CardItem 
                   src={Img1}
                   text="Enjoy some of the best beaches in the world in The Dominican Republic"
                   label='Enjoy'
                   path='/services'
                   />       
                </ul>
            </div>
        </div>
    </div>
  );    
}


export default Cards;
