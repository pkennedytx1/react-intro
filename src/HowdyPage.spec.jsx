import { render, screen } from "@testing-library/react"
import React from "react";
import { Howdy } from "./HowdyPage"

test('Howdy page loads without error', async () => {
    render(<Howdy />);
    const element = screen.getByText('Howdy Hey!', { exact: true });
    expect(element).toContainHTML('<h1>Howdy Hey!</h1>');
})