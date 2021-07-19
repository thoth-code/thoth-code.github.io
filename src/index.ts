// Install CSS
import './style/App';
import './style/fonts';

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