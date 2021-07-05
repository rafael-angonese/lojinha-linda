import { FC, useState, useEffect } from 'react';

const NavbarRoot: FC = ({ children }) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = 0;
            const { scrollTop } = document.documentElement;
            const scrolled = scrollTop > offset;

            if (hasScrolled !== scrolled) {
                setHasScrolled(scrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

    return (
        <nav
            className={`sticky top-0 bg-white z-40 transition-all duration-150 ${
                hasScrolled ? '' : 'bg-gray-50'
            }`}
        >
            {children}
        </nav>
    );
};

export default NavbarRoot;
