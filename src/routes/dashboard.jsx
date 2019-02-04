// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard", //자판기매출 = dashboard
    sidebarName: "매출현황",
    navbarName: "매출현황",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/table",
    sidebarName: "자판기 리스트",
    navbarName: "자판기 리스트(구현중)",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/icons",
    sidebarName: "원격 제어",
    navbarName: "원격 제어(구현중)",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/maps",
    sidebarName: "기기 위치",
    navbarName: "기기 위치(구현중)",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/user",
    sidebarName: "관리자 정보",
    navbarName: "관리자 정보(구현중)",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/notifications",
    sidebarName: "참조 도구",
    navbarName: "참조 도구",
    icon: Notifications,
    component: NotificationsPage
  },
  /*{
    path: "/typography",
    sidebarName: "참조 도구1",
    navbarName: "참조 도구1",
    icon: LibraryBooks,
    component: Typography
  },  
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro
  },*/
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
