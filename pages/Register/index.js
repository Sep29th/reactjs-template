import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Register.scss";
import { AiFillWarning } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser, getUserWithCondition } from "../../services/users";
import { login } from "../../actions/login";
function Register() {
  const [message, setMessage] = useState({ status: false, content: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const exeRegis = async () => {
      var info = await getUserWithCondition("email", formData.get("email"));
      if (info.length > 0) {
        setMessage({ status: true, content: "The email is already in used !" });
        return;
      } else {
        info = await createUser({
          fullName: formData.get("username"),
          email: formData.get("email"),
          password: formData.get("password"),
        });
        if (info) {
          dispatch(login(info));
          navigate("/");
        } else {
          setMessage({
            status: true,
            content: "Register failed, please try again !",
          });
          return;
        }
      }
    };
    exeRegis();
  };
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="register__form">
              <h4 className="register__title">Register Account</h4>
              <form onSubmit={handleRegister}>
                <div className="input-group flex-nowrap register__input">
                  <span className="input-group-text" id="addon-wrapping">
                    <FaUser />
                  </span>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    required
                  />
                </div>
                <div className="input-group flex-nowrap register__input">
                  <span className="input-group-text" id="addon-wrapping">
                    <MdEmail />
                  </span>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="addon-wrapping"
                    required
                  />
                </div>
                <div className="input-group flex-nowrap register__input">
                  <span className="input-group-text" id="addon-wrapping">
                    <FaLock />
                  </span>
                  <input
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
                  Register
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
export default Register;
