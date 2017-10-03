/*
 * @akoenig/blog
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

import { Github as GitHubIcon, Twitter as TwitterIcon } from "react-feather";

import "./index.css";

const IndexPage = () => (
  <div className="IndexPage">
    <section className="Header">
      <h1 className="Header__logo">👑</h1>

      <ul className="Header__navigation">
        <li className="Header__navigation__item">Articles</li>
        <li className="Header__navigation__item">About</li>
        <li className="Header__navigation__item">Contact</li>
      </ul>
    </section>
    <section className="IndexPage__intro">
      <h2 className="IndexPage__intro__headline">
        Hi – I'm <strong>André</strong> and I design & develop software{" "}
        <span className="IndexPage__intro__headline__cursor">&nbsp;</span>
      </h2>
      <hr className="IndexPage__intro__delimiter" />
    </section>
    <section className="IndexPage__blog">
      <h3 className="IndexPage__blog__headline">Latest Article</h3>

      <div className="IndexPage__blog__meta">
        <span className="IndexPage__blog__articleDate">2nd October 2017</span>

        <ul className="IndexPage__blog__tags">
          <li className="IndexPage__blog__tags__tag">GraphQL</li>
          <li className="IndexPage__blog__tags__tag">React</li>
          <li className="IndexPage__blog__tags__tag">Apollo</li>
        </ul>
      </div>
      <div className="IndexPage__blog__article">
        <h4 className="IndexPage__blog__article__headline">
          react-apollo: An approach for handling errors globally
        </h4>
      </div>
    </section>
    <footer>
      <section className="footer__inner">
        <p className="footer__author">
          <strong>André König</strong>{" "}
          <small>
            | Freelance Software Architect &amp; Engineer{" "}
            <a className="footer__hire" href="#">
              Let's work together
            </a>
          </small>
        </p>
        <ul className="footer__icons">
          <li className="footer__icons__icon">
            <GitHubIcon />
          </li>
          <li className="footer__icons__icon">
            <TwitterIcon />
          </li>
        </ul>
      </section>
    </footer>
  </div>
);

export default IndexPage;
