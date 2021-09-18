import React from 'react';
import '@testing-library/jest-dom'
import DiamondCard from '../components/cards/diamondCard';
import { render, fireEvent } from '@testing-library/react';

describe("gemCard", () => {
    test("gem cards should be displayed in the document", () =>{
        const component = render(<DiamondCard/>);
        const cardElement = component.getByTitle('dCard');
        expect(cardElement).toBeInTheDocument();
    });

    test("+ button for buying should be clickable", ()=>{ 
        const component = render(<DiamondCard/>);
        const buttonElement = component.getByTitle("plusBuyBt");
        fireEvent(buttonElement, new MouseEvent("click"));
    });
    test("- button for buying should be clickable", ()=>{ 
        const component = render(<DiamondCard/>);
        const buttonElement = component.getByTitle("minusBuyBt");
        fireEvent(buttonElement, new MouseEvent("click"));
    });
    test("+ button for selling should be clickable", ()=>{ 
        const component = render(<DiamondCard/>);
        const buttonElement = component.getByTitle("plusSellBt");
        fireEvent(buttonElement, new MouseEvent("click"));
    });
    test("- button for selling should be clickable", ()=>{ 
        const component = render(<DiamondCard/>);
        const buttonElement = component.getByTitle("minusSellBt");
        fireEvent(buttonElement, new MouseEvent("click"));
    });

    test("gem image should be visible", ()=>{
        const component = render(<DiamondCard/>);
        const imgElement = component.getByRole("img");
        expect(imgElement).toBeInTheDocument();
    });
})