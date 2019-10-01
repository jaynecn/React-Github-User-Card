import React from 'react';
import axios from 'axios';
import './App.css';
import CardDisplay from './CardDisplay';
import FollowersDisplay from './FollowersDisplay';

const jayneApi = 'https://api.github.com/users/jaynecn';

const followersApi = 'https://api.github.com/users/jaynecn/followers';


export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      followers: [],
    };
  }

  //functions

  componentDidMount() {
    axios.get(jayneApi).then(response => {
      // console.log(response.data);
      const jayne = response.data;
      // console.log(jayne);
      this.setState({ users: this.state.users.concat(jayne) });
      console.log(this.state.users);
      });

    axios.get(followersApi).then(response => {
      const newFollowers = response.data;
      this.setState({ followers:
      this.state.followers.concat(newFollowers)});
    });
  }

  
  render(){
    return (
      <div className="App">
        <h1>Github Users</h1>
        {/* {this.state.users.map((info) => {
          return <CardDisplay users={info.login}/>
        })} */}
        <CardDisplay users={this.state.users}/>
        <h2>Followers:</h2>
        <FollowersDisplay followers={this.state.followers}/>
        {/* <CardDisplay 
        users={this.state.users}/> */}
      </div>
    )
  }
}


