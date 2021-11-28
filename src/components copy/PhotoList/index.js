
import React, { useState } from 'react';

import Modal from '../Modal';

const PhotoList = ({ category }) => {
  

  const [photos] = useState([
    {
      name: 'The Tech Blog',
      category: 'commericial',
      description: 'A web site that allows creating and deleting blog',
    },
    {
      name: 'Squid Store',
      category: 'commercial',
      description:'I site for Squid Games fans to purchase gears',
    },
    {
      name: 'Portfolio Project',
      category: 'portfolio',
      description: 'a site using html and css coding',
    },
    {
      name: 'Social Medi',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery aisle',
      category: 'portfolio',
      description:'An application that gives a% day forecast of the weather in any City',
    },
    {
      name: 'Team Project Bored',
      category: 'portfolio',
      description: 'A site that uses API to suggest activities',
    },
    
    
  ]);

   const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
