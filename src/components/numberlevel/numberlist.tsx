import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/numberlevel/numActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/NumberlevelModule/numberlevellist.module.css";
import chamdo from "../../components/image/chamdo.png";
import chambac from "../../components/image/chambac.png";
import chamxanhduong from "../../components/image/chamxanhduong.png";
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
          <img src={chamxanhduong} />
        </span>
        <span> Đang chờ</span>
      </>
    );
  };
  const ServiceUnactivePoint = (value: any) => {
    return (
      <>
        <span className="UnActivePoint">
          <img src={chamdo} />
        </span>
        <span>Bỏ qua</span>
      </>
    );
  };
  const ServiceUnactivePoint1 = (value: any) => {
    return (
      <>
        <span className="UnActivePoint">
          <img src={chambac} />
        </span>
        <span>Đã sử dụng</span>
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
  const [pageNumber, setPageNumber] = useState(0);
  const usersPrePage = 9;
  const pagesVisited = pageNumber * usersPrePage;
  const changePage = ({ selected }: { selected: any }) => {
    setPageNumber(selected);
  };
  const displayUsers = listData.lists
    .slice(pagesVisited, pagesVisited + usersPrePage)
    .map((item: any) => {
      return (
        <tr key={item.id}>
          <td className={classes.td}>
            <span>{item.numStt}</span>
          </td>
          <td className={classes.td}>
            <span>{item.numCus}</span>{" "}
          </td>
          <td className={classes.td}>
            <span>{item.numName}</span>{" "}
          </td>
          <td className={classes.td}>
            <span>{item.numTime}</span>{" "}
          </td>
          <td className={classes.td}>
            <span>{item.numDead}</span>
          </td>
          <td className={classes.td}>
            <span>
              {" "}
              {item.numTus == "Đang chờ" ? (
                <ServiceActivePoint />
              ) : item.numTus == "Bỏ qua" ? (
                <ServiceUnactivePoint />
              ) : (
                <ServiceUnactivePoint1 />
              )}
            </span>
          </td>
          <td className={classes.td}>
            <span>{item.numCre}</span>{" "}
          </td>
          <td className={`${classes.td} ${classes.duongdan}`}>
            <Link to="/numberlevel/reviewnumber">Chi tiết </Link>
          </td>
        </tr>
      );
    });
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
          <img src={down} className={classes.imgdown1} />
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
            <th className={classes.th} style={{ width: "165px" }}>
              Tên khách hàng
            </th>
            <th className={classes.th} style={{ width: "175px" }}>
              Tên dịch vụ
            </th>
            <th className={classes.th} style={{ width: "175px" }}>
              Thời gian cấp
            </th>
            <th className={classes.th} style={{ width: "175px" }}>
              Hạn sử dụng
            </th>
            <th className={classes.th} style={{ width: "150px" }}>
              Trạng thái
            </th>
            <th className={classes.th} style={{ width: "120px" }}>
              Nguồn cấp
            </th>
            <th className={classes.th} style={{ width: "80px" }}></th>
          </tr>
          {displayUsers}
        </table>
        <div className={classes.newpage}>
          <ReactPaginate
            previousLabel={<img src={pastpage} />}
            nextLabel={<img src={nextpage} />}
            pageCount={10}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
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
