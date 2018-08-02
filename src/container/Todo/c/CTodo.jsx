import React from 'react';
import './todo.css';
export const CTodo = ({ children }) => (
    <div className="todo-body">
        {children}
    </div>
);

export const CInputBody = ({ children }) => (
    <div className="input-body">
        {children}
    </div>
);
export const CInput = ({placeholder, handleChange}) => (
    <input type="text" className="inputBox" placeholder={placeholder} onChange={handleChange}  />
);

export const CButton = ({handleClick}) => (
    <input type="submit" className="button" onClick={handleClick} value="Submit" />
);

export const CTable = ({ children }) => (
    <table className="table">
        {children}
    </table>
);

export const CHead = ({}) => (
   <thead>
   <tr>
       <td>Serial No</td>
       <td>Name</td>
       <td>Created On</td>
       <td>Action</td>
   </tr>
   </thead>
);

export const CBody = ({ children }) => (
    <tbody className="table-body">
        {children}
    </tbody>
);

export const CItem = ({item, serial, handleRemove}) => {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;
    return (
        <tr>
            <td>{serial +1}</td>
            <td>{item}</td>
            <td>{dateTime}</td>
            <td><a onClick={handleRemove} > remove </a> </td>
        </tr>
    )
};
