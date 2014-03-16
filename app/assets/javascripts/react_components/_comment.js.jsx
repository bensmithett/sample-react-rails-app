/** @jsx React.DOM */

var Comment = React.createClass({
  render: function () {
    return (
      <div>
        <h4>{ this.props.author } said:</h4>
        <p>{ this.props.text }</p>
      </div>
    )
  }
});
