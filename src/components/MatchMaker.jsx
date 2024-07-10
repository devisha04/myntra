import React, { useContext } from "react";
import { MatchMakerContext } from "../context/MatchMakerContext";
import Dummy from "./Dummy";
import ProductSelector from "../pages/match/ProductSelector";


const MatchMaker = () => {
  const { selectedProducts } = useContext(MatchMakerContext);

  return (
    <div className="matchmaker-container">
      <h2>Matchmaker</h2>
      <div className="product-selector">
        <ProductSelector />
      </div>
      <div className="dummy-display">
        <Dummy selectedProducts={selectedProducts} />
      </div>
    </div>
  );
};

export default MatchMaker;
