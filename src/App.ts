import Style from './style/style';
import Main from './pages/Main';
import NewNote from './components/NewNote';

function App() {
    Style();
    new Main();
    new NewNote();
}

export default App;