import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/login";

function Header() {
  const loginValue = useSelector((state) => state.handleLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__config">
            <div className="header__logo">
              <Link to={"/"}>Quiz</Link>
            </div>
            {loginValue.isLogin ? (
              <>
                <div className="header__nav">
                  <ul className="nav nav-underline">
                    <li className="nav-item">
                      <NavLink className={"nav-link header__link"} to={"/"}>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={"nav-link header__link"}
                        to={"/topic"}
                      >
                        Topics
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={"nav-link header__link"}
                        to={"/answers"}
                      >
                        Answers
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="header__logout">
                  <div className="nav-item">
                    <button
                      className="nav-link header__link"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="header__actions">
                <ul className="nav nav-underline">
                  <li className="nav-item">
                    <NavLink className="nav-link header__link" to={"/login"}>
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link header__link" to={"/register"}>
                      Register
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
