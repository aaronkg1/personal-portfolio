import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import ProjectCard from "../ProjectCard";

afterEach(() => {
  cleanup();
});

test("should render ProjectCard component", () => {
  render(
    <ProjectCard
      project={{
        title: "Test Title",
        description: "Test Description",
        url: "https://testurl.test",
        liveLink: "",
        repository: "",
      }}
    />
  );
  const ProjectCardElement = screen.getByTestId("ProjectCard-1");
  const cardImg = screen.getByTestId("card-image");
  expect(ProjectCardElement).toBeInTheDocument();
  expect(ProjectCardElement).toHaveTextContent("Test Title");
  expect(ProjectCardElement).toHaveTextContent("Test Description");
  expect(ProjectCardElement).toContainElement(cardImg);
});

test("should render multiple todos", () => {
  const projects = [
    {
      title: "Test One",
      description: "Test One Is Better",
      url: "https://testOne.faketest",
      liveLink: "",
      repository: "",
    },
    {
      title: "Test Two",
      description: "Test Two Is Better",
      url: "https://testTwo.faketest",
      liveLink: "",
      repository: "",
    },
  ];

  render(<ProjectCard project={projects[0]} />);
  const ProjectCardElement = screen.getByTestId("ProjectCard-1");
  expect(ProjectCardElement).toContainHTML("<li");
});

test("matches snapshot", () => {
  const project = {
    title: "SnapShot Test",
    description: "Snapshot updates",
    url: "https://testOne.faketest",
    liveLink: "",
    repository: "",
  };
  const tree = renderer.create(<ProjectCard project={project} />).toJSON();
  expect(tree).toMatchSnapshot();
});
