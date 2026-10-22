import React from 'react';
import {createRoot} from 'react-dom/client';
import LocaleRoot from './components/LocaleRoot';
import {ProgressProvider} from './state/ProgressContext';
import './styles.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><ProgressProvider><LocaleRoot/></ProgressProvider></React.StrictMode>);

