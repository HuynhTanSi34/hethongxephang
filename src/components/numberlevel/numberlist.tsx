import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/NumberlevelModule/numberlevellist.module.css";
import chamdo from "../../components/image/chamdo.png";
import chamxanh from "../../components/image/chamxanh.png";
import addsquare from "../../components/image/addsquare.png";
import calendar from "../../components/image/calendar.png";
import down from "../../components/image/down.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";
import loop from "../../components/image/loop.png";
function Numberlist({ listData, fetchLists }: any) {
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
  const options = [
    "Tất cả",
    "Khám sản - Phụ khoa",
    "Khám răng hàm mặt",
    "Khám tai mũi họng",
    "Khám tim mạch",
    "Khám hô hấp",
    "Khám tổng quát",
  ];
  const options1 = ["Tất cả", "Đang chờ", "Đã sử dụng", "Bỏ qua"];
  const options2 = ["Tất cả", "Kiosk", "Hệ thống"];
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
      <div className={classes.title}>Cấp số {">"} </div>
      <div className={classes.title1}>Danh sách cấp số</div>
      <div className={classes.title2}>Quản lý cấp số</div>
      <Link to="/numberlevel/addnumber">
        <div className={classes.addnewdevice}>
          <img src={addsquare} />
          <div className={classes.addnewdevicecontent}>Cấp số mới</div>
        </div>
      </Link>
      <div className={classes.numberleveloption}>
        <div className={classes.numberleveloptionname}>Tên dịch vụ</div>
        <div className={`${classes.numberleveloptionselec} ${classes.trs}`}>
          <Dropdown
            options={options}
            onChange={(e) => handleDropdownValue(e)}
            value={defaultOption}
            placeholder="Select an option"
          />
          <img src={down} className={classes.imgdown} />
        </div>
      </div>
      <div className={classes.numberleveloption1}>
        <div className={classes.numberleveloptionname}>Tình trạng</div>
        <div className={`${classes.numberleveloptionselec} ${classes.trs}`}>
          <Dropdown
            options={options1}
            onChange={(e) => handleDropdownValue(e)}
            value={defaultOption}
            placeholder="Select an option"
          />
          <img src={down} className={classes.imgdown} />
        </div>
      </div>
      <div className={classes.numberleveloption2}>
        <div className={classes.numberleveloptionname}>Nguồn cấp</div>
        <div className={`${classes.numberleveloptionselec} ${classes.trs}`}>
          <Dropdown
            options={options2}
            onChange={(e) => handleDropdownValue(e)}
            value={defaultOption}
            placeholder="Select an option"
          />
          <img src={down} className={classes.imgdown} />
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
            <th className={classes.th} style={{ width: "93px" }}>
              STT
            </th>
            <th className={classes.th} style={{ width: "162px" }}>
              Tên khách hàng
            </th>
            <th className={classes.th} style={{ width: "171px" }}>
              Tên dịch vụ
            </th>
            <th className={classes.th} style={{ width: "161px" }}>
              Thời gian cấp
            </th>
            <th className={classes.th} style={{ width: "174px" }}>
              Hạn sử dụng
            </th>
            <th className={classes.th} style={{ width: "147px" }}>
              Trạng thái
            </th>
            <th className={classes.th} style={{ width: "120px" }}>
              Nguồn cấp
            </th>
            <th className={classes.th} style={{ width: "78px" }}></th>
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
              <td className={`${classes.td} ${classes.duongdan}`}></td>
              <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
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
export default connect(mapStateToProps, mapDispatchToProps)(Numberlist);
