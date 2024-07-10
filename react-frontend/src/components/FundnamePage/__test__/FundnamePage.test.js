import React from "react";
import { render, screen } from "@testing-library/react";

import FundnamePage from "../FundnamePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders fundname page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FundnamePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("fundname-datatable")).toBeInTheDocument();
    expect(screen.getByRole("fundname-add-button")).toBeInTheDocument();
});
