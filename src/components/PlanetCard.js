import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="cards" data-testid="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <h4 data-testid="planet-name">{planetName}</h4>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
