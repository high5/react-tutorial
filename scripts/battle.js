/**
 * Created on 15/01/22.
 */
var EnemyList = React.createClass({
  render: function() {
    return <div>enemylist</div>;
  }
});

var DeckList = React.createClass({
  render: function() {
    return <div>decklist</div>;
  }
});

//use react-animation
var Story = React.createClass({
  render: function() {
    return <div>story</div>;
  }
});

var BattleApp = React.createClass({
  render: function() {
    return (
      <div>
        <EnemyList />
        <DeckList  />
        <Story  />
      </div>
    );
  }
});

React.render(
  <BattleApp />,
  document.getElementById('content')
);
