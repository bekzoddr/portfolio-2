import React from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import me from "../../assets/images/me.jpg";
const Hero = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <div className="hero">
          <div className="hero__title">
            <h6 className="name">Hey, I'm Bekzod</h6>
            <h2 className="hero__content">
              I create <span> product design</span> <br /> and brand experience
            </h2>
            <p className="hero__info">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <br />
            <Button className="hero__button" variant="contained">
              Get Touch
            </Button>
          </div>
          <div className="hero__image">
            <img width={600} src={me} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
