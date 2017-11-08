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

import { Github as GitHubIcon, Twitter as TwitterIcon } from 'react-feather'

import { Contact } from '../../shared/Contact'
import { Social, SocialIcon, SocialLink } from './Social'

const Wrapper = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.03);
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 80%;
  max-width: 740px;
  padding: 0.4em 0;
`

const Title = styled.section`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;
`

const Me = styled.strong`
  font-size: 80%;
  font-weight: 600;
  display: inline-block;
  margin-left: 0.4em;
  margin-right: 0.4em;
`

const Claim = styled.small``

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
`

const Footer = () => (
  <Wrapper>
    <Title>
      <Me>André König</Me>
      <Claim>
        Freelance Software Architect &amp; Engineer
        <Contact>
          <Hire>Let's work together!</Hire>
        </Contact>
      </Claim>
    </Title>
    <Social>
      <SocialIcon>
        <SocialLink href="https://github.com/akoenig">
          <GitHubIcon />
        </SocialLink>
      </SocialIcon>
      <SocialIcon>
        <SocialLink href="https://twitter.com/binarycereals">
          <TwitterIcon />
        </SocialLink>
      </SocialIcon>
    </Social>
  </Wrapper>
)

export { Footer }
