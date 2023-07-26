import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage.jsx";
import CodingJourney from "./CodingJourney";
import ProjectsPage from "./ProjectsPage";
import GameSectionPage from "./GameSectionPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/PortfolioWebsite",
    element: <HomePage />,
  },
  {
    path: "/PortfolioWebsite/CodingJourney",
    element: <CodingJourney />,
  },
  {
    path: "/PortfolioWebsite/ProjectsPage",
    element: <ProjectsPage />,
  },
  {
    path: "/PortfolioWebsite/GameSectionPage",
    element: <GameSectionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
