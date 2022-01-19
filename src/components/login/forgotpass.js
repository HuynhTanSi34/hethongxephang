import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/LoginModule/forgotpass.module.css";
import Frame from "../../components/image/Frame.png";
import Logoalta from "../../components/image/Logoalta.png";
const Forgot = () => {
  return (
    <div className="screen">
      <div className="inform">
        <div className="logo">
          <img src={Logoalta} alt="Lỗi" />
        </div>
        <form>
          <div className={classes.use}>Đặt lại mật khẩu</div>
          <div className={classes.pas}>
            Vui lòng nhập email để đặt lại mật khẩu của bạn*
          </div>
          <input
            className={classes.reset}
            type="text"
            placeholder="abc@gmail.com"
          />
          <div>
            <Link to="/login/newpass">
              <input
                type="submit"
                value="Tiếp tục"
                className={classes.submit}
              />
            </Link>

            <input className={classes.cancel} type="submit" value="Hủy" />
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
export default Forgot;
