import { Link } from "react-router-dom";
import "../UI/style.css";
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
          <div className="use2">Đặt lại mật khẩu</div>
          <div className="pas2">
            Vui lòng nhập email để đặt lại mật khẩu của bạn*
          </div>
          <input className="reset" type="text" placeholder="abc@gmail.com" />
          <div>
            <Link to="/login/newpass">
              <input type="submit" value="Tiếp tục" className="submit3" />
            </Link>

            <input className="cancel3" type="submit" value="Hủy" />
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
