import React, { useEffect, useState } from "react";

// import libs
import { Container, Row } from "reactstrap";
import { toast } from "react-toastify";

// import actions and constants
import { fetchDataWeather } from "services";
import { isEmptyVal } from "helpers/Ultilities";

// import comon components
import { Loader, SearchBar, CardView } from "components";

// import style
import "./style.scss";

const HomePage = (props) => {
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const onFetchData = () => {
    fetchDataWeather(
      !isEmptyVal(searchValue) ? searchValue : null,
      (status, res) => {
        if (status) {
          setForecastData(res);
        } else {
          toast.error(res);
        }
        setIsLoading(false);
      }
    );
  };

  const onSearch = (evt) => {
    if ((evt && evt.charCode === 13) || typeof evt == "undefined") {
      evt && evt.charCode === 13 && evt.preventDefault();
      setIsLoading(true);
      onFetchData();
    }
  };

  useEffect(() => {
    onFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="themed-container mt-5" data-testid="list">
      <SearchBar onChange={setSearchValue} onSubmit={onSearch} />
      {!isEmptyVal(forecastData) ? (
        <>
          <h1 className="mb-5">Weather of {forecastData.city}</h1>
          <Row xs="1" sm="2" md="2" lg="3" xl="5">
            {forecastData.list.map((item, key) => (
              <CardView key={key} data={item} />
            ))}
          </Row>
        </>
      ) : isLoading ? (
        <Loader />
      ) : (
        <h1 className="text-center">Opps, city not found!</h1>
      )}
    </Container>
  );
};

export default HomePage;
