import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Cards from './containers/Cards';
import Alert from './components/Alert';
import FinishAlert from './components/FinishAlert';
import Header from './components/Header';
import Footer from './components/Footer';
import PlayButton from './components/PlayButton';
import PlayTimer from './components/PlayTimer';
import Background from './components/ParticlesBackground';
import Ribbon from './components/Ribbon';

const App = () => {
  return (
    <Provider store={store}>
      <Ribbon />
      <FinishAlert />
      <Alert />
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
