import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Alert from './components/Alert';
import FinishAlert from './components/FinishAlert';
import Header from './components/Header';
import Footer from './components/Footer';
import AddHomePopup from './components/AddHomePopup';
import PlayButton from './components/PlayButton';
import Loading from './components/Loading';
import PlayTimer from './components/PlayTimer';
const Ribbon = React.lazy(() => import('./components/Ribbon'));
const Background = React.lazy(() => import('./components/ParticlesBackground'));
const Cards = React.lazy(() => {
  const tmp = import('./containers/Cards');
  return new Promise(r => {
    setTimeout(() => {
      return r(tmp);
    }, 4000);
  });
});

const App = () => {
  return (
    <Provider store={store}>
      <FinishAlert />
      <Alert />
      <PlayTimer />
      <Header />
      <PlayButton />
      <Suspense fallback={<Loading />}>
        <Ribbon />
        <Background />
        <Cards />
      </Suspense>
      <AddHomePopup />
      <Footer />
    </Provider>
  );
};
export default App;
