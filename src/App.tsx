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
import Listservice from "./components/service/listservice.js";
import Addservice from "./components/service/addservice";
import Readservice from "./components/service/readservice";
import Updateservice from "./components/service/updateservice";
import NumberlevelList from "./components/numberlevel/numberlevellist";
import Addnumber from "./components/numberlevel/addnumber";
import Readnumber from "./components/numberlevel/reviewnumber";
import Popnotlogin from "./components/numberlevel/popwithoutlogin";
import Roler from "./components/set/roleuser";
import Addroler from "./components/set/addroler";
import Updateroler from "./components/set/updateroler";
import Accountlist from "./components/set/account";
import Addaccount from "./components/set/addaccount";
import Updateaccount from "./components/set/updateaccount";
import Diary from "./components/set/diary";
function App() {
  return (
    // <Provider store={leader}>
    <div>
      <Routes>
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
        <Route path="/service/listservice" element={<Listservice />} />
        <Route path="/service/addservice" element={<Addservice />} />
        <Route path="/service/readservice" element={<Readservice />} />
        <Route path="/service/updateservice" element={<Updateservice />} />
        <Route
          path="/numberlevel/numberlevellist"
          element={<NumberlevelList />}
        />
        <Route path="/numberlevel/addnumber" element={<Addnumber />} />
        <Route path="/numberlevel/reviewnumber" element={<Readnumber />} />
        <Route path="/report" element={<Report />} />
        <Route path="/set/roleuser" element={<Roler />} />
        <Route path="/set/addroler" element={<Addroler />} />
        <Route path="/set/updateroler" element={<Updateroler />} />
        <Route path="/set/account" element={<Accountlist />} />
        <Route path="/set/addaccount" element={<Addaccount />} />
        <Route path="/set/updateaccount" element={<Updateaccount />} />
        <Route path="/set/diary" element={<Diary />} />
      </Routes>
    </div>
    // </Provider>
  );
}

export default App;
