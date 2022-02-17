import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "../UI/style.css";
import classes from "../UI/ServiceModule/readservice.module.css";
import chamdo from "../../components/image/chamdo.png";
import chamxanh from "../../components/image/chamxanh.png";
import addsquare from "../../components/image/addsquare.png";
import backsquare from "../../components/image/backsquare.png";
import calendar from "../../components/image/calendar.png";
import down from "../../components/image/down.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";
import search from "../../components/image/search.png";
function ReadServiceList({ listData, fetchLists }: any) {
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
  const options = ["Tất cả", "Đã hoàn thành", "Đã thực hiện", "Vắng"];
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
      <Link to="/service/updateservice">
        <div className={classes.addnewservice}>
          <img src={addsquare} />
          <div className={classes.addnewservicecontent}>Cập nhật danh sách</div>
        </div>
      </Link>
      <Link to="/service/listservice">
        <div className={classes.backservice}>
          <img src={backsquare} />
          <div className={classes.backservicecontent}>Quay lại</div>
        </div>
      </Link>
      <section className={classes.dicved}>
        <div className={classes.leftdic}>
          <div className={classes.inforservicename}>Thông tin dịch vụ</div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Mã dịch vụ:</div>
            <div className={classes.inserco}>201</div>
          </div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Tên dịch vụ:</div>
            <div className={classes.inserco}>Khám tim mạch</div>
          </div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Mô tả:</div>
            <div className={classes.inserco}>Chuyên các bệnh lý về tim</div>
          </div>
          <div className={classes.inforservicename}>Quy tắc cấp số</div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Tăng tự động: </div>
            <input
              type="text"
              className={classes.inputtext}
              placeholder="0001"
            />
            <div className={classes.inser1}>đến</div>
            <input
              type="text"
              className={classes.inputtext}
              placeholder="9999"
            />
          </div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser2}>Prefix: </div>
            <input
              type="text"
              className={classes.inputtext1}
              placeholder="0001"
            />
          </div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Reset mỗi ngày </div>
          </div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser3}>Ví dụ: 201-2001 </div>
          </div>
        </div>
        <div className={classes.rightdic}>
          <div className={classes.trangthaihoatdong}>
            <div className={classes.trangthaihoatdongname}>Trạng thái</div>
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
            <div className={classes.spaced}>{">"} </div>
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
            <div className={classes.tukhoaname}>Từ khóa</div>
            <input
              placeholder="Nhập từ khóa"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={classes.tukhoaselec}
            />
            <img src={search} className={classes.search} />
          </div>
          <section className={classes.table}>
            <table className={classes.bang}>
              <tr>
                <th className={classes.th} style={{ width: "316px" }}>
                  Số thứ tự
                </th>

                <th className={classes.th} style={{ width: "316px" }}>
                  Trạng thái
                </th>
              </tr>
              {listData.lists.map((item: any, index: any) => (
                <tr key={index}>
                  <td className={classes.td}>
                    <span>{item.deviceCode}</span>
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
export default connect(mapStateToProps, mapDispatchToProps)(ReadServiceList);
