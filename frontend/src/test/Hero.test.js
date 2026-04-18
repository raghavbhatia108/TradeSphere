import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Hero from "../landing_page/home/Hero";

describe("Hero Component", ()=>{
    test("Renders Hero Image", ()=>{
        render(<Hero/>);
        const HeroImage = screen.getByAltText("Hero Image");
        expect(HeroImage).toBeInTheDocument();
        expect(HeroImage).toHaveAttribute("src", "media/images/homeHero.png")
    });
    test("Renders Signup Button", ()=>{
        render(<Hero/>);
        const SignupButton = screen.getByRole("button", {name:"Signup Now"});
        expect(SignupButton).toBeInTheDocument();
        expect(SignupButton).toHaveClass("btn")
    });
})