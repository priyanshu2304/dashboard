import "./common.css";
import leaf from "../assets/images/leaf.svg";
import smallLeaf from "../assets/images/smallLeaf.svg";

const items = [
  { id: 1, name: "Overview", image: overview, url: "/" },
  { id: 2, name: "Schedule", image: calendar, url: "/schedule" },
  { id: 3, name: "Courses", image: schedule, url: "/calender" },
  { id: 4, name: "Statistic", image: chart, url: "/calender" },
  { id: 5, name: "Settings", image: setting, url: "/calender" },
];

const Overview = () => {
  return (
    <div className="pm-overview__container">
      <div>
        <div className="pm-overview__heading">Overview</div>
        <div className="pm-overview__sub-heading">Welcome back Priyanshu</div>
        <div className="pm-overview__progress-container">
          <div className="pm-progress-container_first">
            <div className="pm-progress-container_first-image">
              <img src={leaf} />
            </div>
            <div className="pm-progress-container_first-image-leaf">
              <img src={smallLeaf} />
            </div>
            <div className="pm-first-container__heading">9.6 AVERAGE SCORE</div>
            <div className="pm-first-container__sub-heading">
              Better than 86% of students
            </div>
          </div>
          <div className="pm-progress-container_second">hi</div>
        </div>
        <div className="pm-overview__featured-courses-container">
          <div className="pm-overview__featured-courses">Featured Courses</div>
          <div className="pm-overview__featured-courses-view-all">View all</div>
        </div>
        <div className="table-container">
          <div className="table-heading">Course name</div>
          <div className="table-heading">Start</div>
          <div className="table-heading">Rate</div>
          <div className="table-heading">Type</div>
          <div className="table-heading">Save</div>
        </div>
      </div>
      <div>hey</div>
    </div>
  );
};

export default Overview;
