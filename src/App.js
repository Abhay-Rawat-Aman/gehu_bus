import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Home/Main";
import AdminLogin from "./components/Admin/AdminLogin";
import StudentLogin from "./components/Student/StudentLogin";
import ConductorLogin from "./components/Conductor/ConductorLogin";
import CoordinatorLogin from "./components/Coordinator/CoordinatorLogin";
import StudentSignUp from "./components/Student/StudentSignUp";
import ContactUs from "./components/Home/ContactUs";
import Team from "./components/Home/Team";
import Price from "./components/Home/Price";
import ConductorApply from "./components/Conductor/ConductorApply";
import DriverApply from "./components/Home/DriverApply";
import StudentHome from "./components/Student/StudentHome";
import ConductorHome from "./components/Conductor/ConductorHome";
import RandT from "./components/Student/RandT";
import StudentPrice from "./components/Student/StudentPrice";
import Morning from "./components/Student/Morning";
import StudentLogout from "./components/Student/StudentLogout";
import ChooseBus from "./components/Student/ChooseBus";
import CamplaintStudent from "./components/Student/CamplaintStudent";
import ChangePasswordStudent from "./components/Student/ChangePasswordStudent";
import StudentNotice from "./components/Student/StudentNotice";
import EditDetailStudent from "./components/Student/EditDetailStudent";
import AdminHome from "./components/Admin/AdminHome";
import BusDetail from "./components/Conductor/BusDetail";
import ConductorLogout from "./components/Conductor/ConductorLogout";


function App() {
  return (
    <>
    <Router>

      {/* Main Home Page */}
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/admin_login">
          <AdminLogin/>
        </Route>
        <Route exact path="/student_login">
          <StudentLogin/>
        </Route>
        <Route exact path="/conductor_login">
          <ConductorLogin/>
        </Route>
        <Route exact path="/coordinator_login">
          <CoordinatorLogin/>
        </Route>
        <Route exact path="/student_signup">
          <StudentSignUp/>
        </Route>
        <Route exact path="/conductor_apply">
          <ConductorApply/>
        </Route>
        <Route exact path="/contact_us">
          <ContactUs/>
        </Route>
        <Route exact path="/our_team">
          <Team/>
        </Route>
        <Route exact path="/price">
          <Price/>
        </Route>
        <Route exact path="/driver_apply">
          <DriverApply/>


        {/*Student Panel*/}
        </Route>
        <Route exact path='/student_home'>
          <StudentHome/>
        </Route>
        <Route exact path='/r_and_t'>
          <RandT/>
        </Route>
        <Route exact path='/student_price'>
          <StudentPrice/>
        </Route>
        <Route exact path="/student_morning">
          <Morning/>
        </Route>
        <Route exact path="/choose_bus">
          <ChooseBus/>
        </Route>
        <Route exact path="/student_camplaint">
          <CamplaintStudent/>
        </Route>
        <Route exact path="/student_change_password">
          <ChangePasswordStudent/>
        </Route>
        <Route exact path="/student_notice">
          <StudentNotice/>
        </Route>
        <Route exact path="/student_edit_details">
          <EditDetailStudent/>
        </Route>
        <Route exact path="/student_logout">
          <StudentLogout/>
        </Route>

        {/* Admin Panel */}        
        <Route exact path="/admin/home">
            <AdminHome/>
        </Route>
        
        {/*Conductor Panel */}
        <Route exact path='/conductor/home'>
          <ConductorHome/>
        </Route>
        <Route exact path='/conductor/busdetails'>
          <BusDetail/>
        </Route>
        <Route exact path='/conductor/logout'>
          <ConductorLogout/>
        </Route>
{/*         
        <Route exact path="/*">
          <ChangePasswordStudent/>
        </Route> */
}
      </Switch>
    </Router>
    </>
  );
}

export default App;
