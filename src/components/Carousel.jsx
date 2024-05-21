import React, { Component } from 'react';
import './Carousel.css';
import { Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  goToNext = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length
    }));
  };

  goToPrevious = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + this.props.images.length) % this.props.images.length
    }));
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;
    const [topText, bottomText] = images[currentIndex].text.split(',');

    return (
      <div className="carousel">
        <Button className="carousel-button prev" onClick={this.goToPrevious}>
          <ArrowBackIos />
        </Button>
        <div className="carousel-content">
          <div className="carousel-text top">{topText}</div>
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="carousel-image" />
          <div className="carousel-text bottom">{bottomText}</div>
        </div>
        <Button className="carousel-button next" onClick={this.goToNext}>
          <ArrowForwardIos />
        </Button>
      </div>
    );
  }
}

export default Carousel;

