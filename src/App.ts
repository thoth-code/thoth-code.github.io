import Main from './pages/Main';
import NewNote from './components/NewNote';
import Style from './style/style';

function App() {
    Style();
    Main();
    new NewNote();
}

export default App;