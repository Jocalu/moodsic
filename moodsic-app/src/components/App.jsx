import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import Dashboard from './dashboard/dashboard';
import Header from './header/header';
import Footer from './footer/footer';
import MoodList from './list/list';
import SongDetail from './detail/song-detail';
import PlayMoodsic from './playmoodsic/play-moodsic';
import Profile from './profile/profile';
import PrivateRoute from './privateroute/private-route';
import NotFound from './notfound/notfound';
import configureStore from '../redux/store/configureStore';
import Loading from './loading/loading';
import auth from '../auth-data';

const App = () => (
  <Provider store={configureStore()}>
    <Auth0Provider
      domain={auth.domain}
      clientId={auth.clientId}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/list" component={MoodList} />
          <PrivateRoute path="/detail/:id" component={SongDetail} />
          <PrivateRoute path="/play-moodsic" component={PlayMoodsic} />
          <Route component={NotFound} />
          <Redirect path="/dashboard" to="/" />
          <Loading path="/loading" component={Loading} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);
export default App;
