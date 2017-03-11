/**
 * Created by eden90267 on 2017/3/11.
 */
import React, {Component} from 'react';
import actions from '../redux/actions';
import {connect} from 'react-redux';

class FilterLink extends Component {
    render() {
        return (
            <a href="#" onClick={e => {
                e.preventDefault();
                this.props.FilterTodo(this.props.filter);
            }}>
                {this.props.children}
            </a>
        );
    }
}

const FilterTodo = actions.FilterTodo;

export default connect((state) => state, {FilterTodo})(FilterLink)