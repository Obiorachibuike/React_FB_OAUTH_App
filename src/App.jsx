// src/App.js
import React, { useState } from "react";
import FacebookLogin from "./components/FaceBookLogin";
import PageSelector from "./components/PageSelector";
import PageDetails from "./components/PageDetails";
import Header from "./components/Header";
import "./App.css"
// import UserPages from "./components/UserPages";
// import FacebookLogin from './FacebookLogin';
// import PageSelector from './PageSelector';
// import PageDetails from './PageDetails';

function App() {
  const [user, setUser] = useState(null);
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleLogin = (user) => {
    // console.log(user.accessToken);
    setUser(user);
    fetchUserPages();
  };

  const handleLogout = () => {
    setUser(null);
    setPages([]);
    setSelectedPage(null);
  };

  const fetchUserPages = () => {
    // console.log(window.FB);
    // console.log(window.FB.getUserID());
    console.log(window.FB.getAccessToken());
    // console.log(window.FB.api("/me/accounts"));
    window.FB.api("/me/accounts", (response) => {
      // console.log(response.data.url);
      if (response && !response.error) {
        setPages(response.data);
      } else {
        console.error(response.error);
      }
    });
  };

  return (
    <div className="App">
      <Header
        user={user}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      {/* {!user && <FacebookLogin onLogin={handleLogin} />} */}

      {user && (
        <div className="display-cont">
          <div className="display-content">
            <img src={user.picture.data.url} alt="User Profile" />
            <h1>Welcome {user.name}</h1>
            {/* <UserPages accessToken={user.accessToken} setSelectedPage={setSelectedPage} /> */}
          
            <PageSelector pages={pages} onSelectPage={setSelectedPage} />

            {selectedPage && <PageDetails pageId={selectedPage} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
