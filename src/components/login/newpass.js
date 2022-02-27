import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/LoginModule/newpass.module.css";
import Frame from "../../components/image/Frame.png";
import Logoalta from "../../components/image/Logoalta.png";
import eye from "../../components/image/eye.png";
const Newpass = () => {
  return (
    <div className="screen">
      <div className="inform">
        <div className="logo">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form>
          <div className={classes.title}>Đặt lại mật khẩu mới</div>
          <div className={classes.newpa}>
            Mật khẩu
            <input type="password" name="password" className={classes.pas3} />
            <img src={eye} alt="..." className={classes.eye} />
          </div>
          <div className={classes.newpa1}>
            Nhập lại mật khẩu
            <input type="password" nam="password" className={classes.pas4} />
            <img src={eye} alt="..." className={classes.eye} />
          </div>
          <div>
            <Link to="/login/profile">
              <input
                type="submit"
                value="Xác nhận"
                className={classes.submit}
              />
            </Link>
          </div>
        </form>
      </div>
      <div className="image4">
        <div>
          <img src={Frame} className="image5" alt="Lỗi" />
        </div>
      </div>
    </div>
  );
};
export default Newpass;
