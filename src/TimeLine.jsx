import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import TimelineValues from "./TimelineValues";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

{
  /*
<FontAwesomeIcon icon={faSchool}/>
<FontAwesomeIcon icon={faDiagramProject}/>
*/
}

export default function TimeLine() {
  let schoolIconStyles = { background: "#F7FF58" };
  let projectIconStyles = { background: "#91785D" };

  return (
    <div className="timeline">
      <VerticalTimeline layout={"1-column-right"}>
        {TimelineValues.map((element) => {
          let isSchoolIcon = element.icon === "school";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              contentStyle={{ background: "#EFECCA", color: "#000" }}
              contentArrowStyle={{ borderLeft: "7px solid  #EFECCA" }}
              className="elementColor"
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isSchoolIcon ? schoolIconStyles : projectIconStyles}
              icon={
                isSchoolIcon ? (
                  <FontAwesomeIcon icon={faSchool} />
                ) : (
                  <FontAwesomeIcon icon={faDiagramProject} />
                )
              }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isSchoolIcon ? "schoolButton" : "projectButton"
                  }`
                } 
                href={element.buttonLink}
                target="_blank"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
