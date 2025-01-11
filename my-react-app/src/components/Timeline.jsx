import work from "../assets/work-svgrepo-com.svg";
import school from "../assets/graduate-cap-svgrepo-com.svg";

import timelineElements from "./timeline";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  let workIconStyles = {
    background: "#06D6A0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  let schoolIconStyles = {
    background: "#f9c74f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div className="mt-[200px]">
        <h1 className="text-5xl text-[#2D8F89] justify-center flex my-[40px] mt-[100px] dark:text-blue-500 underline font-bold">
          Timeline
        </h1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                contentStyle={{ background: "#1F2937", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #1F2937",
                }}
                icon={
                  <img
                    src={isWorkIcon ? work : school}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center"
                    alt={isWorkIcon ? "Work Icon" : "School Icon"}
                  />
                }
              >
                <h3 className="text-3xl pb-4 text-[#C890A7] dark:text-blue-500">
                  {element.title}
                </h3>
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
