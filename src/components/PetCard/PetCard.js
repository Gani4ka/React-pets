import React from 'react';
import PropTypes from 'prop-types';
import style from './petCard.module.css';

const Pet = ({ img, name, id }) => (
  <div className={[style.card]} id={id}>
    <img src={img} alt="pet" />
    <h2>{name}</h2>
  </div>
);

export default Pet;

Pet.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
