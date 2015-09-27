class CommentBox extends React.Component {
  constructor(props) {
   super(props);
   this.state = JSON.parse(props.presenter);
  }

  handleCommentSubmit ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ comments: data });
      }.bind(this)
    });
  }

  render () {
    return (
      <div className="comment-box">
        <img src={ this.props.imgSrc } alt={ this.props.imgAlt } />
        <CommentList comments={ this.state.comments } />
        <hr />
        <h2>Add a comment:</h2>
        <CommentForm form={ this.state.form } onCommentSubmit={ this.handleCommentSubmit.bind(this) } />
      </div>
    );
  }
}
