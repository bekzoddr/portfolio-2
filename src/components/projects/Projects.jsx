import React from "react";
import { Container } from "@mui/material";
import card1 from "../../assets/images/card1.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
const Projects = () => {
  return (
    <section className="projects">
      <Container maxWidth="lg">
        <br />
        <br />
        <br />
        <br />
        <div className="my__projects">
          <div className="project__title">
            <h4>Recent Projects</h4>
            <h2>My Portfolio</h2>
          </div>
          <br />
          <br />
          <br />
          <div className="recent__projects">
            <div className="project__card">
              <img width={400} src={card1} alt="" />
              <div className="card__body">
                <h2>A House</h2>
                <p>
                  Lorem ipsum dolor sit amet Repudiandae ad voluptatum
                  necessitatibus itaque ducimus?
                </p>
                {/* <Link> */}
                View In Dribbble <MdArrowOutward />
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
