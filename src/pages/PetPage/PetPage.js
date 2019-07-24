import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from '../../components/Pet/Pet';
import style from './petPage.module.css';
import pseudoFetcher from '../../services/pseudoFetcher';

class PetPage extends Component {
  state = {
    petObj: {},
  };

  id = this.props.match.params.petId;

  componentDidMount() {
    const petsArr = pseudoFetcher();
    const petObj = petsArr.filter(el => el.id === this.id)[0];

    this.setState({
      petObj,
    });
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state) {
      return this.props.history.push(state.from);
    }
    return this.props.history.push({
      pathname: '/pets',
    });
  };

  render() {
    const { petObj } = this.state;
    return (
      <main className={[style.main]}>
        <button
          className={[style.btn]}
          type="button"
          onClick={this.handleGoBack}
        >
          &larr; Return
        </button>
        <Pet petInfo={petObj} />
      </main>
    );
  }
}

export default PetPage;

PetPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};
