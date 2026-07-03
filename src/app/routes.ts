import { createBrowserRouter, redirect } from "react-router";
import { Root } from "./Root";
import { StepPage } from "./StepPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => redirect("/step/0"),
      },
      {
        path: "step/:step",
        Component: StepPage,
      },
    ],
  },
]);
