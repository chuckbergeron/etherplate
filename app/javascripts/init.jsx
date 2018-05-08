import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import style from '../stylesheets/css-animation-keyframes.scss'
import '../stylesheets/app.scss';

import { Application } from './components/application'

export const init = (elem) => {
  ReactDOM.render(
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  , elem)
}
