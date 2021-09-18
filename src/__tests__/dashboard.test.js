import React from 'react';
import '@testing-library/jest-dom'
import TopBar from "../components/topBar";
import SideBar from "../components/sideBar";
import { render, fireEvent } from '@testing-library/react';

describe("dashboard", () => {

    test("top bar should be visible to user", () => {
        const component = render(<TopBar/>);
        const topBarElement = component.getByTitle('topBar');
        expect(topBarElement).toBeInTheDocument();
    });

    test("side bar should be visible to user", () => {
        const component = render(<SideBar/>);
        const sideBarElement = component.getByTitle('sideBar');
        expect(sideBarElement).toBeInTheDocument();
    });

    test("logout button should be clickable", () => {
        const component = render(<TopBar/>);
        const logoutBtElement = component.getByTitle('logOutBT');
        fireEvent(logoutBtElement, new MouseEvent('click'));
    });
})