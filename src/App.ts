import Main from './pages/Main'

function App(): string {
    return (`
        <header>
            <a href="/">Thoth</a>
        </header>
        ${Main()}
        <footer>copyright © saltwalks2021</footer>
    `);
}

export default App;