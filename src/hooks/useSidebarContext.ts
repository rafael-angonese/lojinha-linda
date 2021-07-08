import { useContext } from 'react';
import { SideBarContext } from '../contexts/SideBarContext';

export function useSidebarContext() {
    const context = useContext(SideBarContext);

    return context;
}
