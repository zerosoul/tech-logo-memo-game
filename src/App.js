import React, { Component } from 'react';
import Cards from './containers/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import PlayButton from './components/PlayButton';
import PlayTimer from './components/PlayTimer';
import Background from './components/ParticlesBackground';
import { hot } from 'react-hot-loader/root';

class App extends Component {
  state = {
    started: false,
    selectedCount: 0
  };
  handleStarted = () => {
    console.log('ddd');

    this.setState({
      started: true
    });
  };
  render() {
    const { started, selectedCount } = this.state;
    return (
      <>
        <Background />
        <PlayTimer />
        <Header />
        <PlayButton started={started} handleStarted={this.handleStarted} />
        <Cards selectedCount={selectedCount} />
        <Footer />
      </>
    );
  }
}
export default hot(App);
