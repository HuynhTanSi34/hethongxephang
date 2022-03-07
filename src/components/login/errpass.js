import "..//UI/style.css";
import { Provider } from "react-redux";
import leader from "../../redux/decivelist";
import { useEffect } from "react";
import Erring from "./erring";
import classes from "../UI/LoginModule/errpass.module.css";
import { Link } from "react-router-dom";
import Group341 from "../../components/image/Group341.png";
import Hethong from "../../components/image/Hethong.png";
import Quanli from "../../components/image/Quanli.png";
import Logoalta from "../../components/image/Logoalta.png";
import eye from "../../components/image/eye.png";
const Errpass = () => {
  return (
    <Provider store={leader}>
      <div className="screen">
        {/* <div className="inform">
        <div className="logo">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form>
          <div className={classes.user}>
            Tên đăng nhập*
            <input
              className={classes.use}
              type="text"
              name="name"
              placeholder="lequynhavan01"
            />
          </div>
          <div className={classes.pass}>
            Mật khẩu*
            <input
              type="password"
              name="password"
              placeholder="****"
              className={classes.pas}
            />
          </div>
          <img src={eye} alt="Eye" className="eye" />
          <div className={classes.failt}>
            <img src={failt} />
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Đăng nhập"
              className={classes.submit2}
            />
            <div className={classes.forgot}>
              <Link to="/login/forgotpass">Quên mật khẩu?</Link>
            </div>
          </div>
        </form>
      </div> */}
        <Erring />
        <div className="image">
          <div>
            <img src={Group341} className="image1" alt="Lỗi" />
            <img src={Hethong} className="image2" alt="Lỗi" />
            <img src={Quanli} className="image3" alt="Lỗi" />
          </div>
        </div>
      </div>
    </Provider>
  );
};
export default Errpass;
