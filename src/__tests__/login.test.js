import React from 'react';
import '@testing-library/jest-dom'
import LoginForm from "../components/login";
import { render, fireEvent } from '@testing-library/react';

describe("login", () => {
    
    test("login form should appear in document", () =>{
        const component = render(<LoginForm/>);
        const loginFormElement = component.getByTitle('loginForm')
        expect(loginFormElement).toBeInTheDocument();
    })

    test("login form should contain eamil input element", () =>{
        const component = render(<LoginForm/>);
        const emailInputElement = component.getByPlaceholderText('Email');
        expect(emailInputElement).toBeInTheDocument();
    });

    test("login form should contain password input element", () =>{
        const component = render(<LoginForm/>);
        const passwordInputElement = component.getByPlaceholderText('Password');
        expect(passwordInputElement).toBeInTheDocument();
    });
    
    test("login form should contain login button input element", () =>{
        const component = render(<LoginForm/>);
        const loginSubmitElement = component.getByDisplayValue('Login');
        expect(loginSubmitElement.getAttribute("type")).toBe("submit");
    });

    test("email element should accept text input", () => {
        const component = render(<LoginForm/>);
        const emailInputElement = component.getByPlaceholderText('Email');
        expect(emailInputElement.value).toMatch("");
        fireEvent.change(emailInputElement, {target: {value: 'testing'}});
        expect(emailInputElement.value).toMatch("testing");

    });

    test("password element should accept text input", () => {
        const component = render(<LoginForm/>);
        const emailInputElement = component.getByPlaceholderText('Password');
        expect(emailInputElement.value).toMatch("");
        fireEvent.change(emailInputElement, {target: {value: 'testing'}});
        expect(emailInputElement.value).toMatch("testing");
    });

    test("login submit button should be clickable", () => {
        const component = render(<LoginForm/>);
        const loginSubmitElement = component.getByDisplayValue('Login');
        fireEvent(loginSubmitElement, new MouseEvent('click'));
    });

});