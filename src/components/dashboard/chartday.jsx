import { Link } from "react-router-dom";
import "../UI/dashboard.css";
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
function Chartday() {
  const data = [
    {
      name: "01",
      "Số lượng": 2600,
    },
    {
      name: "13",
      "Số lượng": 3500,
    },
    {
      name: "19",
      "Số lượng": 4221,
    },

    {
      name: "31",
      "Số lượng": 3650,
    },
  ];
  return (
    <section className="board">
      <div className="titleBoard">Bảng thống kê theo ngày</div>
      <div className="timeBoard">Tháng 11/2021</div>
      <div className="selecBoard">Xem theo</div>
      <div className="selecTimeboard al">
        <div className="dayBoard">Ngày</div>
        <img src={down} className="imgdayBoard" />
        <div className="selecDifferent bl">
          <Link to="/dashboard/day" className="dropdown">
            <div className="selecDifferentItem">Ngày</div>
          </Link>
          <Link to="/dashboard/week" className="dropdown">
            <div className="selecDifferentItem">Tuần</div>
          </Link>
          <Link to="/dashboard/month" className="dropdown">
            <div className="selecDifferentItem">Tháng</div>
          </Link>
        </div>
      </div>
      <ResponsiveContainer className="respon" aspect={7 / 2.5}>
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
      <img src={slngay} className="slngay" />
    </section>
  );
}
export default Chartday;
