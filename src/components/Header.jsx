import iconSun from '../assets/icons/icon-sun.svg';
import iconMoon from '../assets/icons/icon-moon.svg';

export default function Header({ isThemeDark, setIsThemeDark }) {
    const handleDarkMode = () => {
        setIsThemeDark(!isThemeDark);
    }

    return (
        <header className="desktop-first-container flex flex-row justify-between items-center px-2 py-4">
            <h1 className="tracking-[1rem] text-5xl text-neutral-light-veryLightGray">TODO</h1>
            <button className="scale-125" onClick={() => handleDarkMode(!isThemeDark)}>
                <img src={isThemeDark ? iconSun : iconMoon} alt={isThemeDark ? 'Sun Icon' : 'Moon Icon'} />
            </button>
        </header>
    )
}