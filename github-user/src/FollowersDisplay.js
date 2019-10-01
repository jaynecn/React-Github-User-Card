import React from 'react';

export default function FollowersDisplay(props) {
  console.log(props);
  return (
    <div className="followers">
      {
        props.followers.map((info) => (
          // console.log(info);
          <div className="followers-div">
            <div className="followers-image">
              <img src={info.avatar_url} alt={info.avatar_url}/>
            </div>
            <div className="followers-info">
              <h1>{info.login}</h1>
              <h5>Profile: <a href={info.html_url}>{info.html_url}</a></h5>
            </div>
         
          </div>
        ))
      }
    </div>
  )
}