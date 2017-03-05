/**
 * Created by eden90267 on 2017/3/5.
 */
import React, {Component} from 'react';
import Proptest from './Proptest';
import axios from 'axios';

class TextDisplay extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        };
    }

    componentWillMount() {
        axios.get('http://localhost:3000/hi')
            .then(res => {
                console.log(res.data);
                this.setState({data: res.data});
            })
    }

    render() {
        return (
            <div>
                {/*{this.state.data}*/}
                <Proptest name="Hihi, this is stateless component"/>
            </div>
        );
    }
}

export default TextDisplay;