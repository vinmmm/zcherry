/** @jsx React.DOM */
var React = require('react/addons');
var _ = require('underscore');

var Defeat = React.createClass({
  render: function(){
    return <div className="wave-intro intro">
      <h1>DEFEAT!</h1>
      <p>The Cherry Street lot was destyoyed by Crystal Meth!</p>
      <p>Press <span className="button">enter</span> to go back in time and fix this.</p>
    </div>;
  }
});

module.exports=Defeat;
