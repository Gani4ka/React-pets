import React from 'react';
import PropTypes from 'prop-types';
import style from './pet.module.css';

const Pet = ({ petInfo }) => {
  const { name, image, age, gender, color, breed, description } = petInfo;
  return (
    <>
      <h1>All about {name}</h1>
      <div className={[style.wrap]}>
        <div className={[style.img]}>
          <img src={image} alt="dog or cat" />
        </div>
        <div>
          <p>
            <strong>Age:</strong> {age}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Color:</strong> {color}
          </p>
          <p>
            <strong>Breed:</strong> {breed}
          </p>
        </div>
        <p className={[style.description]}>{description}</p>
      </div>
    </>
  );
};

export default Pet;

Pet.propTypes = {
  petInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
