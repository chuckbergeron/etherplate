import 'jsdom-global/register';

import React from 'react';

import {
  BrowserRouter
} from 'react-router-dom'

import Enzyme, {
  shallow,
  mount,
  render,
  ReactWrapper
} from 'enzyme';


import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });



// import { createMemoryHistory } from 'history'
const createBrowserHistory = require('history/createBrowserHistory').default
history = createBrowserHistory()



import App from '@/App'
import Dashboard from '@/javascripts/components/dashboard'


// beforeEach(cusstomConfig)

describe('basic integration tests', () => {

  // let router;

  // beforeEach(() => {
  //   router = {
  //     params: { myParam: 'any-params-you-have' },
  //   };
  //   ({ dispatchSpy } = setupIntegrationTest({ myReducer }, router));
  // });

  it('should change the text on click', () => {
    const app = mount(
      <App />
    );


    console.log(app.find('#navbar-link__history'));
    let link = app.find('#navbar-link__history');

    link.find('a').last().simulate('click')

    // firing before loading dashboard / history?
    expect(app.find('h1').prop('children')).toEqual('History of Activity');
  });

  it('should have text on dashboard', () => {
    const landing = mount(
      <Landing />
    );

    expect(dashboard.find('h2').prop('children')).toEqual("Add activities you've completed here:");
  });

});
