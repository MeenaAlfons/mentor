import React from 'react';
import ReactDOM from 'react-dom';

const FonsFans = () => React.createElement("section", null, 
    React.createElement("div", null, "Fons Fans"),
    React.createElement("img", { src: "https://picsum.photos/200/300" })
);

window.onload = function () {
    const domNode = document.getElementById('root');
    const root = ReactDOM.createRoot(domNode);
    root.render(FonsFans());
  }
  