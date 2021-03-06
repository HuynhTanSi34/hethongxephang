import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/DashboardModule/day.module.css";
import Bell from "../login/bell";
import { useState, useEffect } from "react";
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
  useEffect(() => {
    document.title = "Dashboard";
  });
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
              <div>Thi???t b???</div>
            </Link>
          </div>

          <div className={classes.listItem}>
            <Link to="/service/listservice" className="Link">
              <img src={service} />
              <div>D???ch v???</div>
            </Link>
          </div>
          <div className={classes.listItem}>
            <Link to="/numberlevel/numberlevellist" className="Link">
              <img src={filayers} />
              <div>C???p s???</div>
            </Link>
          </div>
          <div className={classes.listItem}>
            <Link to="/report" className="Link">
              <img src={map} />
              <div>B??o c??o</div>
            </Link>
          </div>
          <div className={`${classes.listItem} ${classes.ml}`}>
            <img src={setting} />
            <div>C??i ?????t h??? th???ng</div>
            <img src={bacham} className={classes.bacham} />
            <div className={classes.mucluc}>
              <Link to="/set/roleuser" className="Link">
                <div className={classes.muclucItem}>Qu???n l?? vai tr??</div>
              </Link>
              <Link to="/set/account" className="Link">
                <div className={classes.muclucItem}>Qu???n l?? t??i kho???n</div>
              </Link>
              <Link to="/set/diary" className="Link">
                <div className={classes.muclucItem}>Nh???t k?? ng?????i d??ng</div>
              </Link>
            </div>
          </div>
        </div>
        <Link to={"/" || ""}>
          <div className={classes.out}>
            <img src={filogout} alt="out" className={classes.item5} />
            <div>????ng xu???t</div>
          </div>
        </Link>
      </section>
      <section className={classes.map}>
        <div className={classes.title}>Dashboard</div>
        <div className={classes.title1}>Bi???u ????? c???p s??? </div>
        <div className="stt">
          <div className="sttItem">
            <div className="sttItem1">
              <img src={sttdacap} className="imgstt" />
              <div className="sttText">S??? th??? t??? ???? c???p</div>
            </div>
            <div className="sttItem2">
              <div className="sttNumber">4.221</div>
              <img src={s3241} className="imgstt2" />
            </div>
          </div>
          <div className="sttItem">
            <div className="sttItem1">
              <img src={sttdadung} className="imgstt" />
              <div className="sttText">S??? th??? t??? ???? s??? d???ng</div>
            </div>
            <div className="sttItem2">
              <div className="sttNumber">3.721</div>
              <img src={sc3241} className="imgstt2" />
            </div>
          </div>
          <div className="sttItem">
            <div className="sttItem1">
              <img src={sttdangcho} className="imgstt" />
              <div className="sttText">S??? th??? t??? ??ang ch???</div>
            </div>
            <div className="sttItem2">
              <div className="sttNumber">468</div>
              <img src={s5641} className="imgstt2" />
            </div>
          </div>
          <div className="sttItem">
            <div className="sttItem1">
              <img src={sttdaboqua} className="imgstt" />
              <div className="sttText">S??? th??? t??? ???? b??? qua</div>
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
              <div className="chao">Xin ch??o</div>
              <div className="ten">L?? Qu???nh ??i V??n</div>
            </Link>
          </div>
        </div>
        <div className="tongQuan">T???ng quan</div>
        <div className="tongQuanlist">
          <div className="tongQuanItem">
            <div className="tongQuanItempercent">
              <img src={t90} />
            </div>
            <div className="tongQuanItemcontent">
              <div>4.221</div>
              <div className="tongQuanItemcontentthietbi">
                <img src={imgthietbi} className="imgthietbi" />
                <div>Thi???t b???</div>
              </div>
            </div>
            <div className="tongQuanItemstatus">
              <div className="tongQuanItemstatus0">
                <img src={chamvang} className="cham" />
                <div className="tongQuanItemstatus1">??ang ho???t ?????ng</div>
                <div className="tongQuanItemstatus2">3.799</div>
              </div>
              <div className="tongQuanItemstatus0">
                <img src={chambac} className="cham" />
                <div className="tongQuanItemstatus1">Ng??ng ho???t ?????ng</div>
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
                <div>D???ch v???</div>
              </div>
            </div>
            <div className="tongQuanItemstatus">
              <div className="tongQuanItemstatus0">
                <img src={chamxanhduong} className="cham" />
                <div className="tongQuanItemstatus1">??ang ho???t ?????ng</div>
                <div className="tongQuanItemstatus21">210</div>
              </div>
              <div className="tongQuanItemstatus0">
                <img src={chambac} className="cham" />
                <div className="tongQuanItemstatus1">Ng??ng ho???t ?????ng</div>
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
                <div>C???p s???</div>
              </div>
            </div>
            <div className="tongQuanItemstatuss">
              <div className="tongQuanItemstatus01">
                <img src={chamxanhla} className="cham" />
                <div className="tongQuanItemstatus1">???? s??? d???ng</div>
                <div className="tongQuanItemstatus22">3.721</div>
              </div>
              <div className="tongQuanItemstatus0">
                <img src={chambac} className="cham" />
                <div className="tongQuanItemstatus1">??ang ch???</div>
                <div className="tongQuanItemstatus22">486</div>
              </div>
              <div className="tongQuanItemstatus0">
                <img src={chamhong} className="cham" />
                <div className="tongQuanItemstatus1">B??? qua</div>
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
