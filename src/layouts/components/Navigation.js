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

const Menu = styled.ul`
  list-style-type: none;
  padding-left: 1rem;
  margin: 0;
`;

const MenuItem = styled.li`
  display: inline-block;
  margin: 0;
  margin-right: 1rem;
`;

const MenuItemLink = styled.a`
  border-bottom: 1px solid transparent;
  color: rgba(0, 0, 0, 0.3);
  display: inline-block;

  font-weight: 800;
  font-size: 70%;
  transition: color 0.4s ease-in-out, border 0.4s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-bottom: 1px solid #f44336;
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
  }
`;

const Navigation = () => (
  <Menu>
    <MenuItem>
      <MenuItemLink href="https://dev.to/andre" target="_blank">
        Articles
      </MenuItemLink>
    </MenuItem>
    <MenuItem>
      <MenuItemLink href="https://github.com/akoenig" target="_blank">
        Code
      </MenuItemLink>
    </MenuItem>
  </Menu>
);

export { Navigation };
