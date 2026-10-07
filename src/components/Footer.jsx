const COLUMNS = [
    {
        heading: 'Our Product',
        links: ['Career', 'Car', 'Packages', 'Features', 'Priceline']
    },
    {
        heading: 'Resources',
        links: ['Download', 'Help Centre', 'Guides', 'Partner Network', 'Cruises', 'Developer']
    },
    {
        heading: 'About Rentcars',
        links: ['Why choose us', 'Our Story', 'Investor Relations', 'Press Center', 'Advertise']
    }
]

const SOCIALS = [
    {
        label: 'Facebook',
        svg: <path d="M13.5 21.5v-8h2.7l.4-3.1h-3.1V8.4c0-.9.3-1.5 1.6-1.5h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4v3.1h2.7v8h3.4z" />
    },
    {
        label: 'Instagram',
        svg: <>
            <rect x="4.6" y="4.6" width="14.8" height="14.8" rx="4.2" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="16.7" cy="7.3" r="1.1" fill="currentColor" />
        </>
    },
    {
        label: 'YouTube',
        svg: <>
            <rect x="3.4" y="6.2" width="17.2" height="11.6" rx="3.2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M10.4 9.6v4.8l4.3-2.4-4.3-2.4z" fill="currentColor" />
        </>
    }
]

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__grid">

                    <div className="footer__brand">
                        <a className="footer__logo" href="#">
                            <svg className="footer__logo-mark" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.001 22.1321C11.821 22.1321 10.6925 21.9091 9.65734 21.5011L5.94198 23.9183C7.97408 25.2356 10.3989 26 13.001 26C17.8125 26 22.0139 23.3865 24.2615 19.5014L20.9121 17.5665C19.3318 20.2963 16.3808 22.1321 13.001 22.1321Z" fill="#FFFFFF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.32359 3.31886L8.14952 13.0009L4.32359 22.6811L10.3646 18.7503L19.206 13.0009L10.3646 7.24964L4.32359 3.31886Z" fill="#FFFFFF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.0009 3.86788C16.3808 3.86788 19.3317 5.70364 20.912 8.43346L24.2614 6.49857C22.012 2.61353 17.8124 0 13.0009 0C10.3969 0 7.97402 0.764426 5.94 2.08168L9.65727 4.49886C10.6924 4.09092 11.819 3.86788 13.0009 3.86788Z" fill="#FFFFFF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.85944 21.1351L4.63229 16.663L6.08489 12.999L4.63229 9.33705L2.85944 4.86487C1.07134 7.09143 0 9.92037 0 13.001C0 16.0796 1.07134 18.9086 2.85944 21.1351Z" fill="#FFFFFF" />
                            </svg>
                            <span className="footer__logo-text">RENTCARS</span>
                        </a>

                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <svg className="footer__contact-ic" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.5S19 15.6 19 10.3A7 7 0 1 0 5 10.3C5 15.6 12 21.5 12 21.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><circle cx="12" cy="10.2" r="2.6" stroke="currentColor" strokeWidth="1.7" /></svg>
                                <span>25566 Hc 1, Glenallan,<br />Alaska, 99588, USA</span>
                            </li>
                            <li className="footer__contact">
                                <svg className="footer__contact-ic" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16.9v2.6a1.7 1.7 0 0 1-1.9 1.7 17 17 0 0 1-7.4-2.6 16.7 16.7 0 0 1-5.1-5.1A17 17 0 0 1 4 6.1 1.7 1.7 0 0 1 5.7 4.2h2.6a1.7 1.7 0 0 1 1.7 1.5c.1.9.3 1.7.6 2.5a1.7 1.7 0 0 1-.4 1.8l-1.1 1.1a13.6 13.6 0 0 0 5.1 5.1l1.1-1.1a1.7 1.7 0 0 1 1.8-.4c.8.3 1.6.5 2.5.6a1.7 1.7 0 0 1 1.4 1.6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                                <span>+603 4784 273 12</span>
                            </li>
                            <li className="footer__contact">
                                <svg className="footer__contact-ic" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" /><path d="m4.8 7.2 7.2 5.3 7.2-5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <span>rentcars@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {COLUMNS.map((col) => (
                        <div className="footer__col" key={col.heading}>
                            <h4 className="footer__heading">{col.heading}</h4>
                            <ul className="footer__list">
                                {col.links.map((link) => (
                                    <li key={link}><a className="footer__link" href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="footer__col footer__col--social">
                        <h4 className="footer__heading">Follow Us</h4>
                        <div className="footer__socials">
                            {SOCIALS.map((s) => (
                                <a className="footer__social" href="#" aria-label={s.label} key={s.label}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">{s.svg}</svg>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">Copyright 2023 - Rentcars, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
