function App(props) {
  return React.createElement(
    "div",
    { className: "todoapp stack-large" },
    React.createElement(
      "h1",
      null,
      "TodoMatic"
    ),
    React.createElement(
      "form",
      null,
      React.createElement(
        "h2",
        { className: "label-wrapper" },
        React.createElement(
          "label",
          { htmlFor: "new-todo-input", className: "label__lg" },
          "What needs to be done?"
        )
      ),
      React.createElement("input", {
        type: "text",
        id: "new-todo-input",
        className: "input input__lg",
        name: "text",
        autoComplete: "off"
      }),
      React.createElement(
        "button",
        { type: "submit", className: "btn btn__primary btn__lg" },
        "Add"
      )
    ),
    React.createElement(
      "div",
      { className: "filters btn-group stack-exception" },
      React.createElement(
        "button",
        { type: "button", className: "btn toggle-btn", "aria-pressed": "true" },
        React.createElement(
          "span",
          { className: "visually-hidden" },
          "Show "
        ),
        React.createElement(
          "span",
          null,
          "all"
        ),
        React.createElement(
          "span",
          { className: "visually-hidden" },
          " tasks"
        )
      ),
      React.createElement(
        "button",
        { type: "button", className: "btn toggle-btn", "aria-pressed": "false" },
        React.createElement(
          "span",
          { className: "visually-hidden" },
          "Show "
        ),
        React.createElement(
          "span",
          null,
          "Active"
        ),
        React.createElement(
          "span",
          { className: "visually-hidden" },
          " tasks"
        )
      ),
      React.createElement(
        "button",
        { type: "button", className: "btn toggle-btn", "aria-pressed": "false" },
        React.createElement(
          "span",
          { className: "visually-hidden" },
          "Show "
        ),
        React.createElement(
          "span",
          null,
          "Completed"
        ),
        React.createElement(
          "span",
          { className: "visually-hidden" },
          " tasks"
        )
      )
    ),
    React.createElement(
      "h2",
      { id: "list-heading" },
      "3 tasks remaining"
    ),
    React.createElement(
      "ul",
      {
        role: "list",
        className: "todo-list stack-large stack-exception",
        "aria-labelledby": "list-heading"
      },
      React.createElement(
        "li",
        { className: "todo stack-small" },
        React.createElement(
          "div",
          { className: "c-cb" },
          React.createElement("input", { id: "todo-0", type: "checkbox", defaultChecked: true }),
          React.createElement(
            "label",
            { className: "todo-label", htmlFor: "todo-0" },
            "Eat"
          )
        ),
        React.createElement(
          "div",
          { className: "btn-group" },
          React.createElement(
            "button",
            { type: "button", className: "btn" },
            "Edit ",
            React.createElement(
              "span",
              { className: "visually-hidden" },
              "Eat"
            )
          ),
          React.createElement(
            "button",
            { type: "button", className: "btn btn__danger" },
            "Delete ",
            React.createElement(
              "span",
              { className: "visually-hidden" },
              "Eat"
            )
          )
        )
      ),
      React.createElement(
        "li",
        { className: "todo stack-small" },
        React.createElement(
          "div",
          { className: "c-cb" },
          React.createElement("input", { id: "todo-1", type: "checkbox" }),
          React.createElement(
            "label",
            { className: "todo-label", htmlFor: "todo-1" },
            "Sleep"
          )
        ),
        React.createElement(
          "div",
          { className: "btn-group" },
          React.createElement(
            "button",
            { type: "button", className: "btn" },
            "Edit ",
            React.createElement(
              "span",
              { className: "visually-hidden" },
              "Sleep"
            )
          ),
          React.createElement(
            "button",
            { type: "button", className: "btn btn__danger" },
            "Delete ",
            React.createElement(
              "span",
              { className: "visually-hidden" },
              "Sleep"
            )
          )
        )
      ),
      React.createElement(
        "li",
        { className: "todo stack-small" },
        React.createElement(
          "div",
          { className: "c-cb" },
          React.createElement("input", { id: "todo-2", type: "checkbox" }),
          React.createElement(
            "label",
            { className: "todo-label", htmlFor: "todo-2" },
            "Repeat"
          )
        ),
        React.createElement(
          "div",
          { className: "btn-group" },
          React.createElement(
            "button",
            { type: "button", className: "btn" },
            "Edit ",
            React.createElement(
              "span",
              { className: "visually-hidden" },
              "Repeat"
            )
          ),
          React.createElement(
            "button",
            { type: "button", className: "btn btn__danger" },
            "Delete ",
            React.createElement(
              "span",
              { className: "visually-hidden" },
              "Repeat"
            )
          )
        )
      )
    )
  );
}
ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));