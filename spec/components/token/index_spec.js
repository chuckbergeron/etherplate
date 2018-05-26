import React from 'react';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { tokens } from '@/redux/reducers'

import Token from '@/components/application/token';

const rootReducer = combineReducers({ tokens })
const store = createStore(rootReducer)

function setup() {
  const props = {
    token: {},
    match: {
      params: {
        tokenId: "4"
      }
    }
  }

  const enzymeWrapper = mount(
    <Provider store={store}>
      <Token {...props} />
    </Provider>
  )

  return {
    props,
    enzymeWrapper
  }
}


describe('components', () => {
  describe('Token', () => {
    it('should render container if no state set yet', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('div').hasClass('container')).toBe(true)
    })

    xdescribe('after getToken() (with state set)', () => {
      it('should render the image', () => {
        const { enzymeWrapper, props } = setup()

        expect(false).toBe(1)
      })

      it('should render the transaction hash', () => {
        const { enzymeWrapper, props } = setup()

        expect(false).toBe(1)
      })

      it('should render the transaction ID', () => {
        const { enzymeWrapper, props } = setup()

        expect(false).toBe(1)
      })
    })

  })
})

