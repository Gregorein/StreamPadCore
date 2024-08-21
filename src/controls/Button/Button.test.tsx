import { render, screen, fireEvent } from "@testing-library/react"

import Button from "./Button"

describe("Button Component", () => {
	it("renders the Button component", () => {
		render(<Button />)
		const buttonElement = screen.getByText(/Click Me/i)
		expect(buttonElement).toBeInTheDocument()
	})

	it("handles the click event", () => {
		const handleClick = jest.fn()
		render(<Button onClick={handleClick} />)
		const buttonElement = screen.getByText(/Click Me/i)
		fireEvent.click(buttonElement)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
