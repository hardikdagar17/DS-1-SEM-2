

// const reactElement = React.createElement("div",{},
//     [React.createElement("span", {id : "span1"}, '1'),
//     React.createElement("span", {id : "span2"}, '2'),
//     React.createElement("span", {id : "span3"}, '3')
//     ]
// );
const reactElement = <div>
    <span id="span1">1</span>
    <span id="span2">2</span>
    <span id="span3">3</span>
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(reactElement);