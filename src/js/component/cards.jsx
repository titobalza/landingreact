import React from 'react'

const Card = (props) => {
  const { imageUrl, title, text, buttonText } = props;

  return (
    <div className='col'> 
        <div className="card flex" >
        <img src={imageUrl} className="card-img-top" alt="Card Image" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">{buttonText}</a>
        </div>
        </div>
    </div>
  );
};

export default Card;