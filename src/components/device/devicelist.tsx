import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../redux/decive/deciveActions";
import "../UI/style.css";
import classes from "../UI/DeviceModule/quanli.module.css";
import chamdo from "../../components/image/chamdo.png";
import chamxanh from "../../components/image/chamxanh.png";
function DeciveList({ listData, fetchLists }: any) {
  useEffect(() => {
    setTimeout(() => {
      fetchLists();
    }, 0);
  }, []);
  return (
    <section className={classes.table}>
      <table className={classes.bang}>
        <tr>
          <th className={classes.th} style={{ width: "103px" }}>
            Mã thiết bị
          </th>
          <th className={classes.th} style={{ width: "99px" }}>
            Tên thiết bị
          </th>
          <th className={classes.th} style={{ width: "136px" }}>
            Địa chỉ IP
          </th>
          <th className={classes.th} style={{ width: "174px" }}>
            Trạng thái hoạt động
          </th>
          <th className={classes.th} style={{ width: "145px" }}>
            Trạng thái kết nối
          </th>
          <th className={classes.th} style={{ width: "268px" }}>
            Dịch vụ sử dụng
          </th>
          <th className={classes.th} style={{ width: "82px" }}></th>
          <th className={classes.th} style={{ width: "104px" }}></th>
        </tr>
        {listData.loading ? (
          <p>Loading...</p>
        ) : (
          listData.lists.map((list: any, index: any) => (
            <div>
              <tr key={index}>
                <td className={classes.td}>{list.deviceCode}</td>
                <td className={classes.td}>{list.deviceName} </td>
                <td className={classes.td}>{list.iP}</td>
                <td className={classes.td}>
                  <img src={chamdo} className={classes.chamdo} />
                  {list.activeStatus}
                </td>
                <td className={classes.td}>
                  <img src={chamdo} className={classes.chamdo} />
                  {list.connecting}
                </td>
                <td className={classes.td}>
                  <div>Khám tim mạch, Khám mắt...</div>
                  <div className={classes.duongdan}>Xem thêm</div>
                </td>
                <td className={`${classes.td} ${classes.duongdan}`}>
                  Chi tiết{" "}
                </td>
                <td className={`${classes.td} ${classes.duongdan}`}>
                  Cập nhật
                </td>
              </tr>
              {/* <tr key={index}>
                <td className={classes.tdchan}>{list.deviceCode}</td>
                <td className={classes.tdchan}>{list.deviceName}</td>
                <td className={classes.tdchan}>{list.iP}</td>
                <td className={classes.tdchan}>
                  <img src={chamxanh} className={classes.chamxanh} />
                  {list.activeStatus}
                </td>
                <td className={classes.tdchan}>
                  <img src={chamxanh} className={classes.chamxanh} />
                  {list.connecting}
                </td>
                <td className={classes.tdchan}>
                  <div>Khám tim mạch, Khám mắt...</div>
                  <div className={classes.duongdan}>Xem thêm</div>
                </td>
                <td className={`${classes.duongdan} ${classes.tdchan}`}>
                  Chi tiết{" "}
                </td>
                <td className={`${classes.duongdan} ${classes.tdchan}`}>
                  Cập nhật
                </td>
              </tr> */}
            </div>
          ))
        )}
        {/* <tr>
          <td className={classes.td}>KIO_01</td>
          <td className={classes.td}> Kiosk</td>
          <td className={classes.td}>192.168.1.10</td>
          <td className={classes.td}>
            <img src={chamxanh} className={classes.chamxanh} />
            Hoạt động
          </td>
          <td className={classes.td}>
            <img src={chamdo} className={classes.chamdo} />
            Mất kết nối
          </td>
          <td className={classes.td}>
            <div>Khám tim mạch, Khám mắt...</div>
            <div className={classes.duongdan}>Xem thêm</div>
          </td>
          <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
          <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
        </tr>
        <tr>
          <td className={classes.tdchan}>KIO_01</td>
          <td className={classes.tdchan}> Kiosk</td>
          <td className={classes.tdchan}>192.168.1.10</td>
          <td className={classes.tdchan}>
            <img src={chamdo} className={classes.chamdo} />
            Ngưng hoạt động
          </td>
          <td className={classes.tdchan}>
            <img src={chamxanh} className={classes.chamxanh} />
            Kết nối
          </td>
          <td className={classes.tdchan}>
            <div>Khám tim mạch, Khám mắt...</div>
            <div className={classes.duongdan}>Xem thêm</div>
          </td>
          <td className={`${classes.duongdan} ${classes.tdchan}`}>Chi tiết </td>
          <td className={`${classes.duongdan} ${classes.tdchan}`}>Cập nhật</td>
        </tr>
        <tr>
          <td className={classes.td}>KIO_01</td>
          <td className={classes.td}> Kiosk</td>
          <td className={classes.td}>192.168.1.10</td>
          <td className={classes.td}>
            <img src={chamxanh} className={classes.chamxanh} />
            Hoạt động
          </td>
          <td className={classes.td}>
            <img src={chamdo} className={classes.chamdo} />
            Mất kết nối
          </td>
          <td className={classes.td}>
            <div>Khám tim mạch, Khám mắt...</div>
            <div className={classes.duongdan}>Xem thêm</div>
          </td>
          <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
          <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
        </tr>
        <tr>
          <td className={classes.tdchan}>KIO_01</td>
          <td className={classes.tdchan}> Kiosk</td>
          <td className={classes.tdchan}>192.168.1.10</td>
          <td className={classes.tdchan}>
            <img src={chamxanh} className={classes.chamxanh} />
            Hoạt động
          </td>
          <td className={classes.tdchan}>
            <img src={chamxanh} className={classes.chamxanh} />
            Kết nối
          </td>
          <td className={classes.tdchan}>
            <div>Khám tim mạch, Khám mắt...</div>
            <div className={classes.duongdan}>Xem thêm</div>
          </td>
          <td className={`${classes.duongdan} ${classes.tdchan}`}>Chi tiết </td>
          <td className={`${classes.duongdan} ${classes.tdchan}`}>Cập nhật</td>
        </tr>
        <tr>
          <td className={classes.td}>KIO_01</td>
          <td className={classes.td}> Kiosk</td>
          <td className={classes.td}>192.168.1.10</td>
          <td className={classes.td}>
            <img src={chamdo} className={classes.chamdo} />
            Ngưng hoạt động
          </td>
          <td className={classes.td}>
            <img src={chamxanh} className={classes.chamxanh} />
            Kết nối
          </td>
          <td className={classes.td}>
            <div>Khám tim mạch, Khám mắt...</div>
            <div className={classes.duongdan}>Xem thêm</div>
          </td>
          <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
          <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
        </tr>
        <tr>
          <td className={classes.tdchan}>KIO_01</td>
          <td className={classes.tdchan}> Kiosk</td>
          <td className={classes.tdchan}>192.168.1.10</td>
          <td className={classes.tdchan}>
            <img src={chamxanh} className={classes.chamxanh} />
            Hoạt động
          </td>
          <td className={classes.tdchan}>
            <img src={chamxanh} className={classes.chamxanh} />
            Kết nối
          </td>
          <td className={classes.tdchan}>
            <div>Khám tim mạch, Khám mắt...</div>
            <div className={classes.duongdan}>Xem thêm</div>
          </td>
          <td className={`${classes.duongdan} ${classes.tdchan}`}>Chi tiết </td>
          <td className={`${classes.duongdan} ${classes.tdchan}`}>Cập nhật</td>
        </tr>
        <tr>
          <td className={classes.td}>KIO_01</td>
          <td className={classes.td}> Kiosk</td>
          <td className={classes.td}>192.168.1.10</td>
          <td className={classes.td}>
            <img src={chamxanh} className={classes.chamxanh} />
            Hoạt động
          </td>
          <td className={classes.td}>
            <img src={chamdo} className={classes.chamdo} />
            Mất kết nối
          </td>
          <td className={classes.td}>
            <div>Khám tim mạch, Khám mắt...</div>
            <div className={classes.duongdan}>Xem thêm</div>
          </td>
          <td className={`${classes.td} ${classes.duongdan}`}>Chi tiết </td>
          <td className={`${classes.td} ${classes.duongdan}`}>Cập nhật</td>
        </tr> */}
      </table>
    </section>
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
export default connect(mapStateToProps, mapDispatchToProps)(DeciveList);
