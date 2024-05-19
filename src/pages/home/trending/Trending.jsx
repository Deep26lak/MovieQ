import React from "react";
import { ContentWrapper, SwitchTabs } from "../../../components";

const Trending = () => {
  const onTabChange = (tab, index) => {};
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
