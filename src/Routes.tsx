import * as React from 'react';
import { Switch } from 'react-router';
import { Link, Route } from 'react-router-dom';
import App from './container/top/App';
import Submit from './container/SubmitPage/Submit';

export class Routes extends React.Component {

  public render() {
    return (
      <div>
        <h1>Route sample</h1>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/app" >App</Link></li>
        <li><Link to="/form" >Form</Link></li>
        <Switch>
          <Route exact={true} path="/app" component={App} />
          <Route exact={true} path="/form" component={Submit} />
        </Switch>
      </div>
    );
  }
}
