import { Link } from "react-router-dom";
import { CloseButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../UI/style.css";
import classes from "../UI/DeviceModule/edit.module.css";
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

import { useState } from "react";
function Editdevice() {
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
          <div className={`${classes.listItem} ${classes.thiet}`}>
            <img src={monitor} />
            <div>Thiết bị</div>
          </div>
          <div className={classes.listItem}>
            <img src={service} />
            <div>Dịch vụ</div>
          </div>
          <div className={classes.listItem}>
            <img src={filayers} />
            <div>Cấp số</div>
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
                  type="text"
                  className={classes.infordevicenhaplieuitem1}
                  placeholder="KIO_01"
                  required
                />
              </div>
              <div
                className={`${classes.infordevicenhaplieuitem} ${classes.su}`}
              >
                <div>Loại thiết bị:</div>
                <div style={{ color: "red" }}>*</div>
                <input
                  className={classes.infordevicenhaplieuitem1}
                  type="text"
                  placeholder="Kiosk"
                  required
                />
                <img src={down} className={classes.suyt} />
                <div className={`${classes.selecthietbi}  ${classes.si}`}>
                  <div className={classes.selecthietbiitem}>Kiosk</div>
                  <div className={classes.selecthietbiitem}>
                    Display counter
                  </div>
                </div>
              </div>
              <div className={classes.infordevicenhaplieuitem}>
                <div>Tên thiết bị:</div>
                <div style={{ color: "red" }}>*</div>
                <input
                  className={classes.infordevicenhaplieuitem1}
                  type="text"
                  placeholder="Kiosk"
                  required
                />
              </div>
              <div className={classes.infordevicenhaplieuitem}>
                <div>Tên đăng nhập:</div>
                <div style={{ color: "red" }}>*</div>
                <input
                  className={classes.infordevicenhaplieuitem1}
                  type="text"
                  placeholder="Linhkyo011"
                  required
                />
              </div>
              <div className={classes.infordevicenhaplieuitem}>
                <div>Địa chỉ IP:</div>
                <div style={{ color: "red" }}>*</div>
                <input
                  className={classes.infordevicenhaplieuitem1}
                  type="text"
                  placeholder="128.172.308"
                  required
                />
              </div>
              <div className={classes.infordevicenhaplieuitem}>
                <div>Mật khẩu:</div>
                <div style={{ color: "red" }}>*</div>
                <input
                  className={classes.infordevicenhaplieuitem1}
                  type="text"
                  placeholder="CMS"
                  required
                />
              </div>
            </div>
            <div className={classes.infordevicenhaplieuitem2}>
              <div>Dịch vụ sử dụng:</div>
              <div style={{ color: "red" }}>*</div>
              <div
                className={`${classes.infordevicenhaplieuitem1x} ${classes.ix}`}
              >
                <div className={classes.infordevicenhaplieuitem1xmini}>
                  Khám tim mạch <CloseButton variant="white" />
                </div>
                <div className={classes.infordevicenhaplieuitem1xmini}>
                  Khám sản phụ khoa <CloseButton variant="white" />
                </div>
                <div className={classes.infordevicenhaplieuitem1xmini}>
                  Khám răng hàm mặt <CloseButton variant="white" />
                </div>
                <div className={classes.infordevicenhaplieuitem1xmini}>
                  Khám tai mũi họng <CloseButton variant="white" />
                </div>
                <div className={classes.infordevicenhaplieuitem1xmini}>
                  Khám hô hấp <CloseButton variant="white" />
                </div>
                <div className={classes.infordevicenhaplieuitem1xmini}>
                  Khám tổng quát <CloseButton variant="white" />
                </div>
                <div
                  className={`${classes.infordevicenhaplieuitem1xselec} ${classes.ic}`}
                >
                  <div className={classes.item1xselec}>Tất cả</div>
                  <div className={classes.item1xselec}>Khám răng hàm mặt</div>
                  <div className={classes.item1xselec}>Khám tim mạch</div>
                  <div className={classes.item1xselec}>Khám sản phụ khoa</div>
                  <div className={classes.item1xselec}>Khám tai mũi họng</div>
                  <div className={classes.item1xselec}>Khám hô hấp</div>
                  <div className={classes.item1xselec}>Khám tổng quát</div>
                </div>
              </div>
            </div>

            <div className={classes.chuy1}>
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
            <Link to="/device/quanli">
              <input
                type="submit"
                value="Cập nhật"
                className={classes.nutsubmitadd}
              />
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
}
export default Editdevice;
