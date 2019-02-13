import React from 'react';

export class Header extends React.Component{

 render(){
     return(
         <h1>{this.props.title}</h1>
     );
 };
} 
Header.defaultProps = {title: "Welcome"};