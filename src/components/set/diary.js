import { Link } from "react-router-dom";
import "../UI/style.css";
import { Provider } from "react-redux";
import leader from "../../redux/decivelist";
import Diariedd from "../../components/set/diaried";
import classes from "../UI/Set/diary.module.css";
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
import { useState, useEffect } from "react";
function Diary() {
  useEffect(() => {
    document.title = "Nhật ký người dùng";
  });
  const [show, setShow] = useState(false);
  return (
    <Provider store={leader}>
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
              <Link to="/service/listservice" className="Link">
                <img src={service} />
                <div>Dịch vụ</div>
              </Link>
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
            <div
              className={`${classes.listItem} ${classes.thiet} ${classes.ml}`}
            >
              <img src={setting} />
              <div>Cài đặt hệ thống</div>
              <img src={bacham} className={classes.bacham} />
              <div className={classes.mucluc}>
                <div className={classes.muclucItem}>Quản lí vai trò</div>
                <Link to="/set/account" className={classes.Link}>
                  <div className={classes.muclucItem}>Quản lí tài khoản</div>
                </Link>
                <div className={`${classes.muclucItem} ${classes.thiet} `}>
                  Nhật ký người dùng
                </div>
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
          <div className={classes.title3}>
            <div>
              <button onClick={() => setShow(!show)} className="bambell">
                <img alt="thongbao" src={bell} className="bell" />
                {show && <Bell />}
              </button>
            </div>
            <div>
              <Link to="/login/profile" className="Link">
                <img alt="avatar" src={avatarmini} className="avatarmini" />
              </Link>
            </div>
            <div>
              <Link
                to="/login/profile"
                className={`${classes.linkavatar} ${classes.Link}`}
              >
                <div className="chao">Xin chào</div>
                <div className="ten">Lê Quỳnh Ái Vân</div>
              </Link>
            </div>
          </div>
          <Diariedd />
        </section>
      </section>
    </Provider>
  );
}
export default Diary;
