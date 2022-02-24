import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/Set/addaccount.module.css";
import chamdo from "../../components/image/chamdo.png";
import chamxanh from "../../components/image/chamxanh.png";
import addsquare from "../../components/image/addsquare.png";
import down from "../../components/image/down.png";
import loop from "../../components/image/loop.png";
function Addaccounted({ listData, fetchLists }: any) {
  useEffect(() => {
    fetchLists();
  }, []);
  const ServiceActivePoint = (value: any) => {
    return (
      <>
        <span className="ActivePoint">
          <img src={chamxanh} />
        </span>
        <span> Hoạt động</span>
      </>
    );
  };
  const ServiceUnactivePoint = (value: any) => {
    return (
      <>
        <span className="UnActivePoint">
          <img src={chamdo} />
        </span>
        <span>Ngưng hoạt động</span>
      </>
    );
  };

  const data = listData.dataDevice;
  const [dataDevice, setDataDevice] = useState(data);
  const options = [""];
  const optionsvai = ["Tất cả", "Quản lí", "Kế toán", "Admin"];
  const optionstinh = ["Tất cả", "Ngưng hoạt động", "Hoạt động"];
  const defaultOption = options[0];
  const handleDropdownValue = (e: any) => {
    if (e.value == "Hoạt động") {
      const filterdata = data.filter(
        (item: any) => item.activeStatus == "Hoạt động"
      );
      setDataDevice(filterdata);
    } else if (e.value == "Ngưng hoạt động") {
      const filterdata = data.filter(
        (item: any) => item.activeStatus == "Ngưng hoạt động"
      );
      setDataDevice(filterdata);
    } else if (e.value == "Ngưng hoạt động") {
      const filterdata = data.filter(
        (item: any) => item.activeStatus == "Ngưng hoạt động"
      );
      setDataDevice(filterdata);
    }
  };
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className={classes.title}>Cài đặt hệ thống {">"} </div>
      <div className={classes.title1}>Quản lý tài khoản {">"}</div>
      <div className={classes.title12}>Thêm tài khoản</div>
      <div className={classes.title2}>Quản lý tài khoản</div>

      <form>
        <section className={classes.infordevice}>
          <div className={classes.infordevicename}>Thông tin tài khoản</div>
          <div className={classes.infordevicenhaplieu}>
            <div className={classes.infordevicenhaplieuitem}>
              <div>Họ tên:</div>
              <div style={{ color: "red" }}>*</div>
              <input
                type="text"
                className={classes.infordevicenhaplieuitem1}
                placeholder="Nhập họ tên"
                required
              />
            </div>
            <div className={classes.infordevicenhaplieuitem}>
              <div>Tên đăng nhập:</div>
              <div style={{ color: "red" }}>*</div>
              <input
                type="text"
                className={classes.infordevicenhaplieuitem1}
                placeholder="Nhập tên đăng nhập"
                required
              />
            </div>
            <div className={classes.infordevicenhaplieuitem}>
              <div>Số điện thoại:</div>
              <div style={{ color: "red" }}>*</div>
              <input
                className={classes.infordevicenhaplieuitem1}
                type="text"
                placeholder="Nhập số điện thoại"
                required
              />
            </div>
            <div className={classes.infordevicenhaplieuitem}>
              <div>Mật khẩu:</div>
              <div style={{ color: "red" }}>*</div>
              <input
                className={classes.infordevicenhaplieuitem1}
                type="password"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
            <div className={classes.infordevicenhaplieuitem}>
              <div>Email:</div>
              <div style={{ color: "red" }}>*</div>
              <input
                className={classes.infordevicenhaplieuitem1}
                type="email"
                placeholder="Nhập địa chỉ Email"
                required
              />
            </div>
            <div className={classes.infordevicenhaplieuitem}>
              <div>Nhắc lại mật khẩu:</div>
              <div style={{ color: "red" }}>*</div>
              <input
                className={classes.infordevicenhaplieuitem1}
                type="password"
                placeholder="Nhập lại mật khẩu"
                required
              />
            </div>
            <div className={classes.infordevicenhaplieuitem}>
              <div>Vai trò:</div>
              <div style={{ color: "red" }}>*</div>
              <Dropdown
                options={optionsvai}
                onChange={(e) => handleDropdownValue(e)}
                value={defaultOption}
                placeholder="Select an option"
                className={classes.infordevicenhaplieuitem1}
              />
            </div>
            <div className={classes.infordevicenhaplieuitem}>
              <div>Tình trạng:</div>
              <div style={{ color: "red" }}>*</div>
              <Dropdown
                options={optionstinh}
                onChange={(e) => handleDropdownValue(e)}
                value={defaultOption}
                placeholder="Select an option"
                className={classes.infordevicenhaplieuitem1}
              />
            </div>
          </div>

          <div className={classes.chuy}>
            <div style={{ color: "red" }}>*</div>
            <div>Là trường thông tin bắt buộc</div>
          </div>
        </section>
        <div className={classes.nutsubmit}>
          <Link to="/set/account">
            <input
              type="submit"
              value="Hủy bỏ"
              className={classes.nutsubmitcancel}
            />
          </Link>
          <Link to="/set/account">
            <input
              type="submit"
              value="Thêm"
              className={classes.nutsubmitadd}
            />
          </Link>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    listData: state.list,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchLists: () => dispatch(fetchLists()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Addaccounted);
