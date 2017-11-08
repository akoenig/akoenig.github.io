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

import Mailto from "react-mailto";

const ContactLink = styled(Mailto)`
  &:hover {
    text-decoration: none;
  }
`;

const Contact = ({ children }) => (
  <ContactLink email="hello@andrekoenig.de">{children}</ContactLink>
);

export { Contact };
