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

const Wrapper = styled.section`padding-top: 1rem;`;

const Headline = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  font-size: 70%;
  font-weight: 800;
  text-transform: uppercase;
`;

const Articles = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Article = styled.li``;

const ArticleMeta = styled.div`
  align-items: center;
  display: flex;
  line-height: 0.9em;
`;

const ArticlePublicationDate = styled.span`
  color: #f44336;
  font-size: 70%;
  font-weight: 100;
`;

const ArticleTags = styled.ul`
  font-size: 70%;
  list-style-type: none;
  margin: 0 0 0 1.5em;
  padding: 0;
`;

const ArticleTag = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  color: rgba(0, 0, 0, 0.4);
  display: inline-block;
  font-size: 80%;
  margin: 0 1em 0 0;
  padding: 0.2em 0.4em;
`;

const ArticleHeadline = styled.a`
  border-bottom: 1px solid transparent;
  font-size: 90%;
  display: inline-block;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  padding: 0;
  padding-bottom: 0.4em;
  margin: 0.4em 0 0 0;
  transition: border-color 0.2s ease-in-out, color 0.4s ease-in-out;

  &:hover {
    border-bottom: 1px solid #f44336;
    text-decoration: none;
    color: #000;
  }
`;

const LatestArticles = () => (
  <Wrapper>
    <Headline>Latest Articles</Headline>
    <Articles>
      <Article>
        <ArticleMeta>
          <ArticlePublicationDate>13th February 2018</ArticlePublicationDate>
          <ArticleTags>
            <ArticleTag>GraphQL</ArticleTag>
            <ArticleTag>Error handling</ArticleTag>
          </ArticleTags>
        </ArticleMeta>
        <ArticleHeadline
          href="https://dev.to/andre/handling-errors-in-graphql--2ea3"
          target="_blank"
        >
          Handling errors in GraphQL
        </ArticleHeadline>
      </Article>
      <Article>
        <ArticleMeta>
          <ArticlePublicationDate>13th February 2018</ArticlePublicationDate>
          <ArticleTags>
            <ArticleTag>GraphQL</ArticleTag>
            <ArticleTag>Prisma</ArticleTag>
            <ArticleTag>Kubernetes</ArticleTag>
          </ArticleTags>
        </ArticleMeta>
        <ArticleHeadline
          href="https://dev.to/andre/deploying-a-prisma-cluster-to-kubernetes--3lbi"
          target="_blank"
        >
          Deploying a Prisma cluster to Kubernetes
        </ArticleHeadline>
      </Article>
      <Article>
        <ArticleMeta>
          <ArticlePublicationDate>10th October 2017</ArticlePublicationDate>
          <ArticleTags>
            <ArticleTag>Security</ArticleTag>
            <ArticleTag>Linux</ArticleTag>
            <ArticleTag>Docker</ArticleTag>
            <ArticleTag>Firewall</ArticleTag>
          </ArticleTags>
        </ArticleMeta>
        <ArticleHeadline
          href="https://dev.to/andre/docker-restricting-in--and-outbound-network-traffic-67p"
          target="_blank"
        >
          Docker: Restricting in- and outbound network traffic
        </ArticleHeadline>
      </Article>
      <Article>
        <ArticleMeta>
          <ArticlePublicationDate>2nd October 2017</ArticlePublicationDate>
          <ArticleTags>
            <ArticleTag>GraphQL</ArticleTag>
            <ArticleTag>React</ArticleTag>
            <ArticleTag>Apollo</ArticleTag>
          </ArticleTags>
        </ArticleMeta>
        <ArticleHeadline
          href="https://dev.to/andre/react-apollo-an-approach-to-handle-errors-globally-jg"
          target="_blank"
        >
          react-apollo: An approach for handling errors globally
        </ArticleHeadline>
      </Article>
    </Articles>
  </Wrapper>
);

export { LatestArticles };

/*
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
          
        </h4>
      </div>
    </section>*/
