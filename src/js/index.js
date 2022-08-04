import React from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from '../components/App';
import '../scss/styles.scss';

const app = document.getElementById('root');
const root = createRoot(app);
root.render(<Layout/>);