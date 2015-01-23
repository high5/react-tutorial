/**
 * Created on 15/01/23.
 */
var HelloUser = React.createClass({
  getInitialState: function(){
    return {
      username: '@tylermcginnis33'
    }
  },
  render: function(){
    return (
      <div>
      Hello {this.state.username}
      </div>
      )
  }
});

React.render(
  <HelloUser />,
  document.getElementById('content')
);