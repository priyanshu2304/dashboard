import "./common.css";
import leaf from "../assets/images/leaf.svg";
import smallLeaf from "../assets/images/smallLeaf.svg";
const Overview = () => {
  console.log("hello");
  return (
    <div className="pm-overview__container">
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
      <div className="pm-overview__featured-courses">Featured Courses</div>
    </div>
  );
};

export default Overview;
