import React from 'react';
import './Card.css';

const Card = (props)=>{
    return (
        <>
        <div className='container__box'>
                    <span>{props.movieName}</span>
                    <img src={props.imgsrc} alt="Movie Poster" />
                    <div className='container__box-bottom'>
                        <h3>{props.category}</h3>
                        <small>{props.releaseDate}</small>
                        <a href={props.link}><button className='container__box-bottom__button'>Watch Now</button></a>
                    </div>
                </div>
        </>
    )
}

export default Card
