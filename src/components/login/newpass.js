import { Link } from "react-router-dom";
import "../UI/style.css";
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
          <div className="title4">Đặt lại mật khẩu mới</div>
          <div className="newpa">
            Mật khẩu
            <input type="password" name="password" className="pas3" />
            <img src={eye} alt="..." className="eye1" />
          </div>
          <div className="newpa1">
            Nhập lại mật khẩu
            <input type="password" nam="password" className="pas4" />
            <img src={eye} alt="..." className="eye1" />
          </div>
          <div>
            <Link to="/login/profile">
              <input type="submit" value="Xác nhận" className="submit4" />
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
