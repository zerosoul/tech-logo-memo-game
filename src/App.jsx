import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import LangDropdown from './components/LangDropdown';
import Loading from './components/Loading';
import PageLoading from './components/PageLoading';
const Alert = React.lazy(() => import('./components/Alert'));
const Share = React.lazy(() => import('./components/Share'));
const Comment = React.lazy(() => import('./components/Comment'));
const PlayTimer = React.lazy(() => import('./components/PlayTimer'));
const AddHomePopup = React.lazy(() => import('./components/AddHomePopup'));
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const FinishAlert = React.lazy(() => import('./components/FinishAlert'));
import Fullscreen from './components/Fullscreen';
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
    <Suspense fallback={<PageLoading />}>
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
          <Cards />
        </Suspense>
        <AddHomePopup />
        <Comment />
        <Footer />
      </Provider>
    </Suspense>
  );
};
export default App;
