import React from 'react'

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  MarkdownSlides,
  Markdown,
  Image
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')
require('spectacle/lib/themes/default/index.css')
require('prismjs/themes/prism-tomorrow.css')
require('../index.css')


import middlewareFigure0 from '../assets/middleware-0.png'
import middlewareFigure1 from '../assets/middleware-1.png'

import middlewareSlids from './middleware/slides.md'
import problemSlides from './problem/slides.md'
import streamSlides from './stream/slides.md'

const theme = createTheme({
  primary: '#1d1d1e',
  secondary: '#ffffff',
  tertiary: '#ffffff',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading fit>Stream And MiddleWare In Node.js</Heading>
        </Slide>
        {MarkdownSlides(problemSlides)}
        {MarkdownSlides(streamSlides)}
        {MarkdownSlides(middlewareSlids)}
      </Deck>
    )
  }
}
