// ... the starter code you pasted ...

'use strict';

class LikeButton extends React.Component {
  static staticBtn = document.querySelector('#like_button_container');
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.button= document.querySelector('#like_button_container');
  }

  render() {
    if (this.state.liked) {
      return (
        <div>
        <button onClick={() => this.setState({ liked: false }) }>
        Liked
        </button>
        Like button clicked
        </div>
      );
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('tick'));
}


LikeButton.btn=document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, LikeButton.staticBtn);
ReactDOM.render(<Example />, document.querySelector('#root'));
setInterval(tick, 1000);
