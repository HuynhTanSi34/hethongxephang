import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import leader from "../../redux/decivelist";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/NumberlevelModule/notlogin.module.css";
import Logomini from "../../components/image/Logomini.png";
import filayers from "../../components/image/filayers.png";
import x from "../../components/image/x.png";
import Popresult from "./pop";
import { useState, useEffect } from "react";
function Popnotlogin() {
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
export default Popnotlogin;
