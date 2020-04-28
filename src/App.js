import React from 'react';
import './App.css';
import { Items } from './Items';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    vievContent: 1,
    maxLength: 10,
    goods: [...goodsFromServer],
  };

  changeLength = (event) => {
    this.setState({
      maxLength: event.target.value,
      goods: goodsFromServer.filter(good => (
        good.length <= event.target.value)),
    });
  }

  changeReverse = () => {
    this.setState(prewState => ({
      goods: prewState.goods.reverse(),
    }));
  }

  resetDefolt = () => {
    this.setState({
      goods: goodsFromServer,
      maxLength: 10,
    });
  }

  sortLength = () => {
    this.setState(prewState => ({
      goods: prewState.goods
        .sort((goodPrev, goodCurrent) => (
          goodPrev.length - goodCurrent.length)),
    }));
  }

  sortAbc = () => {
    this.setState(prewState => ({
      goods: prewState.goods
        .sort((goodPrev, goodCurrent) => (
          goodPrev.localeCompare(goodCurrent))),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className={(this.state.vievContent === 0)
            ? 'display-none' : 'start'}
          onClick={() => {
            this.setState({
              vievContent: 0,
            });
          }}
        >
          start
        </button>
        <div className={(this.state.vievContent === 0)
          ? 'content' : 'display-none'}
        >
          <button onClick={this.changeReverse} type="button">reverse</button>
          <button onClick={this.sortAbc} type="button">sort ABC</button>
          <button onClick={this.sortLength} type="button">sort length</button>
          <select onInput={this.changeLength} value={this.state.maxLength}>
            {Array(10).fill('').map((item, index) => (
              <option value={index + 1}>{index + 1}</option>
            ))}
          </select>
          <button onClick={this.resetDefolt} type="button">reset</button>
          <Items items={this.state.goods} />
        </div>

      </div>
    );
  }
}

export default App;
