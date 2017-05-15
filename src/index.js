import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute } from "react-router"
import SearchPage from "./SearchPage"
import ResultPage from "./ResultPage"
import * as firebase from 'firebase'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-000000-01')

import App from './App'
import './index.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCHScopFdjGWlOMrLqbjjRUO7ZoJyQm-O4",
    authDomain: "simple-3bb2e.firebaseapp.com",
    databaseURL: "https://simple-3bb2e.firebaseio.com",
    projectId: "simple-3bb2e",
    storageBucket: "simple-3bb2e.appspot.com",
    messagingSenderId: "1047288025375"
  };
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router history={browserHistory} onUpdate={logPageView}>
      <Route path="/" component={App}>
          <IndexRoute component={SearchPage} />
          <Route path="results" component={ResultPage} />
      </Route>
  </Router>,
  document.getElementById('root')
);
