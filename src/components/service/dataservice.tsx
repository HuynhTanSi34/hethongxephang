import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/service/serviceAction";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
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
import loop from "../../components/image/loop.png";
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
            <span>{item.serCode}</span>
          </td>
          <td className={classes.td}>
            <span>{item.serName}</span>{" "}
          </td>
          <td className={classes.td}>
            <span>{item.serDes}</span>
          </td>
          <td className={classes.td}>
            <span>
              {" "}
              {item.serStatus == "Hoạt động" ? (
                <ServiceActivePoint />
              ) : (
                <ServiceUnactivePoint />
              )}
            </span>
          </td>

          <td className={`${classes.td} ${classes.duongdan}`}>
            <Link to="/service/readservice">Chi tiết</Link>{" "}
          </td>
          <td className={`${classes.td} ${classes.duongdan}`}>
            <Link to="/service/updateservice">Cập nhật </Link>
          </td>
        </tr>
      );
    });
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
        <div className={classes.trangthaihoatdongname}>Từ khóa</div>
        <input
          placeholder="Nhập từ khóa"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={classes.trangthaihoatdongselec1}
        />
        <img src={loop} className={classes.search} />
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
export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);
