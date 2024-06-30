import React from 'react';
import ReactDOM from 'react-dom';

const FonsFans = () => <section>
    <div>Fons Fans</div>
    <img src="https://picsum.photos/200/300"/>
</section>


window.onload = function () {
    const domNode = document.getElementById('root');
    const root = ReactDOM.createRoot(domNode);
    root.render(<FonsFans />);
  }
  