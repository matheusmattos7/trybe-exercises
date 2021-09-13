import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const { pokemon: { name, type, averageWeight: { value, measurementUnit }, image, moreInfo } } = this.props;

    return (
      <div className="pokemon">
        <div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{`Average weight: ${value} ${measurementUnit}`}</p>
      </div>
        <img src={ image } alt={`${name} sprite`} />
        <a target="_blank" rel="noreferrer" href={moreInfo}> More Info </a>
      </div>
      );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
}

export default Pokemon;
