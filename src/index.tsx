import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DrivingSimulator from './driving_simulator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<DrivingSimulator />);
