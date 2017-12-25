import React from 'react';
import ReactDOM from 'react-dom';
import TestingHome from  './TestingHome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestingHome />, div);
});
