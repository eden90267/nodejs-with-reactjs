/**
 * Created by eden90267 on 2017/3/11.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import actions from '../redux/actions';
import {connect} from 'react-redux';


class TodoInput extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/list">list視窗</Link>
                </div>
                <input
                    type="text"
                    placeholder="Type in your tode"
                    ref={(c) => this._input = c}
                />
                <button onClick={() =>
                    this.props.dispatch(actions.addTodo(this._input.value))}></button>
            </div>
        )
    }

}

function mapStateToProp(state) {
    return state;
}

export default connect(mapStateToProp)(TodoInput);