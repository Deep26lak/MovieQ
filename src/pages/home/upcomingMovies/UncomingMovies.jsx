import React, { useState } from "react";
import { Carousel, ContentWrapper, SwitchTabs } from "../../../components";
import useFetch from "../../../hooks/useFetch";

const UncomingMovies = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/upcoming`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "movie");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Upcoming Movies</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel endPoint={endPoint} data={data?.results} loading={loading} />
    </div>
  );
};

export default UncomingMovies;
