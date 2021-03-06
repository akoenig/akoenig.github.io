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
import Link from "gatsby-link";

import styled, { keyframes } from "styled-components";

import { Intro } from "../shared/Intro";
import { LatestArticles } from "../shared/LatestArticles";

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 740px;
  padding-bottom: 50px;
`;

const Index = () => (
  <Wrapper>
    <Intro />
    <LatestArticles />
  </Wrapper>
);

export default Index;
