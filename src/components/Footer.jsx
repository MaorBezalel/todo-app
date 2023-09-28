export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center w-full h-16 px-5 mt-14 mobileBig:mt-7">
            <p className="mt-10 justify-self-center self-center text-base font-normal text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue mobile:text-sm">Drag and drop to reorder list</p>
            <p className="text-center text-sm font-normal text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue mt-20 mobileBig:mt-8">
                Challenge and Design by <a className="text-base font-bold hover:text-base hover:text-neutral-light-veryDarkGrayishBlue dark:hover:text-neutral-dark-lightGrayishBlueHover" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a><br/> Coded by <a className="text-base font-bold hover:text-base hover:text-neutral-light-veryDarkGrayishBlue dark:hover:text-neutral-dark-lightGrayishBlueHover" href="https://github.com/MaorBezalel" target="_blank" rel="noreferrer">Maor Bezalel</a>
            </p>
        </footer>
    );
}