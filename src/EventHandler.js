import React from 'react';

export class EventHandle extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let name = e.target.value;
        this.props.onChange(name);
    }

    render(){
       return( 
        <div>
          <input type="text" onChange={this.handleChange}/>
        </div>
       )
    }

}