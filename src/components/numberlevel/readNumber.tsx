import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/NumberlevelModule/readnumber.module.css";
import chamdo from "../../components/image/chamdo.png";
import chamxanh from "../../components/image/chamxanh.png";
import backsquare from "../../components/image/backsquare.png";
function Readnumberlist({ listData, fetchLists }: any) {
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
      <Link to="/numberlevel/numberlevellist">
        <div className={classes.backservice}>
          <img src={backsquare} />
          <div className={classes.backservicecontent}>Quay lại</div>
        </div>
      </Link>
      <section className={classes.dicved}>
        <div className={classes.inforservicename}>Thông tin cấp số</div>
        <div className={classes.leftdic}>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Họ và tên:</div>
            <div className={classes.inserco}>Nguyễn Thị Dung</div>
          </div>

          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Tên dịch vụ:</div>
            <div className={classes.inserco}>Khám tim mạch</div>
          </div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Số thứ tự:</div>
            <div className={classes.inserco}>2001201</div>
          </div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Thời gian cấp:</div>
            <div className={classes.inserco}>14:35 - 07/11/2021</div>
          </div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Hạn sử dụng:</div>
            <div className={classes.inserco}>18:00 - 07/11/2021</div>
          </div>
        </div>
        <div className={classes.rightdic}>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Nguồn cấp:</div>
            <div className={classes.inserco}>kiosk</div>
          </div>

          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Trạng thái:</div>
            <div className={classes.inserco}>Đang chờ</div>
          </div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Số điện thoại:</div>
            <div className={classes.inserco}>0948523623</div>
          </div>
          <div className={classes.inforservicenameItem}>
            <div className={classes.inser}>Địa chỉ email:</div>
            <div className={classes.inserco}>nguyendung@gmail.com</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Readnumberlist);
