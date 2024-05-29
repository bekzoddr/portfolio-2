import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import me from "../../assets/images/me.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="xl">
        <div className="hero">
          <div className="hero__title" data-aos="fade-up">
            <h6 className="name">Hey, I'm Bekzod</h6>
            <h2 className="hero__content">
              I am <span> Frontend Developer</span> <br /> and i create websites
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
          <div className="hero__image" data-aos="fade-left">
            <img width={500} src={me} alt="Bekzod" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
