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

import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0;
  }
`

const Cursor = styled.span`
  animation: ${blink} 1.6s infinite ease-in-out;
  background: #ef5350;
  display: inline-block;
  margin-left: 0.2rem;
  width: 3px;

  &:before {
    content: '\\200b';
  }
`

export { Cursor }
