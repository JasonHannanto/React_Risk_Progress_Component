import React, { Component } from 'react';
import RiskScale from '../../components/RiskScale/RiskScale';
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }
  render() {
    return (
      <div>
        <RiskScale />
      </div>
    )
  }
}

export default Dashboard;
