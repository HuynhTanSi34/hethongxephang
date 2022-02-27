import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/Set/account.module.css";
import chamdo from "../../components/image/chamdo.png";
import chamxanh from "../../components/image/chamxanh.png";
import addsquare from "../../components/image/addsquare.png";
import down from "../../components/image/down.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";
import loop from "../../components/image/loop.png";
function Accounted({ listData, fetchLists }: any) {
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
  const options = ["Tất cả", "Quản lí", "Kế toán", "Admin"];
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
      <div className={classes.title1}>Quản lý tài khoản</div>
      <div className={classes.title2}>Danh sách tài khoản</div>
      <Link to="/set/addaccount">
        <div className={classes.addnewdevice}>
          <img src={addsquare} />
          <div className={classes.addnewdevicecontent}>Thêm tài khoản</div>
        </div>
      </Link>
      <div className={classes.numberleveloption}>
        <div className={classes.numberleveloptionname}>Tên vai trò</div>
        <div className={`${classes.numberleveloptionselec} ${classes.trs}`}>
          <Dropdown
            options={options}
            onChange={(e) => handleDropdownValue(e)}
            value={defaultOption}
            placeholder="Tất cả"
          />
          <img src={down} className={classes.imgdown} />
        </div>
      </div>
      <div className={classes.tukhoa}>
        <div className={classes.numberleveloptionname}>Từ khóa</div>
        <input
          placeholder="Nhập từ khóa"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={classes.numberleveloptionkhoa}
        />
        <img src={loop} className={classes.search} />
      </div>
      <section className={classes.table}>
        <table className={classes.bang}>
          <tr>
            <th className={classes.th} style={{ width: "160px" }}>
              Tên đăng nhập
            </th>
            <th className={classes.th} style={{ width: "176px" }}>
              Họ tên
            </th>
            <th className={classes.th} style={{ width: "155px" }}>
              Số điện thoại
            </th>
            <th className={classes.th} style={{ width: "auto" }}>
              Email
            </th>
            <th className={classes.th} style={{ width: "125px" }}>
              Vai trò
            </th>
            <th className={classes.th} style={{ width: "203px" }}>
              Trạng thái hoạt động
            </th>
            <th className={classes.th} style={{ width: "105px" }}></th>
          </tr>
          {listData.lists.map((item: any, index: any) => (
            <tr key={index}>
              <td className={classes.td}>
                <span>{item.deviceCode}</span>
              </td>
              <td className={classes.td}>
                <span>{item.deviceName}</span>{" "}
              </td>
              <td className={classes.td}>
                <span>{item.deviceName}</span>{" "}
              </td>
              <td className={classes.td}>
                <span>{item.deviceName}</span>{" "}
              </td>
              <td className={classes.td}>
                <span>{item.iP}</span>
              </td>
              <td className={classes.td}>
                <span>
                  {" "}
                  {item.activeStatus == "Hoạt động" ? (
                    <ServiceActivePoint />
                  ) : (
                    <ServiceUnactivePoint />
                  )}
                </span>
              </td>

              <Link to="/set/updateaccount" className={classes.Link}>
                <td className={`${classes.td} ${classes.duongdan}`}>
                  Cập nhật
                </td>
              </Link>
            </tr>
          ))}
        </table>
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
export default connect(mapStateToProps, mapDispatchToProps)(Accounted);
