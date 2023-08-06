import React, { useState } from 'react';
import './CardList.css';
import { NavLink } from 'react-router-dom';

const CardList = () => {
  const initialImages = [
    { id: 1, src: 'https://i.pinimg.com/originals/d9/db/11/d9db11953a2d185d37246bb1f500c957.png', liked: false },
    { id: 2, src: 'https://github.com/amrita1295/myRepo3/assets/56605853/b1040e03-bfa1-437e-9ba1-af2963790c4c', liked: false },
    { id: 3, src:'https://github.com/amrita1295/myRepo3/assets/56605853/7aa7b88e-f809-4710-a5b8-32d01dd9f784', liked: false},
    { id: 4, src: 'https://github.com/amrita1295/myRepo3/assets/56605853/046bb5f3-7999-4f33-90a5-05fe49252bbc', liked: false},
    { id: 5, src:'https://github.com/amrita1295/myRepo3/assets/56605853/b1040e03-bfa1-437e-9ba1-af2963790c4c', liked: false},
    { id: 6, src:'https://github.com/amrita1295/myRepo3/assets/56605853/7aa7b88e-f809-4710-a5b8-32d01dd9f784', liked: false},
    { id: 7, src: 'https://github.com/amrita1295/myRepo3/assets/56605853/046bb5f3-7999-4f33-90a5-05fe49252bbc' ,liked: false},
    { id: 8, src: 'https://i.pinimg.com/originals/d9/db/11/d9db11953a2d185d37246bb1f500c957.png', liked : false}


    // Add more images here
  ];

  const [images, setImages] = useState(initialImages);

  const handleLikeClick = (imageId) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === imageId ? { ...image, liked: !image.liked } : image
      )
    );
  };

  return (
    <>

      <div className="card_list">
        {/* ... */}
        <h3>Headphones For you!</h3>
        <div className="card_flex mt-4">
          {images.map((image) => (
            <div key={image.id} className="card_item">
              <NavLink to={`/product/${image.id}`} className="img_div">
                <img src={image.src} alt={`Image ${image.id}`} />
              </NavLink>

              <div className="love_icon" onClick={() => handleLikeClick(image.id)}>
                {image.liked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
              </div>

              <div className="p-2 text_item">
                <div className="text_flex">
                  <NavLink to={`/product/${image.id}`}>
                    <p className='m-0 fn_18'><b>Headphones {image.id}</b></p>
                  </NavLink>
                  <p className='m-0 '>₹450</p>
                </div>
                <NavLink to={`/product/${image.id}`}>
                  <p className='m-0 fn_14 card_p'>You have exceeded expectations; your dedication, skills, and results are truly commendable. Keep up the excellent work!</p>
                </NavLink>
                <div className="rate_flex">
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  &nbsp; <small>(123)</small>
                </div>
                <div className="text-left mt-3">
                  <button className='btn btn-primary'>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
