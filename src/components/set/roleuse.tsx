import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/role/roleActions";
import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/Set/roler.module.css";
import addsquare from "../../components/image/addsquare.png";
import loop from "../../components/image/loop.png";
function Roleuse({ listData, fetchLists }: any) {
  useEffect(() => {
    fetchLists();
  }, []);
  const data = listData.dataDevice;
  const [dataDevice, setDataDevice] = useState(data);

  const [search, setSearch] = useState("");
  return (
    <div>
      <div className={classes.title}>Cài đặt hệ thống {">"} </div>
      <div className={classes.title1}>Quản lý vai trò</div>
      <div className={classes.title2}>Danh sách vai trò</div>
      <Link to="/set/addroler">
        <div className={classes.addnewdevice}>
          <img src={addsquare} />
          <div className={classes.addnewdevicecontent}>Thêm vai trò</div>
        </div>
      </Link>

      <div className={classes.tukhoa}>
        <div className={classes.trangthaihoatdongname}>Từ khóa</div>
        <input
          placeholder="Nhập từ khóa"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={classes.trangthaihoatdongselec}
        />
        <img src={loop} className={classes.search} />
      </div>
      <section className={classes.table}>
        <table className={classes.bang}>
          <tr>
            <th className={classes.th} style={{ width: "224px" }}>
              Tên vai trò
            </th>
            <th className={classes.th} style={{ width: "224px" }}>
              Số người dùng
            </th>
            <th className={classes.th} style={{ width: "auto" }}>
              Mô tả
            </th>
            <th className={classes.th} style={{ width: "125px" }}></th>
          </tr>
          {listData.lists.map((item: any, index: any) => (
            <tr key={index}>
              <td className={classes.td}>
                <span>{item.roName}</span>
              </td>
              <td className={classes.td}>
                <span>{item.roNum}</span>{" "}
              </td>
              <td className={classes.td}>
                <span>{item.roStatus}</span>
              </td>
              <Link to="/set/updateroler" className={classes.Link}>
                <td className={`${classes.td} ${classes.duongdan}`}>
                  Cập nhật
                </td>
              </Link>
            </tr>
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
export default connect(mapStateToProps, mapDispatchToProps)(Roleuse);
