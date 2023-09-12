import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container-bg">
        <h1 className="heading">
          The Button has been clicked
          <span className="number"> {count} </span>
          times.
        </h1>
        <p>Click the button to increase the count!</p>
        <button
          className="click-button"
          type="button"
          onClick={this.onIncrease}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
