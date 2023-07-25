import React from "react";
const Notes=(props)=> {
    return(
        <div className="todo alert alert-info" role="alert">
            <h1>Deucalino weird todo list.</h1>
            {props.text}
            <button onClick={()=>{props.deleTodo(props.index)}} className="btn btn-outline-danger" type="button" id="button-addon2">
            <i class="fa-solid fa-trash-can"></i>
            </button>         
        </div>
    );
 }
    

export default  Notes;