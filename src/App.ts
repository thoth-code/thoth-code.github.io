function App() {
    const app = document.getElementById('app') as HTMLElement;
    const home = document.createElement('home-page') as HTMLElement;
    app.appendChild(home);
}

export default App;