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

import logo from './Logo.svg'

const Wrapper = styled.a``

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin: 0;
`

const Logo = () => (
  <Wrapper href="/">
    <Image src={logo} />
  </Wrapper>
)

export { Logo }
