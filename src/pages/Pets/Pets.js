import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PetCard from '../../components/PetCard/PetCard';
import style from './pets.module.css';
import pseudoFetcher from '../../services/pseudoFetcher';

class Pets extends Component {
  state = {
    petsArr: [],
  };

  componentDidMount() {
    const petsArr = pseudoFetcher();
    this.setState({
      petsArr,
    });
  }

  render() {
    const { petsArr } = this.state;
    const { location } = this.props;
    return (
      <main className={[style.main]}>
        <div className={[style.container]}>
          {petsArr.map(el => (
            <Link
              key={el.id}
              to={{
                pathname: `/pets/${el.id}`,
                state: { from: location },
              }}
            >
              <PetCard img={el.image} name={el.name} id={el.id} />
            </Link>
          ))}
        </div>
      </main>
    );
  }
}

export default Pets;

Pets.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
