import { Link } from "react-router-dom";
import "../UI/style.css";
import { useState } from "react";
import classes from "../UI/LoginModule/login.module.css";
import Group341 from "../../components/image/Group341.png";
import Hethong from "../../components/image/Hethong.png";
import Quanli from "../../components/image/Quanli.png";
import Logoalta from "../../components/image/Logoalta.png";
import eye from "../../components/image/eye.png";
const Login = () => {
  const [password, setPassword] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="screen">
      <div className="inform">
        <div className="logo">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.user}>
            Tên đăng nhập*
            <input
              type="text"
              name="name"
              placeholder="User"
              className={classes.use}
            />
          </div>
          <div className={classes.pass}>
            Mật khẩu*
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={classes.pas}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <img
            src={eye}
            alt="Eye"
            className="eye"
            onClick={(e) => setPassword(e.target.value)}
          /> */}
          <div className={classes.forgot}>
            <Link to="/login/forgotpass">Quên mật khẩu?</Link>
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Đăng nhập"
              className={classes.submit1}
            />
          </div>
        </form>
      </div>
      <div className="image">
        <div>
          <img src={Group341} className="image1" alt="Lỗi" />
          <img src={Hethong} className="image2" alt="Lỗi" />
          <img src={Quanli} className="image3" alt="Lỗi" />
        </div>
      </div>
    </div>
  );
};
export default Login;
