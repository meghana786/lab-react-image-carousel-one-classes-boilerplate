import React from 'react';
import Carousel from './components/Carousel';
import eyes from './images/eyes.jpg';
import faces from './images/faces.jpg';
import girlface from './images/girlface.jpg';

const images = [
  { src: eyes, alt: 'Eyes Image', text: 'Crying Lady, Why so serious?' },
  { src: faces, alt: 'Faces Image', text: 'Faces, How many faces do you have?' },
  { src: girlface, alt: 'Girl Face Image', text: 'Inside out, The best person to guide you is yourself' }
];

const App = () => {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
};

export default App;
