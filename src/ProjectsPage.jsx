import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import TimelineValues from "./TimelineValues";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ProjectsPage() {
  return (
    <>
      {(document.body.style.overflow = "")}
      <Header title="Projects" />
      <div style={{ height: "48vh", marginBottom: "5%" }}>
        <TimeLine />
      </div>
      <Footer />
    </>
  );
}

function TimeLine() {
  let schoolIconStyles = { background: "#F7FF58" };
  let projectIconStyles = { background: "#91785D" };

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="May 2023 - July 2023"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faDiagramProject} />}
      >
        <h3 className="vertical-timeline-element-title">Personal Website</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <a href="https://github.com/StefanDavidov" target="_blank">
            <button className="projectPageButton">
              Github for this Website
            </button>
          </a>
        </h4>
        <p>
          Created this current website leveraging my knowledge of React,
          JavaScript, HTML and CSS.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Current"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faDiagramProject} />}
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ color: "black" }}
        >
          Functional DataBase
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ color: "black" }}
        >
          <button className="projectPageButton2">Coming Soon</button>
        </h4>
        <p style={{ color: "black" }}>
          SQL database which will allow users to query data through an elegent
          GUI
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
