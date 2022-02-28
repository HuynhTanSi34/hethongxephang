import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/report/reportActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/ReportModule/report.module.css";
import chamdo from "../../components/image/chamdo.png";
import chamxanhduong from "../../components/image/chamxanhduong.png";
import chambac from "../../components/image/chambac.png";
import addsquare from "../../components/image/addsquare.png";
import calendar from "../../components/image/calendar.png";
import down from "../../components/image/down.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";
import loop from "../../components/image/loop.png";
function ReportList({ listData, fetchLists }: any) {
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
          <img src={chambac} />
        </span>
        <span>Đã sử dụng</span>
      </>
    );
  };
  const ServiceUnactivePoint1 = (value: any) => {
    return (
      <>
        <span className="UnActivePoint">
          <img src={chamdo} />
        </span>
        <span>Bỏ qua</span>
      </>
    );
  };
  const optionsa = [
    "2040001",
    "2040002",
    "2040003",
    "2040004",
    "2040005",
    "2040006",
    "2040007",
    "2040008",
    "2040009",
    "20400010",
  ];
  const defaultOption = optionsa[0];
  const optionsName = [
    "Khám tim mạch",
    "Răng hàm mặt",
    "Khám sản - Phụ khoa",
    "Tai mũi họng",
    "Khám tổng quát",
    "Khám hô hấp",
  ];
  const optionsTime = [
    "07:20 - 07/10/2021",
    "07:20 - 07/10/2021",
    "07:20 - 07/10/2021",
  ];
  const optionsStatus = ["Đang chờ", "Đã sử dụng", "Bỏ qua"];
  const optionsCre = ["Kiosk", "Hệ thống"];
  const data = listData.dataDevice;
  const [dataDevice, setDataDevice] = useState(data);

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
  const [showMore, setShowMore] = useState(false);
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
            <span>{item.reStt}</span>
          </td>
          <td className={classes.td}>
            <span>{item.reName}</span>{" "}
          </td>
          <td className={classes.td}>
            <span>{item.reTime}</span>
          </td>
          <td className={classes.td}>
            <span>
              {" "}
              {item.reTus == "Đang chờ" ? (
                <ServiceActivePoint />
              ) : item.reTus == "Đã sử dụng" ? (
                <ServiceUnactivePoint />
              ) : (
                <ServiceUnactivePoint1 />
              )}
            </span>
          </td>

          <td className={classes.td}>
            <span>{item.reCre}</span>
          </td>
        </tr>
      );
    });
  return (
    <div>
      <section className={classes.table}>
        <table className={classes.bang}>
          <tr>
            <th className={classes.th} style={{ width: "226px" }}>
              <div className={classes.titleth}>
                <Dropdown
                  options={optionsa}
                  value={defaultOption}
                  placeholder="Số thứ tự"
                />
              </div>
            </th>
            <th className={classes.th} style={{ width: "232px" }}>
              <Dropdown
                options={optionsName}
                // onChange={(e) => handleDropdownValue(e)}
                value={defaultOption}
                placeholder="Tên dịch vụ"
              />
            </th>
            <th className={classes.th} style={{ width: "238px" }}>
              <Dropdown
                options={optionsTime}
                // onChange={(e) => handleDropdownValue(e)}
                value={defaultOption}
                placeholder="Thời gian cấp"
              />
            </th>
            <th className={classes.th} style={{ width: "216px" }}>
              <Dropdown
                options={optionsStatus}
                // onChange={(e) => handleDropdownValue(e)}
                value={defaultOption}
                placeholder="Tình trạng"
              />
            </th>
            <th className={classes.th} style={{ width: "196px" }}>
              <Dropdown
                options={optionsCre}
                // onChange={(e) => handleDropdownValue(e)}
                value={defaultOption}
                placeholder="Nguồn cấp"
              />
            </th>
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
export default connect(mapStateToProps, mapDispatchToProps)(ReportList);
