import React from 'react';
import DayList from './DayList';
import MonthList from './MonthList';



class ToggleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      listVisibleOnPage: !prevState.listVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let textButton = null;
    if (this.state.listVisibleOnPage) {
      currentlyVisibleState = <DayList />;
      textButton = "Seaonal Produce";
    } else {
      currentlyVisibleState = <MonthList />;
      textButton = "Daily Schedule";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{textButton}</button>
      </>
    );
  }
}

export default ToggleControl;