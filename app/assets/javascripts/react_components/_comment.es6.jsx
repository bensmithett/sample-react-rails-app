class Comment extends React.Component {
  render () {
    return (
      <div>
        <h4>{ this.props.author } said:</h4>
        <p>{ this.props.text }</p>
      </div>
    )
  }
}
