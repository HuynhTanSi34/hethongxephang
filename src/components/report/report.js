import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/ReportModule/report.module.css";
import Dropdown from "react-dropdown";
import Stt from "./stt";
import Time from "./time";
import Status from "./status";
import From from "./from";
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
import calendar from "../../components/image/calendar.png";
import arrowright from "../../components/image/arrowright.png";
import download from "../../components/image/download.png";
import chamdo from "../../components/image/chamdo.png";
import chamxanhduong from "../../components/image/chamxanhduong.png";
import chambac from "../../components/image/chambac.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";

import { useState } from "react";
function Report() {
  const [show, setShow] = useState(false);
  const optionsa = [
    "2040001",

    "2040002",
    "2040003",
    "2040004",
    "2040005",
    "2040006",
    "2040007",
    "2040008",
    "2040009",
    "20400010",
  ];
  const defaultOption = optionsa[0];
  const optionsName = [
    "Khám tim mạch",
    "Răng hàm mặt",
    "Khám sản - Phụ khoa",
    "Tai mũi họng",
    "Khám tổng quát",
    "Khám hô hấp",
  ];
  const optionsTime = [
    "07:20 - 07/10/2021",
    "07:20 - 07/10/2021",
    "07:20 - 07/10/2021",
  ];
  const optionsStatus = ["Đang chờ", "Đã sử dụng", "Bỏ qua"];
  const optionsCre = ["Kiosk", "Hệ thống"];
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
          <div className={`${classes.listItem} ${classes.rep}`}>
            <img src={map} />
            <div>Báo cáo</div>
          </div>
          <div className={`${classes.listItem} ${classes.ml}`}>
            <img src={setting} />
            <div>Cài đặt hệ thống</div>
            <img src={bacham} className={classes.bacham} />
            <div className={classes.mucluc}>
              <Link to="/set/roleuser" className={classes.Link}>
                <div className={classes.muclucItem}>Quản lí vai trò</div>
              </Link>
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
        <div className={classes.title}>Báo cáo {"  >  "} </div>
        <div className={classes.title1}>Lập báo cáo</div>
        <div className={classes.title2}>Chọn thời gian</div>
        <div className={classes.boxtime}>
          <div className={classes.boxtimeItem1}>
            <img src={calendar} className={classes.cale} />
            <input
              type="text"
              className={classes.date}
              placeholder="10/10/2021"
            />
          </div>
          <div>{">"}</div>
          <div className={classes.boxtimeItem1}>
            <img src={calendar} className={classes.cale} />
            <input
              type="text"
              className={classes.date}
              placeholder="18/10/2021"
            />
          </div>
        </div>
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
        <div className={classes.download}>
          <img src={download} />
          <div className={classes.downloadtitle}>Tải về</div>
        </div>
        <section className={classes.table}>
          <table className={classes.bang}>
            <tr>
              <th className={classes.th} style={{ width: "226px" }}>
                <Dropdown
                  options={optionsa}
                  // onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Số thứ tự"
                />
              </th>
              <th className={classes.th} style={{ width: "232px" }}>
                <Dropdown
                  options={optionsName}
                  // onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Tên dịch vụ"
                />
              </th>
              <th className={classes.th} style={{ width: "238px" }}>
                <Dropdown
                  options={optionsTime}
                  // onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Thời gian cấp"
                />
              </th>
              <th className={classes.th} style={{ width: "216px" }}>
                <Dropdown
                  options={optionsStatus}
                  // onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Tình trạng"
                />
              </th>
              <th className={classes.th} style={{ width: "196px" }}>
                <Dropdown
                  options={optionsCre}
                  // onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Nguồn cấp"
                />
              </th>
            </tr>
            <tr>
              <td className={classes.td}>2010001</td>
              <td className={classes.td}>Khám tim mạch</td>
              <td className={classes.td}>07:20 - 07/10/2021</td>
              <td className={classes.td}>
                <img src={chamxanhduong} className={classes.chamdo} />
                Đang chờ
              </td>
              <td className={classes.td}>Kiosk</td>
            </tr>
            <tr>
              <td className={classes.tdchan}>2010002</td>
              <td className={classes.tdchan}>Răng hàm mặt</td>
              <td className={classes.tdchan}>07:20 - 07/10/2021</td>
              <td className={classes.tdchan}>
                <img src={chambac} className={classes.chamxanh} />
                Đã sử dụng
              </td>
              <td className={classes.tdchan}>Hệ thống</td>
            </tr>
            <tr>
              <td className={classes.td}>2010003</td>
              <td className={classes.td}>Khám sản - phụ khoa</td>
              <td className={classes.td}>07:20 - 07/10/2021</td>
              <td className={classes.td}>
                <img src={chamdo} className={classes.chamdo} />
                Bỏ qua
              </td>
              <td className={classes.td}>Kiosk</td>
            </tr>
            <tr>
              <td className={classes.tdchan}>2010004</td>
              <td className={classes.tdchan}>Răng hàm mặt</td>
              <td className={classes.tdchan}>07:20 - 07/10/2021</td>
              <td className={classes.tdchan}>
                <img src={chamxanhduong} className={classes.chamdo} />
                Đang chờ
              </td>
              <td className={classes.tdchan}>Hệ thống</td>
            </tr>
            <tr>
              <td className={classes.td}>2010005</td>
              <td className={classes.td}>Răng hàm mặt</td>
              <td className={classes.td}>07:20 - 07/10/2021</td>
              <td className={classes.td}>
                <img src={chamxanhduong} className={classes.chamxanh} />
                Đang chờ
              </td>
              <td className={classes.td}>Kiosk</td>
            </tr>
            <tr>
              <td className={classes.tdchan}>2010006</td>
              <td className={classes.tdchan}>Khám tổng quát</td>
              <td className={classes.tdchan}>07:20 - 07/10/2021</td>
              <td className={classes.tdchan}>
                <img src={chamdo} className={classes.chamdo} />
                Bỏ qua
              </td>
              <td className={classes.tdchan}>Hệ thống</td>
            </tr>
            <tr>
              <td className={classes.td}>2010007</td>
              <td className={classes.td}>Khám hô hấp</td>
              <td className={classes.td}>07:20 - 07/10/2021</td>
              <td className={classes.td}>
                <img src={chamxanhduong} className={classes.chamdo} />
                Đang chờ
              </td>
              <td className={classes.td}>Kiosk</td>
            </tr>
            <tr>
              <td className={classes.tdchan}>2010008</td>
              <td className={classes.tdchan}>Khám hô hấp</td>
              <td className={classes.tdchan}>07:20 - 07/10/2021</td>
              <td className={classes.tdchan}>
                <img src={chambac} className={classes.chamxanh} />
                Đã sử dụng
              </td>
              <td className={classes.tdchan}>Kiosk</td>
            </tr>
            <tr>
              <td className={classes.td}>2010009</td>
              <td className={classes.td}>Tai mũi họng</td>
              <td className={classes.td}>07:20 - 07/10/2021</td>
              <td className={classes.td}>
                <img src={chamdo} className={classes.chamdo} />
                Bỏ qua
              </td>
              <td className={classes.td}>Hệ thống</td>
            </tr>
            <tr>
              <td className={classes.tdchan}>20100010</td>
              <td className={classes.tdchan}>Khám sản - phụ khoa</td>
              <td className={classes.tdchan}>07:20 - 07/10/2021</td>
              <td className={classes.tdchan}>
                <img src={chamxanhduong} className={classes.chamxanh} />
                Đang chờ
              </td>
              <td className={classes.tdchan}>Hệ thống</td>
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
export default Report;
