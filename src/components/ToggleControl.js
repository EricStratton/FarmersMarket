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
      currentlyVisibleState = <div class="row" style={{padding: '30px'}}><DayList /></div>
      textButton = "Seaonal Produce";
    } else {
      currentlyVisibleState = <div class="row" style={{padding: '30px'}}><MonthList /></div>
      textButton = "Daily Schedule"; 
    }
    return (
      <>
      <button id="btn" onClick = {this.handleClick}>{textButton}</button>
      {currentlyVisibleState}
      </>
    );
  }
}

export default ToggleControl;