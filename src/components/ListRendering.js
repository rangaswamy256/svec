import React from 'react'
import "../States.css"

export default function ListRendering() {
 

    // let list=["ranga","Swamy","Anupama","SAmuels"]

       let list=[
           {
               name:"Ranga",
               salary:90000,
               email:"eiuryeu@gmail.com"
           },

           {
            name:"Swamy",
            salary:70000,
            email:"weuryeu@gmail.com"
        },

        {
            name:"Shyam",
            salary:20000,
            email:"weiuryeu@gmail.com"
        },

        {
            name:"Anu",
            salary:40000,
            email:"weiuryeu@gmail.com"
        }
       ]





    return (
        <div className='ranga'>
            <h1>List Rendering</h1>
            {/* {
              list.map(element =>( 
                  <h1>{element}</h1>
            
                 
                  ))
            } */}

{
            list.map(
                empdata=>
                < >
                    <p>{empdata.name}</p>
                    <p>{empdata.salary}</p>
                    <p>{empdata.email}</p>
                </>
                
            )
}
        </div>
                


    )
}
