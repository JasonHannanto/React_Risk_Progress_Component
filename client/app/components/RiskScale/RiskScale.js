import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class RiskScale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fireRisk: null,
      floodRisk: null,
      hurricaneRisk: null,
      stormRisk: null,
      crimeRate: null,
      loading: true
    };

    this.getData = this.getData.bind(this);

  }

  getData() {
    fetch('https://www.random.org/integers/?num=5&min=1&max=90&col=1&base=10&format=plain&rnd=new')
      .then(res => res.text())
      .then(text => {
        let textSplit = text.split('\n')
        this.setState({
          fireRisk: textSplit[0],
          floodRisk: textSplit[1],
          hurricaneRisk: textSplit[2],
          stormRisk: textSplit[3],
          crimeRate: textSplit[4],
          loading: false
        });
      })
      .catch(err => { console.error(err) })
  }
  componentWillMount() {
    this.getData();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getData(), 2500);
  }

  render() {
    while (this.state.loading) {
      return (<h2>Loading...</h2>)
    }
    return (
      <div className="riskStation">
        <div className="progressDiv">
          <p className="title">Fire Risk</p>
          <p className="stats">{this.state.fireRisk}%</p>
          <ProgressBar value={this.state.fireRisk} />
        </div>
        <div className="progressDiv">
          <p className="title">Flood Risk</p>
          <p className="stats">{this.state.floodRisk}%</p>
          <ProgressBar value={this.state.floodRisk} />
        </div>
        <div className="progressDiv">
          <p className="title">Hurricane Risk</p>
          <p className="stats">{this.state.hurricaneRisk}%</p>
          <ProgressBar value={this.state.hurricaneRisk} />
        </div>
        <div className="progressDiv">
          <p className="title">Storm Risk</p>
          <p className="stats">{this.state.stormRisk}%</p>
          <ProgressBar value={this.state.stormRisk} />
        </div>
        <div className="progressDiv">
          <p className="title">Crime Risk</p>
          <p className="stats">{this.state.crimeRate}%</p>
          <ProgressBar value={this.state.crimeRate} />
        </div>
      </div >
    )
  }
}

export default RiskScale;
