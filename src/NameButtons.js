import React from "react";

function NameButtons(props){
const {name,index} = props;

    return (
        <div>
 <button>{name}{index}</button>

        </div>
    );
}

export default NameButtons;