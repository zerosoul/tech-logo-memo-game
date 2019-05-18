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
const Cards = React.lazy(() => import('./containers/Cards'));

const App = () => {
  return (
    <Provider store={store}>
      <FinishAlert />
      <Alert />
      <PlayTimer />
      <Header />
      <PlayButton />
      <Suspense
        fallback={
          <Loading>
            <div className="tip">Loading...</div>
          </Loading>
        }
      >
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
