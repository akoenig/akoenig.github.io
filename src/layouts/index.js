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

import React from "react";

import styled, { injectGlobal } from "styled-components";

import { Background } from "./components/Background";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Screen } from "./components/Screen";

injectGlobal`
html, body { height: 100%; }
`;

export default ({ children }) => (
  <div>
    <Background />
    <Screen>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <Main>{children()}</Main>
      <Footer />
    </Screen>
  </div>
);
