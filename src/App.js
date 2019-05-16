import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Cards from './containers/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import PlayButton from './components/PlayButton';
import PlayTimer from './components/PlayTimer';
import Background from './components/ParticlesBackground';

const App = () => {
  return (
    <Provider store={store}>
      <Background />
      <PlayTimer />
      <Header />
      <PlayButton />
      <Cards />
      <Footer />
    </Provider>
  );
};
export default App;
