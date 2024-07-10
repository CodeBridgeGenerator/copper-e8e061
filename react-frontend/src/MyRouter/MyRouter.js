import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';
import WhatToDoPage from '../components/WhatTodo';

import UserProjectLayoutPage from "../components/UsersPage/UserProjectLayoutPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import CustomerProjectLayoutPage from "../components/CustomersPage/CustomerProjectLayoutPage";
import SingleCustomersPage from "../components/CustomersPage/SingleCustomersPage";
import ProductProjectLayoutPage from "../components/ProductsPage/ProductProjectLayoutPage";
import SingleProductsPage from "../components/ProductsPage/SingleProductsPage";
import PriceProjectLayoutPage from "../components/PricePage/PriceProjectLayoutPage";
import SinglePricePage from "../components/PricePage/SinglePricePage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
<Route path="/usersLayout/users" exact element={<UserProjectLayoutPage />} />
<Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
<Route path="/users" exact element={<UserProjectLayoutPage />} />
<Route path="/customers/:singleCustomersId" exact element={<SingleCustomersPage />} />
<Route path="/customers" exact element={<CustomerProjectLayoutPage />} />
<Route path="/products/:singleProductsId" exact element={<SingleProductsPage />} />
<Route path="/products" exact element={<ProductProjectLayoutPage />} />
<Route path="/price/:singlePriceId" exact element={<SinglePricePage />} />
<Route path="/price" exact element={<PriceProjectLayoutPage />} />
<Route path="/fundname/:singleFundnameId" exact element={<SingleFundnamePage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
