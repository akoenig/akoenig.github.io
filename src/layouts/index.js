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

import { Logo } from './components/Logo'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Screen } from './components/Screen'

export default ({ children }) => (
  <Screen>
    <Header>
      <Logo />
      <Navigation />
    </Header>
    <Main>{children()}</Main>
    <Footer />
  </Screen>
)
