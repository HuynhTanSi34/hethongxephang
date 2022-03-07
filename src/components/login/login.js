import "../UI/style.css";
import { Provider } from "react-redux";
import leader from "../../redux/decivelist";
import { useEffect } from "react";
import Logining from "./logining";
import classes from "../UI/LoginModule/login.module.css";
import Group341 from "../../components/image/Group341.png";
import Hethong from "../../components/image/Hethong.png";
import Quanli from "../../components/image/Quanli.png";
function Login() {
  useEffect(() => {
    document.title = "Đăng nhập";
  });
  return (
    <Provider store={leader}>
      <div className="screen">
        <Logining />
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
}
export default Login;
