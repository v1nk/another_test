import React from "react";
import ReactDOM from "react-dom";
import DegreeComparisonRoot from "./components/DegreeComparisonRoot";
import StickyHelper from "./helpers/StickyHelper";

ReactDOM.render(
  <DegreeComparisonRoot />,
  document.getElementById("degree-comparison")
);

window.addEventListener("DOMContentLoaded", () => {
  window.sticky = new StickyHelper();
  window.sticky.init();
});
