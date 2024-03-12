import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../Button";
import logo from '../../assets/img/logo-no-background.svg';

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/auth/log-in");
    } catch (error) {
      alert(`Erro ao fazer Logout!
      Erro: ${error}`);
    }
  }

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to={currentUser ? "/loged-in" : "/"}>
          <img className="logo" src={logo} width="150" height="250" alt="logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            {currentUser ? (
              <>
                <Link className="navbar-item" to="/loged-in/chat">
                  Chat
                </Link>
                <Link className="navbar-item" to="/loged-in/sheets">
                  Sheets
                </Link>
                <Link className="navbar-item" to="/loged-in/search">
                  Search
                </Link>
                <Link className="navbar-item" to="/loged-in/ficha">
                  Ficha
                </Link>
              </>
            ) : (
              <>
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </>
            )}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {currentUser ? (
                  <>
                    <Button className="button is-light" onClick={handleLogout}>
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link className="button is-primary" to="/auth/sign-up">
                      Sign Up
                    </Link>
                    <Link className="button is-light" to="/auth/log-in">
                      Log In
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
