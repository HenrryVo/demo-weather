import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Col, Row } from "reactstrap";
import "./CardView.scss";

const CardView = ({ data }) => {
  const { date, day, tempMin, tempMax } = data;

  return (
    <Col className="mb-4">
      <Card>
        <CardBody className="card-body align-center">
          <Row xs="1" md="1" lg="2" xl="2" className="mb-3">
            <h5 className="col-7 m-0 pl-0 ">{day}</h5>
            <span className="col-5 m-auto">{date}</span>
          </Row>
          <Row xs="1" md="1" lg="2" xl="2">
            <div className="col d-flex">
              <span>From</span>
              <span>
                <strong>{tempMin}</strong>
                <sup> o</sup>C
              </span>
            </div>
            <div className="col d-flex">
              <span>to</span>
              <span>
                <strong>{tempMax}</strong>
                <sup> o</sup>C
              </span>
            </div>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

CardView.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    day: PropTypes.string,
    tempMin: PropTypes.string | PropTypes.number,
    tempMax: PropTypes.string | PropTypes.number,
  }),
};

export default CardView;
