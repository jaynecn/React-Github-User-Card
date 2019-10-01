import React from 'react';
import axios from 'axios';
import './App.css';
import CardDisplay from './CardDisplay';

const jayneApi = 'https://api.github.com/users/jaynecn';


export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users:[],
    };
  }

  //functions

  componentDidMount() {
    axios.get(jayneApi).then(response => {
      // console.log(response.data);
      const jayne = response.data;
      // console.log(jayne);
      this.setState({ user: this.state.users.concat(jayne) });
      console.log(this.state.user);
      });
  }

  
  render(){
    return (
      <div>
        Test App II
        <CardDisplay 
        user={this.state.user}/>
      </div>
    )
  }
}


