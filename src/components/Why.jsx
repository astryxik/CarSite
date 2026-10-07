const ITEMS = [
    {
        icon: 'image/why/icon-wallet.svg',
        title: 'Best price guaranteed',
        text: <>Find a lower price? We’ll refund you 100%<br />of the difference.</>
    },
    {
        icon: 'image/why/icon-user-tick.svg',
        title: 'Experience driver',
        text: <>Don’t have driver? Don’t worry, we have many<br />experienced driver for you.</>
    },
    {
        icon: 'image/why/icon-24-support.svg',
        title: '24 hour car delivery',
        text: <>Book your car anytime and we will deliver it<br />directly to you.</>
    },
    {
        icon: 'image/why/icon-messages-2.svg',
        title: '24/7 technical support',
        text: <>Have a question? Contact Rentcars support<br />any time when you have problem.</>
    }
]

export default function Why() {
    return (
        <section className="why" id="why">
            <div className="why__bg" aria-hidden="true">
                <svg className="why__bg-svg" width="1123" height="859" viewBox="-346 0 1123 859" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-346 859L215.555 638.171L777 859L549.017 510.317L215.555 3.64888e-05L-118.017 510.317L-346 859Z" fill="#1572D3" fillOpacity="0.1" />
                </svg>
            </div>

            <img className="why__img" src="image/audi.png" alt="Audi car" />

            <div className="why__container">
                <div className="why__right">
                    <div className="why__head">
                        <span className="why__badge">WHY CHOOSE US</span>
                        <h2 className="why__title">We offer the best experience with our rental deals</h2>
                    </div>

                    <ul className="why__list">
                        {ITEMS.map((item) => (
                            <li className="why__item" key={item.title}>
                                <span className="why__icon">
                                    <img src={item.icon} width="24" height="24" alt="" />
                                </span>
                                <div className="why__text">
                                    <h3 className="why__item-title">{item.title}</h3>
                                    <p className="why__item-text">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
