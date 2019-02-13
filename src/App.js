import React from 'react';
import { Header } from './Header';
import { EventHandle } from './EventHandler';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "I'm a default title"
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
   changeTitle(newTitle){
    this.setState({
      title: newTitle
    });
   }

  render() {
    return (
      <div className="App-header">
       <Header title={this.state.title}/>
       <EventHandle onChange={this.changeTitle}/>
      </div>
    );
  }
}

export default App;
