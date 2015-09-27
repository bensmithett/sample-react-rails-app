class CommentList extends React.Component {
  render () {
    var commentNodes = this.props.comments.map(function ( comment ) {
      return <Comment author={ comment.author } text={ comment.text } key={ comment.id } />
    });

    return (
      <div className="comment-list">
        { commentNodes }
      </div>
    )
  }
}
