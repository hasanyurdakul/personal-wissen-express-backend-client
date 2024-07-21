import React from "react";
import background from "../assets/images/background.jpg";
import SitemapCard from "../components/SitemapCard";

const routes = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/enter-new-password",
];

function Sitemap() {
  return (
    <div
      className="h-[100vh] flex justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4">
        {routes.map((route) => (
          <SitemapCard key={route} path={route} />
        ))}
      </div>
    </div>
  );
}

export default Sitemap;
