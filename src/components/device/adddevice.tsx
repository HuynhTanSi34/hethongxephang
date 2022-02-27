import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import leader from "../../redux/decivelist";
import "../UI/style.css";
import Dropdown from "react-dropdown";
import classes from "../UI/DeviceModule/add.module.css";
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
import down from "../../components/image/down.png";
import db from "../../firebase.config";
import { useState, useEffect, useRef } from "react";
function Adddevice() {
  useEffect(() => {
    document.title = "Thêm thiết bị";
  });
  const [show, setShow] = useState(false);
  const optionsdecive = ["Kiosk", "Dispaly counter"];
  const options = ["Chọn thiết bị"];
  const defaultOption = options[0];
  ///
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [dia, setDia] = useState("");
  const [usse, setUsse] = useState("");
  const deviceCodeRef = useRef(null);
  const deviceNameRef = useRef(null);
  const iPRef = useRef(null);
  const serviceUseRef = useRef(null);
  const handleAdd = () => {
    db.collection("Alta")
      .add({
        deviceCode: code,
        deviceName: name,
        iP: dia,
        serviceUse: usse,
      })
      .then((docRef) => {
        console.log("Document: ", docRef.id);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };
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
            <div className={`${classes.listItem} ${classes.thiet}`}>
              <img src={monitor} />
              <div>Thiết bị</div>
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
              <img src={map} />
              <div>Báo cáo</div>
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
          <div className={classes.title}>Thiết bị {">"} </div>
          <div className={classes.title1}>Danh sách thiết bị {">"}</div>
          <div className={classes.title2}>Thêm thiết bị</div>
          <div className={classes.title3}>Quản lí thiết bị</div>
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
            <section className={classes.infordevice}>
              <div className={classes.infordevicename}>Thông tin thiết bị</div>
              <div className={classes.infordevicenhaplieu}>
                <div className={classes.infordevicenhaplieuitem}>
                  <div>Mã thiết bị:</div>
                  <div style={{ color: "red" }}>*</div>
                  <input
                    ref={deviceCodeRef}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    type="text"
                    className={classes.infordevicenhaplieuitem1}
                    placeholder="Nhập mã thiết bị"
                    required
                  />
                </div>
                <div
                  className={`${classes.infordevicenhaplieuitem} ${classes.su}`}
                >
                  <div>Loại thiết bị:</div>
                  <div style={{ color: "red" }}>*</div>
                  <img src={down} className={classes.suyt} />
                  <div className={classes.downoptions}>
                    <Dropdown
                      options={optionsdecive}
                      value={defaultOption}
                      placeholder="Chọn thiết bị"
                    />
                  </div>
                </div>
                <div className={classes.infordevicenhaplieuitem}>
                  <div>Tên thiết bị:</div>
                  <div style={{ color: "red" }}>*</div>
                  <input
                    ref={deviceNameRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={classes.infordevicenhaplieuitem1}
                    type="text"
                    placeholder="Nhập tên thiết bị"
                    required
                  />
                </div>
                <div className={classes.infordevicenhaplieuitem}>
                  <div>Tên đăng nhập:</div>
                  <div style={{ color: "red" }}>*</div>
                  <input
                    className={classes.infordevicenhaplieuitem1}
                    type="text"
                    placeholder="Nhập tài khoản"
                    required
                  />
                </div>
                <div className={classes.infordevicenhaplieuitem}>
                  <div>Địa chỉ IP:</div>
                  <div style={{ color: "red" }}>*</div>
                  <input
                    ref={iPRef}
                    value={dia}
                    onChange={(e) => setDia(e.target.value)}
                    className={classes.infordevicenhaplieuitem1}
                    type="text"
                    placeholder="Nhập địa chỉ IP"
                    required
                  />
                </div>
                <div className={classes.infordevicenhaplieuitem}>
                  <div>Mật khẩu:</div>
                  <div style={{ color: "red" }}>*</div>
                  <input
                    className={classes.infordevicenhaplieuitem1}
                    type="text"
                    placeholder="Nhập mật khẩu"
                    required
                  />
                </div>
              </div>
              <div className={classes.infordevicenhaplieuitem2}>
                <div>Dịch vụ sử dụng:</div>
                <div style={{ color: "red" }}>*</div>
                <input
                  ref={serviceUseRef}
                  value={usse}
                  onChange={(e) => setUsse(e.target.value)}
                  className={classes.infordevicenhaplieuitem1}
                  type="text"
                  placeholder="Nhập dịch vụ sử dụng"
                  required
                />
              </div>

              <div className={classes.chuy}>
                <div style={{ color: "red" }}>*</div>
                <div>Là trường thông tin bắt buộc</div>
              </div>
            </section>
            <div className={classes.nutsubmit}>
              <Link to="/device/quanli">
                <input
                  type="submit"
                  value="Hủy bỏ"
                  className={classes.nutsubmitcancel}
                />
              </Link>
              <Link to="/device/readdevice">
                <input
                  onClick={handleAdd}
                  type="submit"
                  value="Thêm thiết bị"
                  className={classes.nutsubmitadd}
                />
              </Link>
            </div>
          </form>
        </section>
      </section>
    </Provider>
  );
}
export default Adddevice;
