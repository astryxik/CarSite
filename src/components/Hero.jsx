export default function Hero({ onSearch }) {
    function submit(e) {
        e.preventDefault()
        onSearch()
    }

    return (
        <main className="hero">
            <svg className="hero__decor" viewBox="0 -123 3210 943" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                    <g id="heroDecoArt" transform="translate(870 -123) scale(0.97)" opacity="0.07">
                        <path fillRule="evenodd" clipRule="evenodd" d="M430.338 704.17C391.28 704.17 353.925 696.741 319.662 683.153L196.682 763.664C263.946 807.538 344.208 833 430.338 833C589.601 833 728.671 745.949 803.065 616.547L692.2 552.101C639.891 643.024 542.213 704.17 430.338 704.17Z" fill="#1572D3" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M143.113 77.5434L269.753 400.031L143.113 722.456L343.074 591.531L635.728 400.031L343.074 208.469L143.113 77.5434Z" fill="#1572D3" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M430.34 95.8301C542.215 95.8301 639.892 156.975 692.201 247.899L803.067 183.452C728.61 54.0508 589.602 -33 430.34 -33C344.146 -33 263.947 -7.53875 196.621 36.3359L319.664 116.847C353.927 103.259 391.218 95.8301 430.34 95.8301Z" fill="#1572D3" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M94.6488 670.962L153.331 522.004L201.413 399.968L153.331 277.995L94.6488 129.038C35.4617 203.199 0 297.425 0 400.032C0 502.575 35.4617 596.801 94.6488 670.962Z" fill="#1572D3" />
                    </g>
                </defs>
                <use href="#heroDecoArt" />
                <use href="#heroDecoArt" transform="translate(3298 0) scale(-1 1)" />
                <use href="#heroDecoArt" transform="translate(1558 0)" />
            </svg>

            <div className="hero__container">

                <div className="hero__frame" aria-hidden="true">
                    <img className="hero__car" src="image/car-2.png" alt="" />
                </div>

                <div className="hero__text">
                    <h1 className="hero__title">Find, book and<br />rent a car <span className="hero__accent">Easily<svg className="hero__swash" width="134" height="19" viewBox="0 0 134 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M133.47 1.55529C56.1979 -3.4811 22.9228 5.02254 0.58496 8.54261C0.237805 11.48 0.36965 13.8959 -7.34608e-05 18.5626C59.8952 -0.893031 99.8252 2.30424 133.425 3.54363C133.439 3.17416 133.429 2.6637 133.47 1.55529Z" fill="#1572D3" /></svg></span></h1>
                    <p className="hero__sub">Get a car wherever and whenever you need it with your iOS and Android device.</p>
                    <div className="hero__stores">
                        <a className="store store--first" href="#" aria-label="Get it on Google Play"></a>
                        <a className="store store--second" href="#" aria-label="Download on the App Store"></a>
                    </div>
                </div>
            </div>

            <form className="search" action="#" onSubmit={submit}>
                <label className="search__field">
                    <svg className="search__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9998 17.9067C18.2973 17.9067 20.1598 16.0442 20.1598 13.7467C20.1598 11.4492 18.2973 9.58667 15.9998 9.58667C13.7023 9.58667 11.8398 11.4492 11.8398 13.7467C11.8398 16.0442 13.7023 17.9067 15.9998 17.9067Z" stroke="#747474" strokeWidth="2" />
                        <path d="M4.82709 11.32C7.45376 -0.226659 24.5604 -0.213325 27.1738 11.3333C28.7071 18.1067 24.4938 23.84 20.8004 27.3867C18.1204 29.9733 13.8804 29.9733 11.1871 27.3867C7.50709 23.84 3.29376 18.0933 4.82709 11.32Z" stroke="#747474" strokeWidth="2" />
                    </svg>
                    <span className="search__info">
                        <span className="search__label">Location</span>
                        <span className="search__value search__value--muted">Search your location</span>
                    </span>
                </label>

                <span className="search__sep"></span>

                <label className="search__field">
                    <svg className="search__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6665 2.66667V6.66667" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.3335 2.66667V6.66667" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.6665 12.12H27.3332" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 11.3333V22.6667C28 26.6667 26 29.3333 21.3333 29.3333H10.6667C6 29.3333 4 26.6667 4 22.6667V11.3333C4 7.33334 6 4.66667 10.6667 4.66667H21.3333C26 4.66667 28 7.33334 28 11.3333Z" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.9264 18.2667H20.9384M20.9264 22.2667H20.9384M15.9938 18.2667H16.0058M15.9938 22.2667H16.0058M11.0592 18.2667H11.0712M11.0592 22.2667H11.0712" stroke="#747474" strokeWidth="2.66667" strokeLinecap="round" />
                    </svg>
                    <span className="search__info">
                        <span className="search__label">Pickup date</span>
                        <span className="search__value">Tue 15 Feb, 09:00</span>
                    </span>
                </label>

                <span className="search__sep"></span>

                <label className="search__field">
                    <svg className="search__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6665 2.66667V6.66667" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.3335 2.66667V6.66667" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.6665 12.12H27.3332" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 11.3333V22.6667C28 26.6667 26 29.3333 21.3333 29.3333H10.6667C6 29.3333 4 26.6667 4 22.6667V11.3333C4 7.33334 6 4.66667 10.6667 4.66667H21.3333C26 4.66667 28 7.33334 28 11.3333Z" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.9264 18.2667H20.9384M20.9264 22.2667H20.9384M15.9938 18.2667H16.0058M15.9938 22.2667H16.0058M11.0592 18.2667H11.0712M11.0592 22.2667H11.0712" stroke="#747474" strokeWidth="2.66667" strokeLinecap="round" />
                    </svg>
                    <span className="search__info">
                        <span className="search__label">Return date</span>
                        <span className="search__value">Thu 16 Feb, 11:00</span>
                    </span>
                </label>

                <button className="search__btn" type="submit">Search</button>
            </form>
        </main>
    )
}
