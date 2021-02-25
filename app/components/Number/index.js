const React = require('react');
const {Component} = require('react');

class Numbers extends Component {
  constructor(props) {
    super(props);

    // Set initial state from props
    this.state = {
      number: 0
    };
  }

  handleClick() {
    let number = this.state.number;

    this.setState({
      number: number + 1
    });
  }

  render() {
    return (
      <div>
        <p onClick={this.handleClick.bind(this)}>Number: {this.state.number}</p>
      </div>
    )
  }
}

module.exports = Numbers;
