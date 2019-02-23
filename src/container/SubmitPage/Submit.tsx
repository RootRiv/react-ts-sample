import * as React from 'react';
import Form from '../../components/form/Form';
import MyCalendar from '../../components/myCalendar';

class Submit extends React.Component {
  public render() {
    return (
      <div className="Submit">
        <Form label="test"/>
        <MyCalendar />
      </div>
    );
  }
}

export default Submit;
