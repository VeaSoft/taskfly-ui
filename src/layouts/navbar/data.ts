import React from "react"

export interface NavbarProps {
  title: string
  url: string
}

export const navbarData: NavbarProps[] = [
    {
        title: "Pricing",
        url: "pricing",
    },
    {
        title: "Get Started",
        url: "login",
    },
]