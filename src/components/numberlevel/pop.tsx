import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/NumberlevelModule/addnumber.module.css";

function Popresult({ listData, fetchLists }: any) {
  useEffect(() => {
    fetchLists();
  }, []);
  const data = listData.dataDevice;
  const [dataDevice, setDataDevice] = useState(data);
  return (
    <div className={classes.pop}>
      <div className={classes.on}>
        <div className={classes.onname}>Số thứ tự được cấp</div>
        <div className={classes.onnumber}>2001201</div>
        <div className={classes.onser}>
          DV: Khám răng hàm mặt{" "}
          <div className={classes.onser1}> (tại quầy số 1)</div>
        </div>
      </div>
      <div className={classes.bot}>
        <div className={classes.botitem}>Thời gian cấp: 09:30 11/10/2021</div>
        <div className={classes.botitem}>Hạn sử dụng: 17:30 11/10/2021</div>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Popresult);
