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
import Bell from "./components/login/bell";
function App() {
  return (
    <div>
      {/* <Bell /> */}
      <Routes>
        <Route path={"/" || ""} element={<Login />} />
        <Route path="/login/forgotpass" element={<Forgot />} />
        <Route path="/login/newpass" element={<Newpass />} />
        <Route path="/login/profile" element={<Profile />} />
        <Route path="/dashboard/day" element={<Day />} />
        <Route path="/dashboard/week" element={<Week />} />
        <Route path="/dashboard/month" element={<Month />} />
        <Route path="/device/quanli" element={<Quanli />} />
      </Routes>
    </div>
  );
}

export default App;
