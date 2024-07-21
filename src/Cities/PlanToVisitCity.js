import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

function PlanToVisitCity(props) {
  const { selectedCityData } = props;

  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {selectedCityData &&
        selectedCityData.length > 0 &&
        selectedCityData.map((city) => {
          return (
            <>
              <h2>{city.day}</h2>
              {city.activities.map((activity) => (
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    {activity.time}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{activity.plan}</TimelineContent>
                </TimelineItem>
              ))}
            </>
          );
        })}
    </Timeline>
  );
}

export default PlanToVisitCity;
