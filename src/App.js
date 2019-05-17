import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Alert from './components/Alert';
import FinishAlert from './components/FinishAlert';
import Header from './components/Header';
import Footer from './components/Footer';
import PlayButton from './components/PlayButton';
import PlayTimer from './components/PlayTimer';
import Ribbon from './components/Ribbon';
const Cards = React.lazy(() => './containers/Cards');
const Background = React.lazy(() => './components/ParticlesBackground');

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
