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

import styled from "styled-components";

const Social = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const SocialIcon = styled.li`
  display: flex;
  margin: 0;
  margin-left: 0.6em;
  padding: 0;

  &:first-child {
    margin-left: 0;
  }

  & svg {
    fill: rgba(0, 0, 0, 0.2);
    height: 18px;
    width: 18px;
    transition: fill 0.2s ease-in-out;
  }

  &:hover svg {
    fill: #f44336;
  }
`;

const SocialLink = styled.a`
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.2s ease-in-out;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

export { Social, SocialIcon, SocialLink };
