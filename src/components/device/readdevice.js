import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/DeviceModule/read.module.css";
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
import editsquare from "../../components/image/editsquare.png";
import { useState } from "react";
function Readdevice() {
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
          <div className={`${classes.listItem} ${classes.rea}`}>
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
        <div className={classes.title2}>Chi tiết thiết bị</div>
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
        <section className={classes.infordevice1}>
          <div className={classes.infordevicename1}>Thông tin thiết bị</div>
          <div className={classes.infordeviceleft}>
            <div className={classes.infordeviceleftitem}>
              <div className={classes.infordeviceleftitem1}>Mã thiết bị:</div>
              <div className={classes.infordeviceleftitem2}>KIO_01</div>
            </div>
            <div className={classes.infordeviceleftitem}>
              <div className={classes.infordeviceleftitem1}>Tên thiết bị:</div>
              <div className={classes.infordeviceleftitem2}>Kiosk</div>
            </div>
            <div className={classes.infordeviceleftitem}>
              <div className={classes.infordeviceleftitem1}>Địa chỉ IP:</div>
              <div className={classes.infordeviceleftitem2}>128.172.308</div>
            </div>
          </div>

          <div className={classes.infordeviceright}>
            <div className={classes.infordevicerightitem}>
              <div className={classes.infordevicerightitem1}>
                Loại thiết bị:
              </div>
              <div className={classes.infordevicerightitem2}>Kiosk</div>
            </div>
            <div className={classes.infordevicerightitem}>
              <div className={classes.infordevicerightitem1}>
                Tên đăng nhập:
              </div>
              <div className={classes.infordevicerightitem2}>Linhkyo011</div>
            </div>
            <div className={classes.infordevicerightitem}>
              <div className={classes.infordevicerightitem1}>Mật khẩu:</div>
              <div className={classes.infordevicerightitem2}>CMS</div>
            </div>
          </div>
          <div className={classes.infordevicebottom}>
            <div className={classes.infordevicebottomitem1}>
              Dịch vụ sử dụng:
            </div>
            <div className={classes.infordevicebottomitem2}>
              Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai
              mũi họng, Khám hô hấp, Khám tổng quát.
            </div>
          </div>
        </section>
        <Link to="/device/editdevice">
          <div className={classes.editnewdevice}>
            <img src={editsquare} />
            <div className={classes.addnewdevicecontent}>Cập nhật thiết bị</div>
          </div>
        </Link>
      </section>
    </section>
  );
}
export default Readdevice;
