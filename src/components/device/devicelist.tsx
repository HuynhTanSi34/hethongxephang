import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/DeviceModule/quanli.module.css";
import chamdo from "../../components/image/chamdo.png";
import chamxanh from "../../components/image/chamxanh.png";
import addsquare from "../../components/image/addsquare.png";
import down from "../../components/image/down.png";
import search from "../../components/image/search.png";
function DeciveList({ listData, fetchLists }: any) {
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
  const ServiceActivePoint1 = (value: any) => {
    return (
      <>
        <span className="ActivePoint">
          <img src={chamxanh} />
        </span>
        <span> Kết nối</span>
      </>
    );
  };
  const ServiceUnactivePoint1 = (value: any) => {
    return (
      <>
        <span className="UnActivePoint">
          <img src={chamdo} />
        </span>
        <span>Mất kết nối</span>
      </>
    );
  };
  const data = listData.list;
  const [list, setList] = useState(data);
  const options = ["Tất cả", "Hoạt động", "Ngưng hoạt động"];
  const defaultOption = options[0];
  const optionsConnect = ["Tất cả", "Kết nối", "Mất kết nối"];
  const handleDropdownValue = (e: any) => {
    if (e.value == "Hoạt động") {
      const filterdata = data.filter(
        (list: any) => list.activeStatus == "Hoạt động"
      );
      setList(filterdata);
    } else if (e.value == "Ngưng hoạt động") {
      const filterdata = data.filter(
        (list: any) => list.activeStatus == "Ngưng hoạt động"
      );
      setList(filterdata);
    } else if (e.value == "Ngưng hoạt động") {
      const filterdata = data.filter(
        (list: any) => list.activeStatus == "Ngưng hoạt động"
      );
      setList(filterdata);
    } else if (e.value == "Kết nối") {
      const filterdata = data.filter(
        (list: any) => list.connecting == "Kết nối"
      );
      setList(filterdata);
    } else if (e.value == "Mất kết nối") {
      const filterdata = data.filter(
        (list: any) => list.connecting == "Mất kết nối"
      );
      setList(filterdata);
    } else {
      setList(data);
    }
  };
  const [showMore, setShowMore] = useState(false);

  const [search, setSearch] = useState("");
  return (
    <div>
      <Link to="/device/adddevice">
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
      <div className={classes.trangthaiketnoi}>
        <div className={classes.trangthaihoatdongname}>Trạng thái kết nối</div>
        <div className={`${classes.trangthaihoatdongselec} ${classes.trs}`}>
          <Dropdown
            options={optionsConnect}
            onChange={(e) => handleDropdownValue(e)}
            value={defaultOption}
            placeholder="Select an option"
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
          {listData.lists.map((list: any, index: any) => (
            <tr key={index}>
              <td className={classes.td}>
                <span>{list.deviceCode}</span>
              </td>
              <td className={classes.td}>
                <span>{list.deviceName}</span>{" "}
              </td>
              <td className={classes.td}>
                <span>{list.iP}</span>
              </td>
              <td className={classes.td}>
                <span>
                  {" "}
                  {list.activeStatus == "Hoạt động" ? (
                    <ServiceActivePoint />
                  ) : (
                    <ServiceUnactivePoint />
                  )}
                </span>
              </td>
              <td className={classes.td}>
                <span>
                  {" "}
                  {list.connecting == "Kết nối" ? (
                    <ServiceActivePoint1 />
                  ) : (
                    <ServiceUnactivePoint1 />
                  )}
                </span>
              </td>
              <td className={classes.td}>
                <span>
                  {" "}
                  {list.serviceUse}
                  {showMore && (
                    <span>
                      {" "}
                      khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng,
                      Khám hô hấp, Khám tổng quát
                    </span>
                  )}
                  {!showMore && (
                    <>
                      <br />
                      <a href="" onClick={() => setShowMore(!showMore)}>
                        {" "}
                        Xem thêm
                      </a>
                    </>
                  )}
                </span>
              </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
              <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
            </tr>
            /* <tr key={index}>
                <td className={classes.tdchan}>{list.deviceCode}</td>
                <td className={classes.tdchan}>{list.deviceName}</td>
                <td className={classes.tdchan}>{list.iP}</td>
                <td className={classes.tdchan}>
                  <img src={chamxanh} className={classes.chamxanh} />
                  {list.activeStatus}
                </td>
                <td className={classes.tdchan}>
                  <img src={chamxanh} className={classes.chamxanh} />
                  {list.connecting}
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
              </tr> */
          ))}
        </table>
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
export default connect(mapStateToProps, mapDispatchToProps)(DeciveList);
