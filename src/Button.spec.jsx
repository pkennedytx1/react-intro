import { render } from "@testing-library/react";
import React from "react";
import { Button } from "./Button.styles";

test('Loads Button without Error', async () => {
    const props = {
        button: {
            primary: 'blue',
            secondary: 'white',
        },
        text: {
            primary: 'red',
            secondary: 'white',
        }
    }
    render(<Button theme={props} />)
    expect(<Button />).toBeTruthy();
})