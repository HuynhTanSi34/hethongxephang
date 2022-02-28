import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/diary/diaryActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/Set/diary.module.css";
import chamdo from "../../components/image/chamdo.png";
import chamxanh from "../../components/image/chamxanh.png";
import addsquare from "../../components/image/addsquare.png";
import calendar from "../../components/image/calendar.png";
import down from "../../components/image/down.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";
import loop from "../../components/image/loop.png";
function Diariedd({ listData, fetchLists }: any) {
  useEffect(() => {
    fetchLists();
  }, []);

  const data = listData.dataDevice;
  const [dataDevice, setDataDevice] = useState(data);
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
            <span>{item.diaName}</span>
          </td>
          <td className={classes.td}>
            <span>{item.diaTime}</span>{" "}
          </td>
          <td className={classes.td}>
            <span>{item.diaIp}</span>{" "}
          </td>
          <td className={classes.td}>
            <span>{item.diaTus}</span>{" "}
          </td>
        </tr>
      );
    });
  return (
    <div>
      <div className={classes.title}>Cài đặt hệ thống {">"} </div>
      <div className={classes.title1}>Nhật ký hoạt động</div>
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
            <th className={classes.th} style={{ width: "230px" }}>
              Tên đăng nhập
            </th>
            <th className={classes.th} style={{ width: "240px" }}>
              Thời gian tác động
            </th>
            <th className={classes.th} style={{ width: "220px" }}>
              IP thực hiện
            </th>
            <th className={classes.th} style={{ width: "auto" }}>
              Thao tác thực hiện
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
export default connect(mapStateToProps, mapDispatchToProps)(Diariedd);
