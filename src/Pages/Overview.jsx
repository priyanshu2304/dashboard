import "./common.css";
import leaf from "../assets/images/leaf.svg";
import smallLeaf from "../assets/images/smallLeaf.svg";
import self from "../assets/images/self.jpeg";

const items = [
  {
    id: 1,
    logo: "",
    name: "Basics of Mobile UX",
    subHeading: "Priyanshu Modi",
    start: "Feb 12",
    rate: "4.8",
    type: "UI Design",
  },
  {
    id: 1,
    logo: "",
    name: "Digital Design System",
    subHeading: "Priyanshu Modi",
    start: "Feb 12",
    rate: "4.6",
    type: "UI Design",
  },
  {
    id: 1,
    logo: "",
    name: "Digital Design System",
    subHeading: "Priyanshu Modi",
    start: "Feb 12",
    rate: "4.6",
    type: "UI Design",
  },
  {
    id: 1,
    logo: "",
    name: "Digital Design System",
    subHeading: "Priyanshu Modi",
    start: "Feb 12",
    rate: "4.8",
    type: "UI Design",
  },
];

const Overview = () => {
  return (
    <div className="pm-overview__container">
      <div className="pm-overview__container-first">
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
              <div className="pm-first-container__heading">
                9.6 AVERAGE SCORE
              </div>
              <div className="pm-first-container__sub-heading">
                Better than 86% of students
              </div>
            </div>
            <div className="pm-progress-container_second">
              Software Engineer
            </div>
          </div>
          <div className="pm-overview__featured-courses-container">
            <div className="pm-overview__featured-courses">
              Featured Courses
            </div>
            <div className="pm-overview__featured-courses-view-all">
              View all
            </div>
          </div>
          <div className="table-container">
            <div className="table-heading">Course name</div>
            <div className="table-heading">Start</div>
            <div className="table-heading">Rate</div>
            <div className="table-heading">Type</div>
            {/* <div className="table-heading">Save</div> */}
          </div>
          {items.map((item) => {
            return (
              <div className="table-container">
                <div className="table-content-title">
                  {item.name}
                  <div className="table-content-subHeading">
                    {item.subHeading}
                  </div>
                </div>
                <div className="table-content-date">{item.start}</div>
                <div className="table-content-rate">{item.rate}</div>
                <div className="table-content-type">{item.type}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pm-bio__container">
        <img className="pm-self-img" src={self} />
        <div className="pm-self-name">Priyanshu Modi</div>
        <div className="pm-self-designation">Front End Developer</div>
        <div className="line-seprator"></div>
      </div>
    </div>
  );
};

export default Overview;
