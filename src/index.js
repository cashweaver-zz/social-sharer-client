import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

// Components
import GroupSelector from './components/GroupSelector';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={GroupSelector}/>
        <Match pattern="/group/:groupId" component={App}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  );
};

render(
  <Root />,
  document.getElementById('app')
);
