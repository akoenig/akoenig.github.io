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
import styled from "styled-components";

import Particles from "react-particles-js";

import { configuration } from "../../config/background";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Background = () => (
  <Wrapper>
    <Particles params={configuration} />
  </Wrapper>
);

export { Background };
