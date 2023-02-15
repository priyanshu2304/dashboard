import { Outlet, Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import calendar from "../assets/icons/calendar.svg";
import overview from "../assets/icons/overview.svg";
import schedule from "../assets/icons/schedule.svg";
import chart from "../assets/icons/chart.svg";
import setting from "../assets/icons/setting.svg";

const items = [
  { id: 1, name: "Overview", image: overview, url: "/" },
  { id: 2, name: "Schedule", image: calendar, url: "/schedule" },
  { id: 3, name: "Courses", image: schedule, url: "/calender" },
  { id: 4, name: "Statistic", image: chart, url: "/calender" },
  { id: 5, name: "Settings", image: setting, url: "/calender" },
];

const Layout = () => {
  return (
    <>
      <div className="pm-layout__container">
        <div>
          <img src={logo} className="pm-image__logo" />
          <div className="pm-menu-secion">
            {items.map((item) => (
              <Link to={item.url} key={item.id}>
                <div className="pm-menu__container">
                  <img src={item.image} />
                  <div className="pm-menu-section__title ml-22">
                    {item.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
