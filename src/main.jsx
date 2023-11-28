import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage.jsx";
import CodingJourney from "./CodingJourney";
import ProjectsPage from "./ProjectsPage";
import GameSectionPage from "./GameSectionPage";
import DiscoveryProject from "./DiscoveryProject.jsx";
import FutureTimeline from "./FutureTimeline.jsx";
import { createHashRouter, RouterProvider, Route } from "react-router-dom";

// changed browser router to hash router might cause problems in the future- reason for change was to make refreshing not crash website
const router = createHashRouter([
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
  {
    path: "/PortfolioWebsite/DiscoveryProject",
    element: <DiscoveryProject />,
  },
  {
    path: "/PortfolioWebsite/FutureTimeline",
    element: <FutureTimeline />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
