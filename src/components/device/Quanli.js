import { Link } from "react-router-dom";
import "../UI/device.css";
import Logomini from "../../components/image/Logomini.png";
import filogout from "../../components/image/filogout.png";
import element4 from "../../components/image/element4.png";
import monitor from "../../components/image/monitor.png";
import service from "../../components/image/service.png";
import filayers from "../../components/image/filayers.png";
import map from "../../components/image/map.png";
import setting from "../../components/image/setting.png";
import bacham from "../../components/image/bacham.png";
import bell from "../../components/image/bell.png";
import avatarmini from "../../components/image/avatarmini.png";
import Bell from "../login/bell";
import { useState } from "react";
function Quanli() {
  const [show, setShow] = useState(false);
  return (
    <section className="screen">
      <section className="inform1">
        <img src={Logomini} alt="Logo" className="logo1" />
        <div className="list">
          <div className="listItem">
            <Link to="/dashboard/day" className="Link">
              <img src={element4} />
              <div>Dashboard</div>
            </Link>
          </div>
          <div className="listItem">
            <Link to="/device/quanli" className="Link">
              <img src={monitor} />
              <div>Thiết bị</div>
            </Link>
          </div>
          <div className="listItem">
            <img src={service} />
            <div>Dịch vụ</div>
          </div>
          <div className="listItem">
            <img src={filayers} />
            <div>Cấp số</div>
          </div>
          <div className="listItem">
            <img src={map} />
            <div>Báo cáo</div>
          </div>
          <div className="listItem ml">
            <img src={setting} />
            <div>Cài đặt hệ thống</div>
            <img src={bacham} className="bacham" />
            <div className="mucluc">
              <div className="muclucItem">Quản lí vai trò</div>
              <div className="muclucItem">Quản lí tài khoản</div>
              <div className="muclucItem">Nhật ký người dùng</div>
            </div>
          </div>
        </div>
        <div className="out">
          <img src={filogout} alt="out" className="item5" />
          <div>Đăng xuất</div>
        </div>
      </section>
      <section className="content">
        <div className="title55 titleDe">Thiết bị {">"} </div>
        <div className="title55 titleDe0">Danh sách thiết bị</div>
        <div className="title52">
          <div>
            <button onClick={() => setShow(!show)}>
              <img alt="thongbao" src={bell} className="bell" />
              {show && <Bell />}
            </button>
          </div>
          <div>
            <Link to="/login/profile">
              <img alt="avatar" src={avatarmini} className="avatarmini" />
            </Link>
          </div>
          <div>
            <Link to="/login/profile" className="linkavatar">
              <div className="chao">Xin chào</div>
              <div className="ten">Lê Quỳnh Ái Vân</div>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Quanli;
