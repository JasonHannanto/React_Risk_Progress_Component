import React, { Component } from 'react';


class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  };

  componentWillMount() {
    if (this.state.value >= 70) {
      this.setState({
        danger: 'danger'
      })
    }

    else if (this.state.value >= 50) {
      this.setState({
        danger: 'warning'
      })
    }
    else {
      this.setState({
        danger: 'healthy'
      })
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value >= 70) {
      this.setState({
        value: newProps.value,
        danger: 'danger'
      })
    }

    else if (newProps.value >= 50) {
      this.setState({
        value: newProps.value,
        danger: 'warning'
      })
    }
    else {
      this.setState({
        value: newProps.value,
        danger: 'healthy'
      })
    }
  }

  render() {

    return (
      <div className=" progressBar">
        {console.log(this.state.value)}
        < div className={"progress " + this.state.danger} style={{ width: `${this.state.value}%` }}></div >
      </div >
    )
  }
}

export default ProgressBar;
