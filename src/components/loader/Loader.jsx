import React from "react";
import { Spinner, Container } from "reactstrap";

const Loader = () => {
  return (
    <Container className="themed-container text-center mt-5" fluid={true}>
      <Spinner
        animation="border"
        color="success"
        style={{ width: "4rem", height: "4rem" }}
      />
    </Container>
  );
};

export default Loader;
