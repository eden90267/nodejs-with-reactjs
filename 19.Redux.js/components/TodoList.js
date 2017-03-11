/**
 * Created by eden90267 on 2017/3/11.
 */
import React, {Component} from 'react'
import actions from '../redux/actions.js'
import FilterLink from './FilterLink.js'
import {Link} from 'react-router'
import {connect} from 'react-redux';

class TodoList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    filtered() {
        switch (this.props.visbility) {
            case 'SHOW_ALL':
                return this.props.todos;
            case 'SHOW_ACTIVE':
                return this.props.todos.filter(
                    (todo) => todo.completed === false);
            case 'SHOW_COMPLETED':
                return this.props.todos.filter(
                    (todo) => todo.completed);
            default:
                return this.props.todos;
        }
    }

    render() {
        return (
            <div>
                <Link to="/add">新增視窗</Link>
                <button onClick={() => this.props.dispatch(actions.con())}/>
                <ul>
                    {
                        this.filtered().map((todo) => {
                            return (
                                <li key={todo.id}
                                    onClick={() => this.props.dispatch(actions.toggleTodo(todo.id))}
                                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                                    {todo.text}
                                </li>);
                        })
                    }
                </ul>
                <p>
                    {"Show: "}
                    <FilterLink filter="SHOW_ALL" currentFilter={this.props.visbility}>
                        ALL
                    </FilterLink>
                    {"  ,  "}
                    <FilterLink filter="SHOW_ACTIVE" currentFilter={this.props.visbility}>
                        Active
                    </FilterLink>
                    {"  ,  "}
                    <FilterLink filter="SHOW_COMPLETED" currentFilter={this.props.visbility}>
                        Completed
                    </FilterLink>
                </p>
            </div>
        )
    }
}

function  mapStateToProp(state){
    return state
}


export default connect(mapStateToProp)(TodoList)