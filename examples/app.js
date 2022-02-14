import './app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import '@speedy4all/jodit';
import '@speedy4all/jodit/build/jodit.min.css';
import From from "./components/From";

ReactDOM.render(<From/>, document.getElementById('editor'));
