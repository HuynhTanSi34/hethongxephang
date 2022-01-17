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
function Chartmonth() {
  const data = [
    {
      name: "1",
      "Số lượng": 2600,
    },
    {
      name: "2",
      "Số lượng": 4000,
    },
    {
      name: "3",
      "Số lượng": 4400,
    },

    {
      name: "4",
      "Số lượng": 3850,
    },
    {
      name: "5",
      "Số lượng": 3450,
    },
    {
      name: "6",
      "Số lượng": 3850,
    },
    {
      name: "7",
      "Số lượng": 3450,
    },

    {
      name: "8",
      "Số lượng": 4100,
    },
    {
      name: "9",
      "Số lượng": 3950,
    },
    {
      name: "10",
      "Số lượng": 4000,
    },
    {
      name: "11",
      "Số lượng": 4221,
    },

    {
      name: "12",
      "Số lượng": 3950,
    },
  ];
  return (
    <section className="board">
      <div className="titleBoard">Bảng thống kê theo tháng</div>
      <div className="timeBoard">Tháng 11/2021</div>
      <div className="selecBoard">Xem theo</div>
      <div className="selecTimeboard al">
        <div className="dayBoard">Tháng</div>
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
export default Chartmonth;
