
import FacebookLogin from "./FaceBookLogin";
import LogoutButton from "./LogOut";


const Header = ({user,handleLogout,handleLogin}) => {
  return (
    <>
      <header>
        <div className="header-cont">
          <div className="header-content">
            <div className="logo-cont">
              <div>LogMall</div>
            </div>

  

                <br />
                {!user && <FacebookLogin onLogin={handleLogin} />}
                {user && <LogoutButton onLogout={handleLogout} />}
            </div>
          </div>
     
      </header>
    </>
  );
};

export default Header;
