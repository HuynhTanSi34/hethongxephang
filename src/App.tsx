import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Errpass from "./components/login/errpass";
import Forgot from "./components/login/forgotpass";
import Newpass from "./components/login/newpass";
import Profile from "./components/login/profile";
import Day from "./components/dashboard/day";
import Week from "./components/dashboard/week";
import Month from "./components/dashboard/month";
import Quanli from "./components/device/Quanli";
import Adddevice from "./components/device/adddevice";
import Readdevice from "./components/device/readdevice";
import Editdevice from "./components/device/editdevice";
import Report from "./components/report/report";
import Stt from "./components/report/stt";
function App() {
  return (
    <div>
      <Report />
      {/* <Routes>
        <Route path={"/" || ""} element={<Login />} />
        <Route path="/login/forgotpass" element={<Forgot />} />
        <Route path="/login/newpass" element={<Newpass />} />
        <Route path="/login/profile" element={<Profile />} />
        <Route path="/dashboard/day" element={<Day />} />
        <Route path="/dashboard/week" element={<Week />} />
        <Route path="/dashboard/month" element={<Month />} />
        <Route path="/device/quanli" element={<Quanli />} />
        <Route path="/device/adddevice" element={<Adddevice />} />
        <Route path="/device/readdevice" element={<Readdevice />} />
        <Route path="/device/editdevice" element={<Editdevice />} />
        <Route path="/report" element={<Report />} />
      </Routes> */}
    </div>
  );
}

export default App;
