import * as React from 'react';
import * as moment from 'moment';
// import BigCalendar from 'react-big-calendar';

export interface CalendarEvent {
  title: string,
  start: Date,
  end: Date,
  allDay?: boolean,
  resource?: any,
};

export interface MyCalendarProps {
  eventList?: CalendarEvent[],
};


const BigCalendar = require('react-big-calendar');
const localizer = BigCalendar.momentLocalizer(moment);

const MyCalendar: React.SFC<MyCalendarProps> = () => {
    return (
      <div className="MyCalendar">
        <BigCalendar
            localizer={localizer}
            views={['month', 'week']}
        />
      </div>
    );
};
  
MyCalendar.defaultProps = {
};
  
export default MyCalendar;
