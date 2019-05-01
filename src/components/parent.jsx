import React, { Component } from 'react';
import Child from './child';

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            itemTask: ''
        }
    }
    

    render() {
        return (
            <div>
                Parent
                <div>
                    <input type='text' value={this.state.itemTask} 
                    onChange={e => this.setState({itemTask: e.target.value})} />
                    <button onClick={()=> 
                        this.setState({list: [...this.state.list, this.state.itemTask ]}) }>
                        +Add</button>
                </div>
                <Child list={this.state.list} />
            </div>
        )
    }
}
