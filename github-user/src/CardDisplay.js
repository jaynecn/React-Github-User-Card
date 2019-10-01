import React from 'react';

export default function CardDisplay(props) {
  console.log(props);
  return(
    <div className="users">
      {
        props.users.map((info) => (
          // console.log(info);
          <div className="user-div">
            <div className="image-div">
              <img src={info.avatar_url} alt={info.avatar_url}/>
              <h2>{info.login}</h2> 
            </div>
            <div className="info-div">
              <h1>{info.name}</h1>
              <h4>Location: {info.location}</h4>
              <h5>Profile: <a href={info.html_url}>{info.html_url}</a></h5>
              <p>Followers: {info.followers} Following: {info.following}</p>
            </div>
         
          </div>
        ))
      }
    </div>
  )
}

//  class CardDisplay extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   render(props){
//     console.log(props);
//     return (
//       <div>
//         Card Display
//         <h1>{props.users}</h1>
//       </div>
//     )
//   }

// }
