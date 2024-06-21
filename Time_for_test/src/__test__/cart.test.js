import Cart from "../Cart"
import {render ,screen} from "@testing-library/react";

test('Check for the cart component', () =>
{
    render(<Cart/>)

    //quering 
    const heading =screen.getByRole("heading");

    //assertion 
    expect(heading).toBe("Cart");

    

})