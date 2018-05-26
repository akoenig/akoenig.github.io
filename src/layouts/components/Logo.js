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
import styled from "styled-components";

import logo from "./Logo.svg";

const Wrapper = styled.a``;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin: 0;
`;

const Logo = () => (
  <Link to="/" style={{ outline: "none" }}>
    <Image src={logo} />
  </Link>
);

export { Logo };
