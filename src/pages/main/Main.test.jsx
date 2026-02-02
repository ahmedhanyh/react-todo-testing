import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Main from "./index.jsx";

describe("Todos main page test suite", () => {
    test("Todos main page renders successfully", () => {
        render(<Main />);
        const heading = screen.getByText(/to-do app/i);
        const inputField = screen.getByPlaceholderText(/enter a new task/i);
        const todosListHeading = screen.getByText(/no todos yet/i);
        expect(heading).toBeInTheDocument();
        expect(inputField).toBeInTheDocument();
        expect(todosListHeading).toBeInTheDocument();
    });
    test("A todo is added when the add button is clicked and the input field filled", () => {
        render(<Main />);
        const inputField = screen.getByPlaceholderText(/enter a new task/i);
        fireEvent.change(inputField, { target: { value: "Some task" } });
        const addButton = screen.getByText("Add");
        fireEvent.click(addButton);
        const todosListHeading = screen.getByText(/let's get some work done/i);
        const taskText = screen.getByText(/some task/i);
        expect(todosListHeading).toBeInTheDocument()
        expect(taskText).toBeInTheDocument()
    });
    test("A todo is removed when the delete button is clicked", () => {
        render(<Main />);
        const inputField = screen.getByPlaceholderText(/enter a new task/i);
        fireEvent.change(inputField, { target: { value: "Some task" } });
        const addButton = screen.getByText("Add");
        fireEvent.click(addButton);
        const deleteButton = screen.getByText("Delete");
        fireEvent.click(deleteButton);
        expect(screen.queryByText(/some task/i)).not.toBeInTheDocument()
    });
});