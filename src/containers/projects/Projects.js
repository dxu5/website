import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import { HoverCard } from "react-png-hovercard";
import { Fade } from "react-reveal";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
        {
        user(login: "${openSource.githubUserName}") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
        `,
      })
      .then((result) => {
        setrepoFunction(result.data.user.pinnedItems.edges);
        console.log(result);
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="opensource">
        <h1 className="project-title">Personal Projects</h1>
        <div className="repo-cards-div-main">
          <a href="https://dxsorting.herokuapp.com/" target="_blank">
            <HoverCard
              maxWidth={400}
              animationSpeed={500}
              height={300}
              margin={10}
              front={
                <div className="front">
                  <img
                    src={require("../../assets/images/dxsorting2.png")}
                    alt=""
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
              }
              back={
                <div className="back">
                  <h3>dxSorting visualizer</h3>
                  <p>
                    Sorting visualizer project using React/Redux in order to
                    simulate popular sorting algorithms, including heap sort,
                    merge sort, quick sort, and bubble sort.
                  </p>
                </div>
              }
            />
          </a>
          <a
            href="https://dxcoronavirusdatagraph.herokuapp.com/"
            target="_blank"
          >
            <HoverCard
              maxWidth={400}
              animationSpeed={500}
              height={300}
              margin={10}
              front={
                <div className="front">
                  <img
                    src={require("../../assets/images/covid3.png")}
                    alt=""
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
              }
              back={
                <div className="back">
                  <h3>COVID-19 Data Visualization</h3>
                  <p>
                    This web application is a force-directed graph that parses
                    data from the Center for Disease Control on the Covid-19
                    pandemic. It compares coronavirus data from states in the US
                    by physical distance in order to visualize how distance
                    affects coronavirus R naught values and transmission.
                  </p>
                </div>
              }
            />
          </a>
          <a href="https://dxvoyage.herokuapp.com/" target="_blank">
            <HoverCard
              maxWidth={400}
              animationSpeed={500}
              height={300}
              margin={10}
              front={
                <div className="front">
                  <img
                    src={require("../../assets/images/dxvoyage2.png")}
                    alt=""
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
              }
              back={
                <div className={"back"}>
                  <h3>dxVoyage E-Commerce Site</h3>
                  <p>
                    Created a full-stack web application E-commerce site using
                    React, Redux, MongoDB, Express, Ant-Design, and Node.js. It
                    was built with a full back-end API server that is capable of
                    image upload, authentication, Paypal Checkout, and cloud
                    functions
                  </p>
                </div>
              }
            />
          </a>
          <HoverCard
            maxWidth={400}
            animationSpeed={500}
            height={300}
            margin={10}
            front={
              <div className="front">
                <img
                  src="https://images.unsplash.com/photo-1498910265115-9fb541931cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1089&q=80"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            }
            back={
              <div className={"back"}>
                <h3>Page-Rank and Prim Jarnik Graph Visualizer</h3>
                <p>
                  This application is a visualization on the famous Page-Rank
                  algorithm developed by Google Search and the Prim Jarnik
                  Minimum Spanning Tree Algorithm. In addition to the normal
                  Page-rank algorithm, I added functionality to blacklist
                  websites, causing lower appearance.
                </p>
              </div>
            }
          />
        </div>
        <Button
          text={"See More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </Fade>
  );
}
