import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    resultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changeImage = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const filteredResult =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    this.setState({resultImage: filteredResult})

    const result =
      tossResult === 0
        ? this.setState(prevState => ({
            heads: prevState.heads + 1,
            total: prevState.total + 1,
          }))
        : this.setState(prevState => ({
            tails: prevState.tails + 1,
            total: prevState.total + 1,
          }))
  }

  render() {
    const {total, heads, tails, resultImage} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={resultImage} alt="toss result" className="image" />
          <div>
            <button className="button" type="button" onClick={this.changeImage}>
              Toss Coin
            </button>
          </div>
          <div className="ul-container">
            <p className="li-items">Total: {total}</p>
            <p className="li-items">Heads: {heads}</p>
            <p className="li-items">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
