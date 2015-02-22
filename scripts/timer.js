var Timer = React.createClass({
  getInitialState: function() {
    console.log("getInitialState");
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentWillMount: function() {
    //alert('componentWillMount');
    console.log("componentWillMount");
  },
  componentDidMount: function() {
    console.log("componentDidMount");
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
      );
  }
});

React.render(
  <Timer />,
  document.getElementById('content-1')
);

React.render(
  <Timer />,
  document.getElementById('content-2')
);

React.render(
  <Timer />,
  document.getElementById('content-3')
);
