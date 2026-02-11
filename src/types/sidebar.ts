import React from "react";

export type SidebarSubItem = {
    name: string;
    icon: React.ReactNode;
    visited: string;
};

export type SidebarItem =
    | {
        name: string;
        icon: React.ReactNode;
        dropdown: true;
        items: SidebarSubItem[];
    }
    | {
        name: string;
        icon: React.ReactNode;
        dropdown: false;
        visited: string;
    };
