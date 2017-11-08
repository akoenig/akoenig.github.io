/*
 * @akoenig/website
 *
 * Copyright(c) 2017 André König <andre.koenig@gmail.com>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@gmail.com>
 *
 */

import React from 'react'
import styled from 'styled-components'

import { Cursor } from './Cursor'

const Wrapper = styled.section`padding-top: 3rem;`

const Headline = styled.h2`
  color: rgba(0, 0, 0, 0.6);
  font-size: 3em;
  font-weight: 100;
  line-height: 1.3em;
  text-transform: uppercase;
  max-width: 70%;

  strong {
    color: #f44336;
    font-weight: 300;
  }
`

const Intro = () => (
  <Wrapper>
    <Headline>
      Hi – I'm <strong>André</strong> and I design &amp; develop software
      systems
      <Cursor />
    </Headline>
  </Wrapper>
)

export { Intro }
