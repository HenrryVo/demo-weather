import React from "react";
import { FormGroup, Input, Button } from "reactstrap";
import PropTypes from "prop-types";
import "./SearchBar.scss";

const SearchBar = ({onChange, onSubmit}) => {
  return (
    <FormGroup className="w-50 d-flex mb-5 search-bar">
      <Input
        placeholder="Type a city..."
        onChange={(evt) => onChange(evt.target.value)}
        onKeyPress={(evt) => onSubmit(evt)}
      />
      <Button onClick={() => onSubmit()}>Search</Button>
    </FormGroup>
  );
};
SearchBar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SearchBar;
