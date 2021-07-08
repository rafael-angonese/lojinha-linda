import { createContext, ReactNode, useState } from 'react';

type SideBarContextType = {
    displaySidebar: boolean;
    toggleSideBar: () => void;
};

type SideBarContextProviderProps = {
    children: ReactNode;
};

export const SideBarContext = createContext({} as SideBarContextType);

export function SideBarContextProvider(props: SideBarContextProviderProps) {
    const [displaySidebar, setDisplaySidebar] = useState(false);

    function toggleSideBar() {
        setDisplaySidebar(!displaySidebar);
    }

    return (
        <SideBarContext.Provider value={{ displaySidebar, toggleSideBar }}>
            {props.children}
        </SideBarContext.Provider>
    );
}
