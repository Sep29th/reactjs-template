import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillWarning } from "react-icons/ai";
import { useDispatch } from "react-redux";
import "./Login.scss";
import { getUserWithCondition } from "../../services/users";
import { useState } from "react";
import { login } from "../../actions/login";
import { useNavigate } from "react-router-dom";
function Login() {
  const [message, setMessage] = useState({ status: false, content: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const exelogin = async () => {
      const info = await getUserWithCondition("email", formData.get("email"));
      if (info.length === 0) {
        setMessage({ status: true, content: "The account does not exist !" });
        return;
      } else if (info[0].password !== formData.get("password")) {
        setMessage({ status: true, content: "Wrong password !" });
        return;
      } else {
        dispatch(login(info[0]));
        navigate("/");
      }
    };
    exelogin();
  };
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="login__form">
              <h4 className="login__title">Login Quiz</h4>
              <form onSubmit={handleLogin}>
                <div className="input-group flex-nowrap login__input">
                  <span className="input-group-text" id="addon-wrapping">
                    <MdEmail />
                  </span>
                  <input
                    name="email"
                    id="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="addon-wrapping"
                    required
                  />
                </div>
                <div className="input-group flex-nowrap login__input">
                  <span className="input-group-text" id="addon-wrapping">
                    <FaLock />
                  </span>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="addon-wrapping"
                    required
                  />
                </div>
                {message.status && (
                  <div
                    className="alert alert-danger d-flex align-items-center"
                    role="alert"
                  >
                    <AiFillWarning />
                    <div>{message.content}</div>
                  </div>
                )}
                <button type="submit" className="btn btn-secondary">
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
export default Login;
