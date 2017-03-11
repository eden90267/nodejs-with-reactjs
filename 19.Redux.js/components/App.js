/**
 * Created by eden90267 on 2017/3/11.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProp(state) {
    return state;
}

export default connect(mapStateToProp)(App)