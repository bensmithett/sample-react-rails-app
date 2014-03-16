/** @jsx React.DOM */

var CommentForm = React.createClass({
  handleSubmit: function ( event ) {
    event.preventDefault();

    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();

    // validate
    if (!text || !author) {
      return false;
    }

    // submit
    var formData = $( this.refs.form.getDOMNode() ).serialize();
    this.props.onCommentSubmit( formData, this.props.form.action );

    // reset form
    this.refs.author.getDOMNode().value = "";
    this.refs.text.getDOMNode().value = "";
  },
  render: function () {
    return (
      <form ref="form" className="comment-form" action={ this.props.form.action } accept-charset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
        <p><input ref="author" name="comment[author]" placeholder="Your name" /></p>
        <p><textarea ref="text" name="comment[text]" placeholder="Say something..." /></p>
        <p><button type="submit">Post comment</button></p>
      </form>
    )
  }
});

