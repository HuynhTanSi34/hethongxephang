import { Link } from "react-router-dom";
import "../UI/style.css";
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
import avatarbig from "../../components/image/avatarbig.png";
import changepic from "../../components/image/changepic.png";
import Bell from "./bell";
import { useState } from "react";
function Profile() {
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
        <div className="title55">Thông tin cá nhân</div>
        <div className="title52">
          <div>
            <button onClick={() => setShow(!show)}>
              <img alt="thongbao" src={bell} className="bell" />
              {show && <Bell />}
            </button>
          </div>
          <div>
            <img alt="avatar" src={avatarmini} className="avatarmini" />
          </div>
          <div>
            <div className="chao">Xin chào</div>
            <div className="ten">Lê Quỳnh Ái Vân</div>
          </div>
        </div>
        <div className="infor">
          <div className="photo">
            <img src={avatarbig} alt="..." />
            <img src={changepic} alt="..." className="change" />
          </div>
          <div className="name">Lê Quỳnh Ái Vân</div>
          <div className="listinfor">
            <div className="inforitem">
              Tên người dùng
              <input
                type="text"
                className="inp"
                placeholder="Lê Quỳnh Ái Vân"
              />
            </div>
            <div className="inforitem">
              Tên đăng nhập
              <input type="text" className="inp" placeholder="lequynhaivan01" />
            </div>
            <div className="inforitem">
              Số điện thoại
              <input type="text" className="inp" placeholder="0767375921" />
            </div>
            <div className="inforitem">
              Mật khẩu
              <input type="text" className="inp" placeholder="311940211" />
            </div>
            <div className="inforitem">
              Email:
              <input
                type="text"
                className="inp"
                placeholder="adminSSO1@domain.com"
              />
            </div>
            <div className="inforitem">
              Vai trò:
              <input type="text" className="inp" placeholder="Kế toán" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Profile;
