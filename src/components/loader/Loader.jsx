import React from "react";
import { Spinner, Container } from "reactstrap";
import "./Loader.scss";

const Loader = () => {
  return (
    <Container className="themed-container text-center" fluid={true}>
      <Spinner
        animation="border"
        color="success"
        className="icon-spinner"
      />
    </Container>
  );
};

export default Loader;
