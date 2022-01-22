import React, { Component } from 'react';


export default class Warning extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActive:false,   
        };
      }
      handleShow = ()=>{
                this.setState({
                isActive: true
    }) 
  
}

      
       render() {
           
        return (
            <div>
                {this.state.isActive? <div className="alert alert-danger">No to do!</div>: null} 
            </div>
             
        );
    }
}