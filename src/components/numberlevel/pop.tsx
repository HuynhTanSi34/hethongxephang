import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import { Link } from "react-router-dom";
import "../UI/style.css";
import classes from "../UI/NumberlevelModule/numberlevellist.module.css";
function Popresult({ listData, fetchLists }: any) {
  useEffect(() => {
    fetchLists();
  }, []);
  const data = listData.dataDevice;
  const [dataDevice, setDataDevice] = useState(data);
  return (
    <div>
      ủtwretwrt
      {/* {listData.lists.map((item: any, index: any) => (
        <div key={index}>
          <div className={classes.title2}>Số thứ tự được cấp</div> */}
      {/* <div className={classes.div}>
            <span>{item.deviceCode}</span>
          </div>
          <div className={classes.div}>
            <span>DV: {item.deviceName}</span>{" "}
          </div>
          <div className={classes.div}>
            <span>{item.deviceName}</span>{" "}
          </div>
          <div className={classes.div}>
            <span>{item.deviceName}</span>{" "}
          </div> */}
      {/* </div> */}
      {/* // ))} */}
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
