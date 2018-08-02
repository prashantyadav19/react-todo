import React, { Component } from 'react';
import {CTodo, CInput, CButton, CTable, CHead, CBody, CItem, CInputBody} from './c/CTodo';
class Todo extends Component {

    constructor() {
        super();
       this.state = {
           inputValue: '',
           sessionData: []
       }
    }

    handleOnChange(e) {
        this.setState({inputValue: e.target.value})
    }

    handleClick(e) {
        this.setState({sessionData: [...this.state.sessionData, this.state.inputValue]});
    }

    removeItem(e, i) {
        const array = [...this.state.sessionData]; // make a separate copy of the array
        array.splice(i, 1);
        this.setState({sessionData: array});
    }

    render() {
        console.log(this.state.sessionData);
        const self = this;
        return (
            <CTodo>
                <CInputBody>
            <CInput placeholder="Enter Name" handleChange={(e) => this.handleOnChange(e)} />
               <CButton handleClick={(e) => this.handleClick(e)} />
                </CInputBody>
                <CTable>
                    <CHead />
                    <CBody>
                        {this.state.sessionData.map(function(item, i){
                        return <CItem item={item} key={i} serial={i} handleRemove={(e) => self.removeItem(e, i)}  />
                    })}
                    </CBody>
                </CTable>
            </CTodo>
        );
    }
}

export default Todo;
