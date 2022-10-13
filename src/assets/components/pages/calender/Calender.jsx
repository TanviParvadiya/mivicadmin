// import React from "react";
// import events from "./events";
// // import HTML5Backend from "react-dnd-html5-backend";
// import { DragDropContext } from "react-dnd";
// // import BigCalendar from "react-big-calendar";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import moment from "moment";

// BigCalendar.momentLocalizer(moment);
// const DragAndDropCalendar = withDragAndDrop(BigCalendar);

// class Dnd extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       events: events,
//     };

//     this.moveEvent = this.moveEvent.bind(this);
//   }

//   moveEvent({ event, start, end }) {
//     const { events } = this.state;

//     const idx = events.indexOf(event);
//     const updatedEvent = { ...event, start, end };

//     const nextEvents = [...events];
//     nextEvents.splice(idx, 1, updatedEvent);

//     this.setState({
//       events: nextEvents,
//     });
//   }

//   resizeEvent = (resizeType, { event, start, end }) => {
//     const { events } = this.state;

//     const nextEvents = events.map((existingEvent) => {
//       return existingEvent.id == event.id
//         ? { ...existingEvent, start, end }
//         : existingEvent;
//     });

//     this.setState({
//       events: nextEvents,
//     });
//   };

//   render() {
//     return (
//       <DragAndDropCalendar
//         selectable
//         events={this.state.events}
//         onEventDrop={this.moveEvent}
//         resizable
//         onEventResize={this.resizeEvent}
//         // defaultView={BigCalendar.Views.MONTH}
//         defaultDate={new Date(2015, 3, 12)}
//       />
//     );
//   }
// }

// const Calendar = DragDropContext(HTML5Backend)(Dnd);
// export default Dnd;
// ReactDOM.render(<Calendar />, document.getElementById("root"));
// export const Calender = ()=>{
//   return <>Calender</>;
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
import events from "./events";
const Calender = () => {
  return (
    <>
      <div>
        Calender
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          plugins={[dayGridPlugin, timeGridPlugin]}
          events={events}
        />
      </div>
    </>
  );
};

export default Calender;
