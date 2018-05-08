import React from 'react';
import { shallow, mount, render } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme'

import { Application } from '@/components/application'
import { SiteHeader } from '@/components/application/layout/site-header'

describe("Test Application React component", function() {
  beforeEach(() => {
    jasmineEnzyme()
  });

  it("contains the SiteHeader component", function() {
    console.log(shallow(<Application />))
    expect(shallow(<Application />).contains(<SiteHeader />)).toEqual(true);
  });

  it("contains only 1 navbar", function() {
    expect(render(<Application />).find('.navbar').length).toEqual(1);
  });
});
