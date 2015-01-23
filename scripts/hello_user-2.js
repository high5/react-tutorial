/**
 * Created on 15/01/23.
 */
var HelloUser = React.createClass({
  getInitialState: function(){
    return {
      username: '@tylermcginnis33'
    }
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      <div>
      Hello {this.state.username} <br />
      Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
      )
  }
});

React.render(
  <HelloUser />,
  document.getElementById('content')
);