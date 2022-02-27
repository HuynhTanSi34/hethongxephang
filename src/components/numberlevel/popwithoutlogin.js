import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/NumberlevelModule/notlogin.module.css";
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
import Popresult from "./pop";
import { useState } from "react";
import { CAlert } from "@coreui/react";
function Popnotlogin() {
  const [show, setShow] = useState(false);
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
  const handleDropdownValue = (e) => {
    alert(<Popresult />);
  };
  const [showed, setShowed] = useState(false);
  return (
    <section className="screen">
      <section className={classes.inform}>
        <img src={Logomini} alt="Logo" className="logo1" />
        <div className={classes.list}>
          <div className={`${classes.listItem} ${classes.thiet}`}>
            <img src={filayers} />
            <div>Cấp số</div>
          </div>
        </div>
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

        <form>
          <section className={classes.inforservice}>
            <div className={classes.inforservicename}>CẤP SỐ MỚI</div>
            <div className={classes.inforservicenhaplieuitem}>
              Dịch vụ khách hàng lựa chọn
            </div>
            <div className={classes.inforservicenhaplieuitem1}>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
            <div className={classes.nutsubmit}>
              <Link to="/numberlevel/numberlevellist">
                <input
                  type="submit"
                  value="Hủy bỏ"
                  className={classes.nutsubmitcancel}
                />
              </Link>

              <button
                onClick={() => setShowed(!showed)}
                // type="submit"
                // value="In số"
                className={classes.nutsubmitadd}
              >
                In số
                {showed && <Popresult />}
              </button>
            </div>
          </section>
        </form>
      </section>
    </section>
  );
}
export default Popnotlogin;
