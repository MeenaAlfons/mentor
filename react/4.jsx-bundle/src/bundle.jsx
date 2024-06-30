import JSX from './meena-jsx-as-module.js'

const FonsFans = () => <section>
    <div>Fons Fans</div>
    <img src="https://picsum.photos/200/300"/>
</section>


window.onload = function() {
    const root = document.getElementById('root');
    root.appendChild(FonsFans())
}
