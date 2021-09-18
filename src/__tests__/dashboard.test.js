import React from 'react';
import '@testing-library/jest-dom'
import TopBar from "../components/topBar";
import SideBar from "../components/sideBar";
import { render, fireEvent } from '@testing-library/react';

describe("dashboard", () => {

    test("top bar should be visible to user", () => {
        const component = render(<TopBar/>);
        const topBarElement = component.getByTestId('topBar');
        expect(topBarElement).toBeInTheDocument();
    });

    test("side bar should be visible to user", () => {
        const component = render(<SideBar/>);
        const sideBarElement = component.getByTestId('sideBar');
        expect(sideBarElement).toBeInTheDocument();
    });

    test("logout button should be clickable", () => {
        const component = render(<TopBar/>);
        const logoutBtElement = component.getByTestId('logOutBT');
        fireEvent(logoutBtElement, new MouseEvent('click'));
    });

    test("company logo should visible", () => {
        const component = render(<TopBar/>);
        const logoElement = component.getByRole("img");
        expect(logoElement).toBeInTheDocument();
    });

    test("user balance should visible", () => {
        const component = render(<TopBar/>);
        const balanceElement = component.getByTestId("userBalance");
        expect(balanceElement).toBeInTheDocument();
    });

    test("nex day button should visible", () => {
        const component = render(<TopBar/>);
        const nextDayBtElement = component.getByText("Next Day");
        expect(nextDayBtElement).toBeInTheDocument();
    });

    test("today button should visible", () => {
        const component = render(<TopBar/>);
        const todayBtElement = component.getByText("Today");
        expect(todayBtElement).toBeInTheDocument();
    });
})