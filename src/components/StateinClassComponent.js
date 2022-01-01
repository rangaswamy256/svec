import React, { Component } from 'react'
import '../States.css'

export default class StateinClassComponent extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          name:"RangaSwamy",
          count:0,
          count1:100,
          count2:0
     }
 }
    render() {

        setTimeout(()=>{
             this.setState({
                 name:"Swamy",
                 
                
             })
        },30)
        return (
            <div className="demo">
                    <h1>Welcome  {this.state.name}</h1>
                    <h2>count:-{this.state.count}</h2>
                    <button onClick={()=>{
                       this.setState({
                           count:this.state.count+1
                       })
                    }}>Increment</button>


<h3>count:-{this.state.count1}</h3>
              <button onClick={()=>{
                       this.setState({
                           count1:this.state.count1-1
                       })
                    }}>decrement</button>





<h4>count is{this.state.count}</h4>
              <button onClick={()=>{
                       this.setState({
                           count2:this.state.count
                       })
                    }}>Reset count</button>

        <nav>
            <a href=''>login</a>
        </nav>
            </div>
           
        )
    }
}
