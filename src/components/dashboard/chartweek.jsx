import { Link } from "react-router-dom";
import classes from "../UI/DashboardModule/chart.module.css";
import down from "../../components/image/down.png";
import slngay from "../../components/image/slngay.png";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
function Chartweek() {
  const data = [
    {
      name: "Tuần 1",
      "Số lượng": 2600,
    },
    {
      name: "Tuần 2",
      "Số lượng": 3300,
    },
    {
      name: "Tuần 3",
      "Số lượng": 4221,
    },

    {
      name: "Tuần 4",
      "Số lượng": 3650,
    },
  ];
  return (
    <section className={classes.board}>
      <div className={classes.titleBoard}>Bảng thống kê theo ngày</div>
      <div className={classes.timeBoard}>Tháng 11/2021</div>
      <div className={classes.selecBoard}>Xem theo</div>
      <div className={`${classes.selecTimeboard} ${classes.al}`}>
        <div className={classes.dayBoard}>Tuần</div>
        <img src={down} className={classes.imgdayBoard} />
        <div className={`${classes.selecDifferent} ${classes.bl}`}>
          <Link to="/dashboard/day" className="Link">
            <div className={classes.selecDifferentItem}>Ngày</div>
          </Link>
          <Link to="/dashboard/week" className="Link">
            <div className={classes.selecDifferentItem}>Tuần</div>
          </Link>
          <Link to="/dashboard/month" className="Link">
            <div className={classes.selecDifferentItem}>Tháng</div>
          </Link>
        </div>
      </div>
      <ResponsiveContainer className={classes.respon} aspect={7 / 2.5}>
        <AreaChart data={data} syncId="anyId">
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Số lượng"
            stroke="blue"
            fill="#00BFFF"
          />
        </AreaChart>
      </ResponsiveContainer>
      <img src={slngay} className={classes.slngay} />
    </section>
  );
}
export default Chartweek;
