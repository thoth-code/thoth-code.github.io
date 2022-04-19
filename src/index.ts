// Install CSS
import './style/App';

// Install Custom Components
import InstallComponents from './components';
import InstallPages from './pages';
InstallComponents();
InstallPages();

// Install Router
import InstallRouter from './router';
InstallRouter();

// Install Store
import InstallStore from './store';
InstallStore();

//Start App
document.getElementById('app')?.appendChild(
    document.createElement('main-app')
)
