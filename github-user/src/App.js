import React from 'react';
import axios from 'axios';
import './App.css';
import CardDisplay from './CardDisplay';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    }
  }

  //functions

  componentDidMount() {
    axios.get('https://api.github.com/users/jaynecn')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.message);
      })
  }



  render(){
    return (
      <div>
        Test App II
        <CardDisplay />
      </div>
    )
  }
}


export default App;
