/** @jsx React.DOM */

var Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <h2 className="comment__author">
          { this.props.author }
        </h2>
        <p className="comment__text">
          { this.props.text }
        </p>
      </div>
    )
  }
});
