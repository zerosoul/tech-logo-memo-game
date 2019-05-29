import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Alert from './components/Alert';
import Header from './components/Header';
import Footer from './components/Footer';
import AddHomePopup from './components/AddHomePopup';
import LangDropdown from './components/LangDropdown';
import Loading from './components/Loading';
import PlayTimer from './components/PlayTimer';
import Share from './components/Share';
const FinishAlert = React.lazy(() => import('./components/FinishAlert'));
import Fullscreen from './components/Fullscreen';
const Background = React.lazy(() => import('./components/ParticlesBackground'));
const Options = React.lazy(() => import('./containers/Options'));
const Cards = React.lazy(() => {
  const tmp = import('./containers/Cards');
  return new Promise(r => {
    setTimeout(() => {
      return r(tmp);
    }, 1000);
  });
});
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);
const App = () => {
  return (
    <Provider store={store}>
      <Share />
      <Alert />
      <PlayTimer />
      <Header />
      <LangDropdown />
      {!isMobile && <Fullscreen />}
      <Suspense fallback={<Loading />}>
        <Options />
        <FinishAlert />
        <Background />
        <Cards />
      </Suspense>
      <AddHomePopup />
      <Footer />
    </Provider>
  );
};
export default App;
