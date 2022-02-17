import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/ServiceModule/updateservice.module.css";
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
function Updateservice() {
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
          <div className={classes.listItem}>
            <Link to="/service" className="Link">
              <img src={monitor} />
              <div>Thiết bị</div>
            </Link>
          </div>
          <div className={`${classes.listItem} ${classes.thiet}`}>
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
        <div className={classes.contentname}>
          <div className={classes.title}>Dịch vụ </div>
          <div className={classes.space}>{">"}</div>
          <div className={classes.title1}>Danh sách dịch vụ </div>
          <div className={classes.space}>{">"}</div>
          <div className={classes.title2}>Thêm dịch vụ</div>
        </div>
        <div className={classes.title3}>Quản lý dịch vụ</div>
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
            <div className={classes.inforservicename}>Thông tin dịch vụ</div>
            <div className={classes.inforservicenhaplieu}>
              <div className={classes.inforservicenhaplieuitem}>
                <div>Mã dịch vụ:</div>
                <div style={{ color: "red" }}>*</div>
                <input
                  type="text"
                  className={classes.inforservicenhaplieuitem1}
                  placeholder="Nhập mã dịch vụ"
                  required
                />
              </div>
              <div
                className={`${classes.inforservicenhaplieuitem} ${classes.su}`}
              >
                <div
                  className={`${classes.inforservicenhaplieuitem} ${classes.mota}`}
                >
                  <div>Mô tả:</div>

                  <input
                    className={classes.inforservicenhaplieuitem3}
                    type="text"
                    maxlength="5000"
                    placeholder="Mô tả dịch vụ"
                    required
                  />
                  {/* <textarea
                    rows="10"
                    cols="200"
                    className={classes.inforservicenhaplieuitem3}
                    placeholder="Mô tả"
                  ></textarea> */}
                </div>
              </div>
              <div className={classes.inforservicenhaplieuitem}>
                <div>Tên dịch vụ:</div>
                <div style={{ color: "red" }}>*</div>
                <input
                  className={classes.inforservicenhaplieuitem1}
                  type="text"
                  placeholder="Nhập tên dịch vụ"
                  required
                />
              </div>
            </div>
            <div className={classes.inforservicename}>Quy tắc cấp số</div>
            <div className={classes.inforservicequydoi}>
              <input className={classes.checkbox} type="checkbox" />
              <label className={classes.inforservicequydoititle}>
                Tăng từ động từ:
              </label>
              <input
                type="text"
                className={classes.inputtext}
                placeholder="0001"
              />
              <div className={classes.inforservicequydoititle}>đến</div>
              <input
                type="text"
                className={classes.inputtext}
                placeholder="9999"
              />
            </div>
            <div className={classes.inforservicequydoi}>
              <input className={classes.checkbox} type="checkbox" />
              <label className={classes.inforservicequydoititle}>Prefix:</label>
              <input type="text" className={classes.int1} placeholder="0001" />
            </div>
            <div className={classes.inforservicequydoi}>
              <input className={classes.checkbox} type="checkbox" />
              <label className={classes.inforservicequydoititle}>Surfix:</label>
              <input type="text" className={classes.int1} placeholder="0001" />
            </div>
            <div className={classes.inforservicequydoi}>
              <input className={classes.checkbox} type="checkbox" />
              <label className={classes.inforservicequydoititle}>
                Reset mỗi ngày
              </label>
            </div>
            <div className={classes.chuy}>
              <div style={{ color: "red" }}>*</div>
              <div>Là trường thông tin bắt buộc</div>
            </div>
          </section>
          <div className={classes.nutsubmit}>
            <Link to="/service/listservice">
              <input
                type="submit"
                value="Hủy bỏ"
                className={classes.nutsubmitcancel}
              />
            </Link>
            <Link to="/service/readservice">
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
export default Updateservice;
