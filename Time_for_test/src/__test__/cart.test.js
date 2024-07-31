import { Provider } from "react-redux";
import Cart from "../Cart"
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import {render ,screen} from "@testing-library/react";

test('Check for the cart component', () =>
{
    render(
        <Provider store={appStore}><Cart/></Provider>
    )

    //quering 
    const heading =screen.getByRole("heading");

    //assertion 
    expect(heading).toBe("Cart");
    

})