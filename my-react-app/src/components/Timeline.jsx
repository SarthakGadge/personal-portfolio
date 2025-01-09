import work from "../assets/work-svgrepo-com.svg";
import school from "../assets/graduate-cap-svgrepo-com.svg";

import timelineElements from "./timeline";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <>
      <div>
        <h1 className="text-5xl text-[#540d6e] justify-center flex my-[40px] mt-[100px]">Timeline</h1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={
                  isWorkIcon ? (
                    <img src={work} className="w-8 h-8 flex justify-center items-center ml-[13.5px] mt-[14px]" />
                  ) : (
                    <img src={school} className="w-8 h-8 flex justify-center items-center ml-[13.5px] mt-[14px]" />
                  )
                }
              >
                <h3 className="text-3xl pb-4 text-red-600">{element.title}</h3>
                <h5 className="text-sm italic">{element.location}</h5>
                <p>{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Timeline;
