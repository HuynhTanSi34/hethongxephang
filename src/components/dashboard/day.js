import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/DashboardModule/day.module.css";
import Bell from "../login/bell";
import { useState } from "react";
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
import sttdacap from "../../components/image/sttdacap.png";
import sttdadung from "../../components/image/sttdadung.png";
import sttdangcho from "../../components/image/sttdangcho.png";
import sttdaboqua from "../../components/image/sttdaboqua.png";
import s3241 from "../../components/image/s3241.png";
import sc3241 from "../../components/image/sc3241.png";
import s5641 from "../../components/image/s5641.png";
import s2241 from "../../components/image/s2241.png";
import t90 from "../../components/image/t90.png";
import t76 from "../../components/image/t76.png";
import t86 from "../../components/image/t86.png";
import imgthietbi from "../../components/image/imgthietbi.png";
import imgdichvu from "../../components/image/imgdichvu.png";
import imgcapso from "../../components/image/imgcapso.png";
import chamvang from "../../components/image/chamvang.png";
import chambac from "../../components/image/chambac.png";
import chamxanhduong from "../../components/image/chamxanhduong.png";
import chamxanhla from "../../components/image/chamxanhla.png";
import chamhong from "../../components/image/chamhong.png";
import DatePicker from "sassy-datepicker";
import Chartday from "../dashboard/chartday";
function Day() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const onChange = (newDate) => {
    console.log("New date selected - ${newDate.toString()}");
    setDate(newDate);
  };
  window.process = {
    env: {
      NODE_ENV: "development",
    },
  };
  return (
    <div className={classes.screen}>
      <section className={classes.inform}>
        <img src={Logomini} alt="Logo" className="logo1" />
        <div className={classes.list}>
          <div className={`${classes.listItem} ${classes.das}`}>
            <img src={element4} />
            <div>Dashboard</div>
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
      <section className={classes.map}>
        <div className={classes.title}>Dashboard</div>
        <div className={classes.title1}>Biểu đồ cấp số </div>
        <div className="stt">
          <div className="sttItem">
            <div className="sttItem1">
              <img src={sttdacap} className="imgstt" />
              <div className="sttText">Số thứ tự đã cấp</div>
            </div>
            <div className="sttItem2">
              <div className="sttNumber">4.221</div>
              <img src={s3241} className="imgstt2" />
            </div>
          </div>
          <div className="sttItem">
            <div className="sttItem1">
              <img src={sttdadung} className="imgstt" />
              <div className="sttText">Số thự tự đã sử dụng</div>
            </div>
            <div className="sttItem2">
              <div className="sttNumber">3.721</div>
              <img src={sc3241} className="imgstt2" />
            </div>
          </div>
          <div className="sttItem">
            <div className="sttItem1">
              <img src={sttdangcho} className="imgstt" />
              <div className="sttText">Số thứ tự đang chờ</div>
            </div>
            <div className="sttItem2">
              <div className="sttNumber">468</div>
              <img src={s5641} className="imgstt2" />
            </div>
          </div>
          <div className="sttItem">
            <div className="sttItem1">
              <img src={sttdaboqua} className="imgstt" />
              <div className="sttText">Số thứ tự đã bỏ qua</div>
            </div>
            <div className="sttItem2">
              <div className="sttNumber">32</div>
              <img src={s2241} className="imgstt2" />
            </div>
          </div>
        </div>
        <Chartday />
      </section>
      <section className={classes.overoll}>
        <div className="title52">
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
        <div className="tongQuan">Tổng quan</div>
        <div className="tongQuanlist">
          <div className="tongQuanItem">
            <div className="tongQuanItempercent">
              <img src={t90} />
            </div>
            <div className="tongQuanItemcontent">
              <div>4.221</div>
              <div className="tongQuanItemcontentthietbi">
                <img src={imgthietbi} className="imgthietbi" />
                <div>Thiết bị</div>
              </div>
            </div>
            <div className="tongQuanItemstatus">
              <div className="tongQuanItemstatus0">
                <img src={chamvang} className="cham" />
                <div className="tongQuanItemstatus1">Đang hoạt động</div>
                <div className="tongQuanItemstatus2">3.799</div>
              </div>
              <div className="tongQuanItemstatus0">
                <img src={chambac} className="cham" />
                <div className="tongQuanItemstatus1">Ngưng hoạt động</div>
                <div className="tongQuanItemstatus2">422</div>
              </div>
            </div>
          </div>
          <div className="tongQuanItem">
            <div className="tongQuanItempercent">
              <img src={t76} />
            </div>
            <div className="tongQuanItemcontent">
              <div>276</div>
              <div className="tongQuanItemcontentdichvu">
                <img src={imgdichvu} className="imgdichvu" />
                <div>Dịch vụ</div>
              </div>
            </div>
            <div className="tongQuanItemstatus">
              <div className="tongQuanItemstatus0">
                <img src={chamxanhduong} className="cham" />
                <div className="tongQuanItemstatus1">Đang hoạt động</div>
                <div className="tongQuanItemstatus21">210</div>
              </div>
              <div className="tongQuanItemstatus0">
                <img src={chambac} className="cham" />
                <div className="tongQuanItemstatus1">Ngưng hoạt động</div>
                <div className="tongQuanItemstatus21">66</div>
              </div>
            </div>
          </div>
          <div className="tongQuanItem">
            <div className="tongQuanItempercent">
              <img src={t86} />
            </div>
            <div className="tongQuanItemcontent">
              <div>4.221</div>
              <div className="tongQuanItemcontentcapso">
                <img src={imgcapso} className="imgcapso" />
                <div>Cấp số</div>
              </div>
            </div>
            <div className="tongQuanItemstatuss">
              <div className="tongQuanItemstatus01">
                <img src={chamxanhla} className="cham" />
                <div className="tongQuanItemstatus1">Đã sử dụng</div>
                <div className="tongQuanItemstatus22">3.721</div>
              </div>
              <div className="tongQuanItemstatus0">
                <img src={chambac} className="cham" />
                <div className="tongQuanItemstatus1">Đang chờ</div>
                <div className="tongQuanItemstatus22">486</div>
              </div>
              <div className="tongQuanItemstatus0">
                <img src={chamhong} className="cham" />
                <div className="tongQuanItemstatus1">Bỏ qua</div>
                <div className="tongQuanItemstatus22">32</div>
              </div>
            </div>
          </div>
        </div>
        <div className="datepickers">
          <DatePicker onChange={onChange} />
        </div>
      </section>
    </div>
  );
}
export default Day;
