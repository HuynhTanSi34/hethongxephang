import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/DeviceModule/quanli.module.css";
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
import search from "../../components/image/search.png";
import addsquare from "../../components/image/addsquare.png";
import chamdo from "../../components/image/chamdo.png";
import chamxanh from "../../components/image/chamxanh.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";

import { useState } from "react";
function Quanli() {
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
            <Link to="/report" className="Link">
              <img src={monitor} />
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
        <div className={classes.title}>Thiết bị {">"} </div>
        <div className={classes.title1}>Danh sách thiết bị</div>
        <div className={classes.title2}>Danh sách thiết bị</div>
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
        <div className={classes.trangthaihoatdong}>
          <div className={classes.trangthaihoatdongname}>
            Trạng thái hoạt động
          </div>
          <div className={`${classes.trangthaihoatdongselec} ${classes.trs}`}>
            Tất cả <img src={down} />
            <div className={`${classes.trangthaihoatdonglist} ${classes.trl}`}>
              <div className={classes.trangthaihoatdongitem}>Tất cả</div>
              <div className={classes.trangthaihoatdongitem}>Hoạt động</div>
              <div className={classes.trangthaihoatdongitem}>
                Ngưng hoạt động
              </div>
            </div>
          </div>
        </div>
        <div className={classes.trangthaiketnoi}>
          <div className={classes.trangthaihoatdongname}>
            Trạng thái kết nối
          </div>
          <div className={`${classes.trangthaihoatdongselec} ${classes.trs}`}>
            Tất cả <img src={down} />
            <div className={`${classes.trangthaihoatdonglist} ${classes.trl}`}>
              <div className={classes.trangthaihoatdongitem}>Tất cả</div>
              <div className={classes.trangthaihoatdongitem}>Kết nối</div>
              <div className={classes.trangthaihoatdongitem}>Mất kết nối</div>
            </div>
          </div>
        </div>
        <div className={classes.tukhoa}>
          <div className={classes.trangthaihoatdongname}>Từ khóa</div>

          <input
            type="text"
            placeholder="Nhập từ khóa"
            className={classes.trangthaihoatdongselec}
          />
          <img src={search} className={classes.search} />
        </div>
        <Link to="/device/adddevice">
          <div className={classes.addnewdevice}>
            <img src={addsquare} />
            <div className={classes.addnewdevicecontent}>Thêm thiết bị</div>
          </div>
        </Link>
        <section className={classes.table}>
          <table className={classes.bang}>
            <tr>
              <th className={classes.th} style={{ width: "103px" }}>
                Mã thiết bị
              </th>
              <th className={classes.th} style={{ width: "99px" }}>
                Tên thiết bị
              </th>
              <th className={classes.th} style={{ width: "136px" }}>
                Địa chỉ IP
              </th>
              <th className={classes.th} style={{ width: "174px" }}>
                Trạng thái hoạt động
              </th>
              <th className={classes.th} style={{ width: "145px" }}>
                Trạng thái kết nối
              </th>
              <th className={classes.th} style={{ width: "268px" }}>
                Dịch vụ sử dụng
              </th>
              <th className={classes.th} style={{ width: "82px" }}></th>
              <th className={classes.th} style={{ width: "104px" }}></th>
            </tr>
            <tr>
              <td className={classes.td}>KIO_01</td>
              <td className={classes.td}> Kiosk</td>
              <td className={classes.td}>192.168.1.10</td>
              <td className={classes.td}>
                <img src={chamdo} className={classes.chamdo} />
                Ngưng hoạt động
              </td>
              <td className={classes.td}>
                <img src={chamdo} className={classes.chamdo} />
                Mất kết nối
              </td>
              <td className={classes.td}>
                <div>Khám tim mạch, Khám mắt...</div>
                <div className={classes.duongdan}>Xem thêm</div>
              </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
            </tr>
            <tr>
              <td className={classes.tdchan}>KIO_01</td>
              <td className={classes.tdchan}> Kiosk</td>
              <td className={classes.tdchan}>192.168.1.10</td>
              <td className={classes.tdchan}>
                <img src={chamxanh} className={classes.chamxanh} />
                Hoạt động
              </td>
              <td className={classes.tdchan}>
                <img src={chamxanh} className={classes.chamxanh} />
                Kết nối
              </td>
              <td className={classes.tdchan}>
                <div>Khám tim mạch, Khám mắt...</div>
                <div className={classes.duongdan}>Xem thêm</div>
              </td>
              <td className={`${classes.duongdan} ${classes.tdchan}`}>
                Chi tiết{" "}
              </td>
              <td className={`${classes.duongdan} ${classes.tdchan}`}>
                Cập nhật
              </td>
            </tr>
            <tr>
              <td className={classes.td}>KIO_01</td>
              <td className={classes.td}> Kiosk</td>
              <td className={classes.td}>192.168.1.10</td>
              <td className={classes.td}>
                <img src={chamxanh} className={classes.chamxanh} />
                Hoạt động
              </td>
              <td className={classes.td}>
                <img src={chamdo} className={classes.chamdo} />
                Mất kết nối
              </td>
              <td className={classes.td}>
                <div>Khám tim mạch, Khám mắt...</div>
                <div className={classes.duongdan}>Xem thêm</div>
              </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
            </tr>
            <tr>
              <td className={classes.tdchan}>KIO_01</td>
              <td className={classes.tdchan}> Kiosk</td>
              <td className={classes.tdchan}>192.168.1.10</td>
              <td className={classes.tdchan}>
                <img src={chamdo} className={classes.chamdo} />
                Ngưng hoạt động
              </td>
              <td className={classes.tdchan}>
                <img src={chamxanh} className={classes.chamxanh} />
                Kết nối
              </td>
              <td className={classes.tdchan}>
                <div>Khám tim mạch, Khám mắt...</div>
                <div className={classes.duongdan}>Xem thêm</div>
              </td>
              <td className={`${classes.duongdan} ${classes.tdchan}`}>
                Chi tiết{" "}
              </td>
              <td className={`${classes.duongdan} ${classes.tdchan}`}>
                Cập nhật
              </td>
            </tr>
            <tr>
              <td className={classes.td}>KIO_01</td>
              <td className={classes.td}> Kiosk</td>
              <td className={classes.td}>192.168.1.10</td>
              <td className={classes.td}>
                <img src={chamxanh} className={classes.chamxanh} />
                Hoạt động
              </td>
              <td className={classes.td}>
                <img src={chamdo} className={classes.chamdo} />
                Mất kết nối
              </td>
              <td className={classes.td}>
                <div>Khám tim mạch, Khám mắt...</div>
                <div className={classes.duongdan}>Xem thêm</div>
              </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
            </tr>
            <tr>
              <td className={classes.tdchan}>KIO_01</td>
              <td className={classes.tdchan}> Kiosk</td>
              <td className={classes.tdchan}>192.168.1.10</td>
              <td className={classes.tdchan}>
                <img src={chamxanh} className={classes.chamxanh} />
                Hoạt động
              </td>
              <td className={classes.tdchan}>
                <img src={chamxanh} className={classes.chamxanh} />
                Kết nối
              </td>
              <td className={classes.tdchan}>
                <div>Khám tim mạch, Khám mắt...</div>
                <div className={classes.duongdan}>Xem thêm</div>
              </td>
              <td className={`${classes.duongdan} ${classes.tdchan}`}>
                Chi tiết{" "}
              </td>
              <td className={`${classes.duongdan} ${classes.tdchan}`}>
                Cập nhật
              </td>
            </tr>
            <tr>
              <td className={classes.td}>KIO_01</td>
              <td className={classes.td}> Kiosk</td>
              <td className={classes.td}>192.168.1.10</td>
              <td className={classes.td}>
                <img src={chamdo} className={classes.chamdo} />
                Ngưng hoạt động
              </td>
              <td className={classes.td}>
                <img src={chamxanh} className={classes.chamxanh} />
                Kết nối
              </td>
              <td className={classes.td}>
                <div>Khám tim mạch, Khám mắt...</div>
                <div className={classes.duongdan}>Xem thêm</div>
              </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
            </tr>
            <tr>
              <td className={classes.tdchan}>KIO_01</td>
              <td className={classes.tdchan}> Kiosk</td>
              <td className={classes.tdchan}>192.168.1.10</td>
              <td className={classes.tdchan}>
                <img src={chamxanh} className={classes.chamxanh} />
                Hoạt động
              </td>
              <td className={classes.tdchan}>
                <img src={chamxanh} className={classes.chamxanh} />
                Kết nối
              </td>
              <td className={classes.tdchan}>
                <div>Khám tim mạch, Khám mắt...</div>
                <div className={classes.duongdan}>Xem thêm</div>
              </td>
              <td className={`${classes.duongdan} ${classes.tdchan}`}>
                Chi tiết{" "}
              </td>
              <td className={`${classes.duongdan} ${classes.tdchan}`}>
                Cập nhật
              </td>
            </tr>
            <tr>
              <td className={classes.td}>KIO_01</td>
              <td className={classes.td}> Kiosk</td>
              <td className={classes.td}>192.168.1.10</td>
              <td className={classes.td}>
                <img src={chamxanh} className={classes.chamxanh} />
                Hoạt động
              </td>
              <td className={classes.td}>
                <img src={chamdo} className={classes.chamdo} />
                Mất kết nối
              </td>
              <td className={classes.td}>
                <div>Khám tim mạch, Khám mắt...</div>
                <div className={classes.duongdan}>Xem thêm</div>
              </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
            </tr>
          </table>
        </section>
        <div className={classes.newpage}>
          <div className={classes.newpageitem}>
            <img src={pastpage} />
          </div>
          <div className={`${classes.newpageitem} ${classes.ninow}`}>1</div>
          <div className={classes.newpageitem}>2</div>
          <div className={classes.newpageitem}>3</div>
          <div className={classes.newpageitem}>4</div>
          <div className={classes.newpageitem}>5</div>
          <div className={classes.newpageitem}>...</div>
          <div className={classes.newpageitem}>10</div>
          <div className={classes.newpageitem}>
            <img src={nextpage} />
          </div>
        </div>
      </section>
    </section>
  );
}
export default Quanli;
