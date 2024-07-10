// src/FacebookLogin.js
import React, { useEffect, useState } from 'react';

const FacebookLogin = ({ onLogin }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '453383574154240',  // replace with your Facebook app ID
        cookie     : true,
        xfbml      : true,
        version    : 'v11.0'
      });
    //   1178641576610105
    // 453383574154240
      window.FB.AppEvents.logPageView();   
      
      window.FB.Event.subscribe('auth.statusChange', response => {
        if (response.authResponse) {
          fetchUserProfile(response.authResponse.accessToken);
        }
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const fetchUserProfile = (accessToken) => {
    window.FB.api('/me', { fields: 'name,picture', access_token: accessToken }, function(response) {
        // console.log(response.authResponse.accessToken);
      setUser(response);
      onLogin(response);
    });
  };

  const handleLogin = () => {
    window.FB.login();
  };

  return (
    <div>
      {!user && <button onClick={handleLogin}>Login with Facebook</button>}
      {user && (
        <div>
          <img src={user.picture.data.url} alt={user.name} />
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
};

export default FacebookLogin;
