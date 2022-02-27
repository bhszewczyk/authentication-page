import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AuthContectProvider } from './store/auth-context';

ReactDOM.render(
	<AuthContectProvider>
		<App />
	</AuthContectProvider>,
	document.getElementById('root')
);
