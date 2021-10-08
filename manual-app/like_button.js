// ... the starter code you pasted ...

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    _this.button = document.querySelector('#like_button_container');
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.setState({ liked: false });
              } },
            'Liked'
          ),
          'Like button clicked'
        );
      }

      return React.createElement(
        'button',
        { onClick: function onClick() {
            return _this2.setState({ liked: true });
          } },
        'Like'
      );
    }
  }]);

  return LikeButton;
}(React.Component);

LikeButton.staticBtn = document.querySelector('#like_button_container');

var Example = function (_React$Component2) {
  _inherits(Example, _React$Component2);

  function Example(props) {
    _classCallCheck(this, Example);

    var _this3 = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this3.state = {
      count: 0
    };
    return _this3;
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'You clicked ',
          this.state.count,
          ' times'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this4.setState({ count: _this4.state.count + 1 });
            } },
          'Click me'
        )
      );
    }
  }]);

  return Example;
}(React.Component);

function tick() {
  var element = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Hello, world!'
    ),
    React.createElement(
      'h2',
      null,
      'It is ',
      new Date().toLocaleTimeString(),
      '.'
    )
  );
  ReactDOM.render(element, document.getElementById('tick'));
}

LikeButton.btn = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(LikeButton, null), LikeButton.staticBtn);
ReactDOM.render(React.createElement(Example, null), document.querySelector('#root'));
setInterval(tick, 1000);