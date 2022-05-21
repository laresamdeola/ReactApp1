import React from "react";

let date = new Date();
let year = date.getFullYear();
let copyright = year;

const Footer = () => {
  return <p>{copyright}</p>;
};

export { Footer };
