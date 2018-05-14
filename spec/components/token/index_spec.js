import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { boughtTokenReducer } from '@/redux/reducers'

import Token from '@/components/application/token';

Enzyme.configure({ adapter: new Adapter() });

let store = createStore(boughtTokenReducer)

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
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)

      expect(enzymeWrapper.find('h1').text()).toBe('todos')

      const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
      expect(todoInputProps.newTodo).toBe(true)
      expect(todoInputProps.placeholder).toEqual('What needs to be done?')
    })

    it('should call addTodo if length of text is greater than 0', () => {
      const { enzymeWrapper, props } = setup()
      const input = enzymeWrapper.find('TodoTextInput')
      input.props().onSave('')
      expect(props.addTodo.mock.calls.length).toBe(0)
      input.props().onSave('Use Redux')
      expect(props.addTodo.mock.calls.length).toBe(1)
    })
  })
})

