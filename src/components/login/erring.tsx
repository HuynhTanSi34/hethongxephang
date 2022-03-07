import { Link } from "react-router-dom";
import "../UI/style.css";
import { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/user/userAction";
import classes from "../UI/LoginModule/errpass.module.css";
import Logoalta from "../../components/image/Logoalta.png";
import eye from "../../components/image/eye.png";
import failt from "../../components/image/failt.png";

function Erring({ listData, fetchLists }: any) {
  useEffect(() => {
    fetchLists();
  }, []);
  const [path, setPath] = useState("");
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showpass, setShowpass] = useState(false);
  const userData = [];
  const passwordData = [];
  for (const i of listData.lists) {
    userData.push(i.usee);
    passwordData.push(i.pass);
  }
  //   console.log({ userData });
  //   console.log({ passwordData });
  const handleLogin = () => {
    const userObject = {
      password: userPassword,
      name: userName,
    };
    const data = listData.lists.find((i: any) => {
      return i.usee === userObject.name && i.pass === userObject.password;
    });
    !data ? setError("true") : setError("false");
    data ? setPath("/login/profile") : setPath("/login/errpass");
  };
  const showw = () => {
    !showpass
      ? document.getElementById("password")?.setAttribute("type", "password")
      : document.getElementById("userPassword")?.setAttribute("type", "text");
  };

  return (
    <div className="inform">
      <div className="logo">
        <img src={Logoalta} alt="Lỗi" />
      </div>
      <form>
        <div className={classes.user}>
          Tên đăng nhập*
          <input
            type="text"
            placeholder="User"
            className={classes.use}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={classes.pass}>
          Mật khẩu*
          <input
            id="password"
            placeholder="Password"
            className={classes.pas}
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <img
          src={eye}
          alt="Eye"
          className="eye"
          onChange={(e) => setShowpass(!showpass)}
          onClick={showw}
        />
        <div className={classes.failt}>
          <img src={failt} />
        </div>
        <br />
        <div>
          <Link to={path} className={classes.Link}>
            <button className={classes.submit2} onClick={handleLogin}>
              Đăng nhập
            </button>
          </Link>
          <div className={classes.forgot}>
            <Link to="/login/forgotpass">Quên mật khẩu?</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    listData: state.list,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchLists: () => dispatch(fetchLists()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Erring);
