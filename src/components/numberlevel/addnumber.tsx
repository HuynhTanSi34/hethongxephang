import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import leader from "../../redux/decivelist";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/NumberlevelModule/addnumber.module.css";
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
import x from "../../components/image/x.png";
import down from "../../components/image/down.png";
import Popresult from "./pop";
import { useState, useEffect } from "react";
function Addnumber() {
  useEffect(() => {
    document.title = "Cấp số mới";
  });
  const [show, setShow] = useState(false);
  const [showe, setShowe] = useState(false);
  const options = [
    "Tất cả",
    "Khám sản - Phụ khoa",
    "Khám răng hàm mặt",
    "Khám tai mũi họng",
    "Khám tim mạch",
    "Khám hô hấp",
    "Khám tổng quát",
  ];
  const defaultOption = options[0];
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
              <Link to="/service" className="Link">
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
            <div className={`${classes.listItem} ${classes.thiet}`}>
              <img src={filayers} />
              <div>Cấp số</div>
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
                <Link to="/set/roleuser" className="Link">
                  <div className={classes.muclucItem}>Quản lí vai trò</div>
                </Link>
                <Link to="/set/account" className="Link">
                  <div className={classes.muclucItem}>Quản lí tài khoản</div>
                </Link>
                <Link to="/set/diary" className="Link">
                  <div className={classes.muclucItem}>Nhật ký người dùng</div>
                </Link>
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
            <div className={classes.title}>Cấp số </div>
            <div className={classes.space}>{">"}</div>
            <div className={classes.title1}>Danh sách cấp số </div>
            <div className={classes.space}>{">"}</div>
            <div className={classes.title2}>Cấp số mới</div>
          </div>
          <div className={classes.title3}>Quản lý cấp số</div>
          <div className={classes.title4}>
            <div>
              <button onClick={() => setShow(!show)} className="bambell">
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
              <Link
                to="/login/profile"
                className={`${classes.linkavatar} ${classes.Link}`}
              >
                <div className="chao">Xin chào</div>
                <div className="ten">Lê Quỳnh Ái Vân</div>
              </Link>
            </div>
          </div>
          <form>
            <section className={classes.inforservice}>
              <div className={classes.inforservicename}>CẤP SỐ MỚI</div>
              <div className={classes.inforservicenhaplieuitem}>
                Dịch vụ khách hàng lựa chọn
              </div>
              <div className={classes.inforservicenhaplieuitem1}>
                <Dropdown
                  options={options}
                  // onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
              <div className={classes.nutsubmit}>
                <div>
                  <Link to="/numberlevel/numberlevellist">
                    <input
                      type="submit"
                      value="Hủy bỏ"
                      className={classes.nutsubmitcancel}
                    />
                  </Link>
                </div>
                <div>
                  {showe && (
                    <div>
                      <Popresult />
                      <button
                        onClick={() => setShowe(!showe)}
                        className={classes.x}
                      >
                        <img src={x} />
                      </button>
                    </div>
                  )}
                  {!showe && (
                    <>
                      <button
                        onClick={() => setShowe(!showe)}
                        className={classes.nutsubmitadd}
                      >
                        In số
                      </button>
                    </>
                  )}
                </div>
              </div>
            </section>
          </form>
        </section>
      </section>
    </Provider>
  );
}
export default Addnumber;
