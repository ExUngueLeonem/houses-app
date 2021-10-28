import React, {Component} from "react";
import './filter.css';

class Filter extends Component {
    render() {
        return(
            <div className='filter'>
            <span>Filter</span>
            <input onChange={this.props.onUpdateFilterList}></input>
            </div>
        )
    }
}

export default Filter;