export default function Nav({ session, onOpenModal, onLogout }) {
    const open = (key) => (e) => { e.preventDefault(); onOpenModal(key) }

    return (
        <header className="nav">
            <div className="nav__container">

                <a className="nav__logo" href="#">
                    <svg className="nav__logo-mark" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.001 22.1321C11.821 22.1321 10.6925 21.9091 9.65734 21.5011L5.94198 23.9183C7.97408 25.2356 10.3989 26 13.001 26C17.8125 26 22.0139 23.3865 24.2615 19.5014L20.9121 17.5665C19.3318 20.2963 16.3808 22.1321 13.001 22.1321Z" fill="#1572D3" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.32359 3.31886L8.14952 13.0009L4.32359 22.6811L10.3646 18.7503L19.206 13.0009L10.3646 7.24964L4.32359 3.31886Z" fill="#1572D3" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.0009 3.86788C16.3808 3.86788 19.3317 5.70364 20.912 8.43346L24.2614 6.49857C22.012 2.61353 17.8124 0 13.0009 0C10.3969 0 7.97402 0.764426 5.94 2.08168L9.65727 4.49886C10.6924 4.09092 11.819 3.86788 13.0009 3.86788Z" fill="#1572D3" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.85944 21.1351L4.63229 16.663L6.08489 12.999L4.63229 9.33705L2.85944 4.86487C1.07134 7.09143 0 9.92037 0 13.001C0 16.0796 1.07134 18.9086 2.85944 21.1351Z" fill="#1572D3" />
                    </svg>
                    <span className="nav__logo-text">RENTCARS</span>
                </a>

                <nav className="nav__menu">
                    <a className="nav__link nav__link--active" href="#" onClick={open('signup')}>Become a renter</a>
                    <a className="nav__link" href="#deals">Rental deals</a>
                    <a className="nav__link" href="#how">How it work</a>
                    <a className="nav__link" href="#why">Why choose us</a>
                </nav>

                <div className="nav__actions">
                    {session && session.name ? (
                        <>
                            <span className="nav__hello">Hi, {session.name.split(' ')[0]}</span>
                            <a className="nav__btn nav__btn--logout" href="#" onClick={(e) => { e.preventDefault(); onLogout() }}>Log out</a>
                        </>
                    ) : (
                        <>
                            <a className="nav__btn nav__btn--ghost" href="#" onClick={open('signin')}>Sign in</a>
                            <a className="nav__btn nav__btn--solid" href="#" onClick={open('signup')}>Sign up</a>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
