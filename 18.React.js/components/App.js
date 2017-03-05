/**
 * Created by eden90267 on 2017/3/5.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/TextDisplay" activeStyle={{color:'red'}}>TextDisplay</Link></li>
                    <li><Link to="/Proptest" activeStyle={{color:'red'}}>Proptest</Link></li>
                    <li><Link to="/Repo/this/123" activeStyle={{color:'red'}}>Repo</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;