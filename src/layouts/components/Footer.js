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

import { Github as GitHubIcon, Twitter as TwitterIcon } from "react-feather";

import { Email } from "../../shared/Email";
import { Social, SocialIcon, SocialLink } from "./Social";

const Wrapper = styled.footer`
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.03);
  font-size: 80%;
  padding: 0.4em 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const Content = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 740px;
  padding: 0 0.8rem;
`;

const Title = styled.section`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;
`;

const Me = styled.strong`
  font-size: 80%;
  font-weight: 600;
  display: inline-block;
  margin-right: 0.4em;

  align-self: flex-start;
`;

const Claim = styled.small``;

const Hire = styled.span`
  border: 1px solid #f44336;
  border-radius: 3px;
  color: #f44336;
  cursor: pointer;
  font-size: 70%;
  margin-left: 0.4rem;
  padding: 0.2rem 0.4rem;
  transition: background 0.2s ease-in-out, color 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #f44336;
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 390px) {
    display: block;
    background: #f44336;
    color: #fff;
    font-size: 0.8rem;
    padding: 0.1rem 0;
    margin: 0;
    text-align: center;
  }
`;

const Footer = () => (
  <Wrapper>
    <Content>
      <Title>
        <Me>André König</Me>
        <Claim>
          Freelance Software Architect &amp; Engineer
          <Email>
            <Hire>Let's work together!</Hire>
          </Email>
        </Claim>
      </Title>
      <Social>
        <SocialIcon>
          <SocialLink href="https://github.com/akoenig">GitHub</SocialLink>
        </SocialIcon>
        <SocialIcon>
          <SocialLink href="https://twitter.com/binarycereals">
            Twitter
          </SocialLink>
        </SocialIcon>
        <SocialIcon>
          <SocialLink href="https://www.xing.com/profile/Andre_Koenig23/cv">
            XING
          </SocialLink>
        </SocialIcon>
        <SocialIcon>
          <Link
            to="/imprint"
            style={{
              color: "rgba(0, 0, 0, 0.3)",
              outline: "none",
              textDecoration: "none"
            }}
            activeStyle={{
              color: "#f44336"
            }}
          >
            Imprint
          </Link>
        </SocialIcon>
      </Social>
    </Content>
  </Wrapper>
);

export { Footer };
