import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/Set/addroler.module.css";
function Updateroleuse({ listData, fetchLists }: any) {
  useEffect(() => {
    fetchLists();
  }, []);
  const data = listData.dataDevice;
  const [dataDevice, setDataDevice] = useState(data);

  const [search, setSearch] = useState("");
  return (
    <div>
      <div className={classes.title}>Cài đặt hệ thống {">"} </div>
      <div className={classes.title1}>Quản lý vai trò {">"}</div>
      <div className={classes.title12}>Cập nhật vai trò</div>
      <div className={classes.title2}>Danh sách vai trò</div>
      <section className={classes.text}>
        <form>
          <div className={classes.textname}>Thông tin vai trò</div>
          <div className={classes.textItem}>
            Tên vai trò <div style={{ color: "red" }}>*</div>
          </div>
          <input
            type="text"
            placeholder="Nhập tên vai trò"
            className={classes.input1}
          />
          <div className={classes.textItem}>Mô tả</div>
          <input
            placeholder="Nhập mô tả"
            type="text"
            className={classes.input2}
          />
          <div className={classes.chuy}>
            <div style={{ color: "red" }}>*</div> Là trường thông tin bắt buộc
          </div>
          <div className={classes.textItem1}>
            Phân quyền chức năng <div style={{ color: "red" }}>*</div>
          </div>
          <div className={classes.checkblood}>
            <div className={classes.checkbloodItem}>
              <div className={classes.checkbloodItemName}>Nhóm chức năng A</div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Tất cả</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng X</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Y</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Z</label>
              </div>
            </div>
            <div className={classes.checkbloodItem}>
              <div className={classes.checkbloodItemName}>Nhóm chức năng B</div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Tất cả</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng X</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Y</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Z</label>
              </div>
            </div>
            <div className={classes.checkbloodItem}>
              <div className={classes.checkbloodItemName}>Nhóm chức năng C</div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Tất cả</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng X</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Y</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Z</label>
              </div>
            </div>
            <div className={classes.checkbloodItem}>
              <div className={classes.checkbloodItemName}>Nhóm chức năng D</div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Tất cả</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng X</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Y</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Z</label>
              </div>
            </div>
            <div className={classes.checkbloodItem}>
              <div className={classes.checkbloodItemName}>Nhóm chức năng E</div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Tất cả</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng X</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Y</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Z</label>
              </div>
            </div>
            <div className={classes.checkbloodItem}>
              <div className={classes.checkbloodItemName}>Nhóm chức năng F</div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Tất cả</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng X</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Y</label>
              </div>
              <div className={classes.checkbloodIteminput}>
                <input type="checkbox" className={classes.checkbox} />
                <label className={classes.labelname}>Chức năng Z</label>
              </div>
            </div>
          </div>
          <div className={classes.nutsubmit}>
            <Link to="/set/roleuser">
              <input
                type="submit"
                value="Hủy bỏ"
                className={classes.nutsubmitcancel}
              />
            </Link>
            <Link to="/set/roleuser">
              <input
                type="submit"
                value="Cập nhật"
                className={classes.nutsubmitadd}
              />
            </Link>
          </div>
        </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Updateroleuse);
