import React from 'react';

import {
  MemoryRouter
} from 'react-router-dom'

import { Application } from '@/components/application'

global.window.web3 = undefined;

describe('smokescreen integration tests', () => {

  // beforeEach(customConfig)

  it('should change the text on click', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Application />
      </MemoryRouter>
    );

    let links = wrapper.find('.navbar-item');

    let purchaseTokenButton = links.find('a').last();
    purchaseTokenButton.simulate('click', { button: 0 });

    // console.log(wrapper.debug());

    // FOR NOW until we find a way to mock the Metamask check:
    expect(wrapper.find('h1.title').prop('children')).toEqual("Hold up ...");

    // Should be something more like:
    // expect(wrapper.find('form').length.toEqual(1));
  });

  it('should have text on the landing page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Application />
      </MemoryRouter>
    );

    expect(wrapper.find('p.title').prop('children')).toEqual("What is Etherplate?");
  });

  it('should have a message about installing metamask / web3 browser', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/tokens/new' ]}>
        <Application />
      </MemoryRouter>
    );

    expect(wrapper.find('h1.title').prop('children')).toEqual("Hold up ...");
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
