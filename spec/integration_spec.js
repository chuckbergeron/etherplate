// import 'jsdom-global/register';

import React from 'react';

import {
  MemoryRouter
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
// const createBrowserHistory = require('history/createBrowserHistory').default
// history = createBrowserHistory()



import { Application } from '@/components/application'
import Landing from '@/components/application/landing'
import NotFound from '@/components/application/not-found'




// import React from 'react';
// const rrd = require('react-router-dom');
// // Just render plain div with its children
// rrd.BrowserRouter = ({children}) => <div>{children}</div>
// module.exports = rrd;

const rrd = require('react-router-dom');
// Just render plain div with its children
const BrowserRouter = ({children}) => <div>{children}</div>





describe('basic integration tests', () => {

  // let router;

  // beforeEach(cusstomConfig)

  // beforeEach(() => {
  //   router = {
  //     params: { myParam: 'any-params-you-have' },
  //   };
  //   ({ dispatchSpy } = setupIntegrationTest({ myReducer }, router));
  // });

  // it('should change the text on click', () => {
  //   const app = mount(
  //     <Application />
  //   );


  //   console.log('----------------------');
  //   console.log(app.find('.navbar-item'));
  //   console.log('----------------------');
  //   let link = app.find('.navbar-item');

  //   link.find('a').last().simulate('click')

  //   expect(app.find('label').prop('children')).toEqual('Title');
  // });

  it('should have text on dashboard', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/tokens/new' ]}>
        <Application />
      </MemoryRouter>
    );

    console.log(wrapper.debug());

    expect(wrapper.find('p.title').prop('children')).toEqual("What is Etherplate?");
  });

  it('should render 404 on invalid path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/asdf' ]}>
        <Application />
      </MemoryRouter>
    );

    expect(wrapper.find('NotFound').length).toEqual(1);
  });

});
