import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import TalkAboutMe from './client/TalkAboutMe';
import PhotoForm from './client/PhotoForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={TalkAboutMe} />
        <Route exact path="/new-photo" component={PhotoForm} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
