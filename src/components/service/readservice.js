import { Link } from "react-router-dom";
import "../UI/style.css";
import { Provider } from "react-redux";
import leader from "../../redux/decivelist";
import ReadServiceList from "../../components/service/readDataservice";
import classes from "../UI/ServiceModule/readservice.module.css";
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
function Readservice() {
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
              <Link to="/device" className="Link">
                <img src={monitor} />
                <div>Thiết bị</div>
              </Link>
            </div>
            <div className={`${classes.listItem} ${classes.thiet}`}>
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
          <div className={classes.contentname}>
            <div className={classes.title}>Dịch vụ </div>
            <div className={classes.space}>{">"}</div>
            <div className={classes.title1}>Danh sách dịch vụ </div>
            <div className={classes.space}>{">"}</div>
            <div className={classes.title2}>Chi tiết</div>
          </div>
          <div className={classes.title4}>Quản lý dịch vụ</div>
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
          <ReadServiceList />
        </section>
      </section>
    </Provider>
  );
}
export default Readservice;
