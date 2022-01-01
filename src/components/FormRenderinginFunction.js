import React, {useState} from 'react'

export default function FormRenderinginFunction() {

let initialData={
    uname:"",
    pword:"",
    number:""
}

  let [values,updateValues]= useState(initialData);

 



   const changeUserName=(event)=>{

        updateValues({
           ...values,uname:event.target.value
        })
   }

   
  


   
  const changeUserPword=(event)=>{
   
     updateValues({
          ...values,pword:event.target.value
       })
   }
   


   const changeUserNumber=(event)=>{
   
    updateValues({
         ...values,number:event.target.value
      })
  }
   
   const submitUserData=(event)=>{
   
       event.preventDefault()
       console.log(`${values.uname} ${values.pword} ${values.number}`)
    }
    return (
        <div>
            <form onSubmit={submitUserData}>

           
                   
                   <input type="text" placeholder='Enter name' value={values.uname}
                   
                    onChange={changeUserName}/>
                   <br></br>
                   <input type="text" placeholder='Enter password' value={values.pword} 
                   onChange={changeUserPword}/>
                   <br></br>

                   <input type="text" placeholder='Enter number' value={values.number}
                   
                   onChange={changeUserNumber}/>
                  <br></br>
                   <button type="submit" >Login</button>


                  </form> 
        </div>
    )
}
