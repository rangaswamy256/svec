import React, {useState} from 'react'

export default function StatesinFunctionalComponent() {

    let [name,updateNumber]=useState("56");
    return (
        <div>
            <button onMouseOver={()=>{updateNumber("66")}}
            onMouseLeave={()=>{updateNumber("77")}}>
            
                {name}
                </button>
        </div>
    )
}
