// Install CSS
import './style/App';
import './style/fonts';

// Install Custom Components
import InstallComponents from './components';
import InstallPages from './pages';
InstallComponents();
InstallPages();

import InstallRouter from './router';
InstallRouter();

//Run App
import App from './App';
App();