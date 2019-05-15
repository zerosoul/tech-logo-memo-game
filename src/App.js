import React, { Component } from 'react';
import Cards from './containers/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import PlayButton from './components/PlayButton';
import PlayTimer from './components/PlayTimer';
import Background from './components/ParticlesBackground';
import { hot } from 'react-hot-loader/root';

class App extends Component {
  render() {
    return (
      <>
        <Background />
        <PlayTimer />
        <Header />
        <PlayButton />
        <Cards />
        <Footer />
      </>
    );
  }
}
export default hot(App);
