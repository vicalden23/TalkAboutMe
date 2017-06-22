import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import TalkAboutMe from 'TalkAboutMe';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={TalkAboutMe} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
