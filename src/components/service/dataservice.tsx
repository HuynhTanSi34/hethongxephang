import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/ServiceModule/listservice.module.css";
import chamdo from "../../components/image/chamdo.png";
import chamxanh from "../../components/image/chamxanh.png";
import addsquare from "../../components/image/addsquare.png";
import calendar from "../../components/image/calendar.png";
import down from "../../components/image/down.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";
import search from "../../components/image/search.png";
function ServiceList({ listData, fetchLists }: any) {
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
  const options = ["Tất cả", "Hoạt động", "Ngưng hoạt động"];
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
      <div className={classes.title}>Dịch vụ {">"} </div>
      <div className={classes.title1}>Danh sách dịch vụ</div>
      <div className={classes.title2}>Quản lí dịch vụ</div>
      <Link to="/service/addservice">
        <div className={classes.addnewdevice}>
          <img src={addsquare} />
          <div className={classes.addnewdevicecontent}>Thêm thiết bị</div>
        </div>
      </Link>
      <div className={classes.trangthaihoatdong}>
        <div className={classes.trangthaihoatdongname}>
          Trạng thái hoạt động
        </div>
        <div className={`${classes.trangthaihoatdongselec} ${classes.trs}`}>
          <Dropdown
            options={options}
            onChange={(e) => handleDropdownValue(e)}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </div>
      <div className={classes.boxname}>Chọn thời gian</div>
      <div className={classes.boxtime}>
        <div className={classes.boxtimeItem1}>
          <img src={calendar} className={classes.cale} />
          <input
            type="text"
            className={classes.date}
            placeholder="10/10/2021"
          />
        </div>
        <div className={classes.space}>{">"} </div>
        <div className={classes.boxtimeItem1}>
          <img src={calendar} className={classes.cale} />
          <input
            type="text"
            className={classes.date}
            placeholder="18/10/2021"
          />
        </div>
      </div>
      <div className={classes.tukhoa}>
        <div className={classes.trangthaihoatdongname}>Từ khóa</div>
        <input
          placeholder="Nhập từ khóa"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={classes.trangthaihoatdongselec}
        />
        <img src={search} className={classes.search} />
      </div>
      <section className={classes.table}>
        <table className={classes.bang}>
          <tr>
            <th className={classes.th} style={{ width: "150px" }}>
              Mã dịch vụ
            </th>
            <th className={classes.th} style={{ width: "224px" }}>
              Tên dịch vụ
            </th>
            <th className={classes.th} style={{ width: "230px" }}>
              Mô tả
            </th>
            <th className={classes.th} style={{ width: "253px" }}>
              Trạng thái hoạt động
            </th>
            <th className={classes.th} style={{ width: "125px" }}></th>
            <th className={classes.th} style={{ width: "125px" }}></th>
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

              <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
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
export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);
