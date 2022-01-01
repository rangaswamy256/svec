import React, { Component } from 'react'
import "../States.css"

export default class FormRendering extends Component {

constructor(props) {
    super(props)

    this.state = {
         uname:"",
         pword:""
    }
}


changeUserName=(event)=>{

     this.setState({
        uname:event.target.value
     })
}

changeUserPword=(event)=>{

    this.setState({
       pword:event.target.value
    })
}


 submitUserData=(event)=>{

    event.preventDefault()
    console.log(`${this.state.uname} ${this.state.pword}`)
 }

    render() {
        return (
            <div className="form">
               <form onSubmit={this.submitUserData}>
                   
                    <input type="text" placeholder='Enter name' value={this.state.uname}
                    
                     onChange={this.changeUserName}/>
                    <br></br>
                    <input type="text" placeholder='Enter password' value={this.state.pword} 
                    onChange={this.changeUserPword}/>
                    <br></br>
                    <button type="submit" >Login</button>


                   </form> 
            </div>
        )
    }
}
