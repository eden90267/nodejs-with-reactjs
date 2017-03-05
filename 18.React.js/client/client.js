/**
 * Created by eden90267 on 2017/3/5.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import TextDisplay from '../components/TextDisplay';
import Proptest from '../components/Proptest';
import Repo from '../components/Repo';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/TextDisplay" component={TextDisplay}/>
            <Route path="/Proptest" component={Proptest}/>
            <Route path="/Repo/:userName/:repoName" component={Repo}/>
        </Route>
    </Router>,
    document.getElementById('app')
);