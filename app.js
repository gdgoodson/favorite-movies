
class Container extends React.Component {
/* constructor (props) {
    super(props)
  } */

  render () {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    )
  }
};

ReactDOM.render(
  <Container />,
  document.getElementById('container')
)
