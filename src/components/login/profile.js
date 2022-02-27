import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/LoginModule/profile.module.css";
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
      <section className={classes.inform}>
        <img src={Logomini} alt="Logo" className="logo1" />
        <div className={classes.list}>
          <div className={classes.listItem}>
            <Link to="/dashboard/day" className="Link">
              <img src={element4} />
              <div>Dashboard</div>
            </Link>
          </div>

          <div className={classes.listItem}>
            <Link to="/device/quanli" className="Link">
              <img src={monitor} />
              <div>Thiết bị</div>
            </Link>
          </div>
          <div className={classes.listItem}>
            <img src={service} />
            <div>Dịch vụ</div>
          </div>
          <div className={classes.listItem}>
            <Link to="/numberlevel/numberlevellist" className="Link">
              <img src={filayers} />
              <div>Cấp số</div>
            </Link>
          </div>
          <div className={classes.listItem}>
            <Link to="/report" className="Link">
              <img src={map} />
              <div>Báo cáo</div>
            </Link>
          </div>
          <div className={`${classes.listItem} ${classes.ml}`}>
            <img src={setting} />
            <div>Cài đặt hệ thống</div>
            <img src={bacham} className={classes.bacham} />
            <div className={classes.mucluc}>
              <div className={classes.muclucItem}>Quản lí vai trò</div>
              <div className={classes.muclucItem}>Quản lí tài khoản</div>
              <div className={classes.muclucItem}>Nhật ký người dùng</div>
            </div>
          </div>
        </div>
        <Link to={"/" || ""}>
          <div className={classes.out}>
            <img src={filogout} alt="out" className={classes.item5} />
            <div>Đăng xuất</div>
          </div>
        </Link>
      </section>
      <section className={classes.content}>
        <div className={classes.title}>Thông tin cá nhân</div>
        <div className={classes.title2}>
          <div>
            <button onClick={() => setShow(!show)} className="bambell">
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
        <div className={classes.infor}>
          <div className={classes.photo}>
            <img src={avatarbig} alt="..." />
            <img src={changepic} alt="..." className={classes.change} />
          </div>
          <div className={classes.name}>Lê Quỳnh Ái Vân</div>
          <div className={classes.listinfor}>
            <div className={classes.inforitem}>
              Tên người dùng
              <input
                type="text"
                className={classes.inp}
                placeholder="Lê Quỳnh Ái Vân"
              />
            </div>
            <div className={classes.inforitem}>
              Tên đăng nhập
              <input
                type="text"
                className={classes.inp}
                placeholder="lequynhaivan01"
              />
            </div>
            <div className={classes.inforitem}>
              Số điện thoại
              <input
                type="text"
                className={classes.inp}
                placeholder="0767375921"
              />
            </div>
            <div className={classes.inforitem}>
              Mật khẩu
              <input
                type="text"
                className={classes.inp}
                placeholder="311940211"
              />
            </div>
            <div className={classes.inforitem}>
              Email:
              <input
                type="text"
                className={classes.inp}
                placeholder="adminSSO1@domain.com"
              />
            </div>
            <div className={classes.inforitem}>
              Vai trò:
              <input
                type="text"
                className={classes.inp}
                placeholder="Kế toán"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Profile;
