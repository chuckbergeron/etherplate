import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom'

import style from '../stylesheets/css-animation-keyframes'

import { Application } from './components/application'

export const init = (elem) => {
  ReactDOM.render(
    <BrowserRouter>
      <Application />
    </BrowserRouter>,
    elem)
}
