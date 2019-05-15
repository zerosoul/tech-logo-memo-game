import React, { useState } from 'react';
import Cards from './containers/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import PlayButton from './components/PlayButton';
import PlayTimer from './components/PlayTimer';
import Background from './components/ParticlesBackground';

const App = () => {
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const handleStarted = () => {
    console.log('ddd');
    if (!started) {
      setStarted(true);
    }
    setPlaying(true);
  };
  return (
    <>
      <Background />
      <PlayTimer playing={playing} />
      <Header />
      <PlayButton started={started} handleStarted={handleStarted} />
      <Cards />
      <Footer />
    </>
  );
};
export default App;
