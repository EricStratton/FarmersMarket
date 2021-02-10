// ATTEMPT TO DISPLAY DAY DETAILS ONE-AT-A-TIME //
// Not Functional //

import React from 'react';
import DayList from './DayList';
import Day from './Day';

class DayChange extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: null  // make this to null and remove others. // onChange={this.handleIndex} //
    };
  }

  handleIndex = (event) => {
    this.setState({index: event.target.value}) // Keep this // //<option value={index}>{event.day}</option>
  }

  // handleClick = () => {
  //   this.setState(prevState => ({
  //     dayVisibleOnPage: !prevState.dayVisibleOnPage
  //   }));
  // }


  render() {
    const schedule = <DayList />
    console.log(schedule);
    let currentlyVisibleState = null;
		// let buttonDay = null;
		if(this.state.index != null) {
      const currentDay = schedule[this.state.index]
      currentlyVisibleState = <Day day={currentDay.day} location={currentDay.location} hours={currentDay.hours} booth={currentDay.booth} />
      // buttonDay = {currentDay.day};
    }

    return (
      <>
      {currentlyVisibleState}
      {/* {schedule.map((val, index) =>
          <button value={index} onClick={this.handleIndex}>{val.day}</button>
      )} */}
      </>
    );
  }
}

export default DayChange;