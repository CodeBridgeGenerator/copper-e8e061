import React from "react";
import { render, screen } from "@testing-library/react";

import PricePage from "../PricePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders price page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PricePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("price-datatable")).toBeInTheDocument();
    expect(screen.getByRole("price-add-button")).toBeInTheDocument();
});
