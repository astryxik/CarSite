export default function How() {
    return (
        <section className="how" id="how">
            <div className="how__inner">

                <div className="how__main">
                    <div className="how__head">
                        <span className="how__badge">HOW IT WORK</span>
                        <h2 className="how__title">Rent with following 3 working steps</h2>
                    </div>

                    <div className="how__cards">
                        <article className="step">
                            <span className="step__icon">
                                <img src="image/how/icon-location.svg" width="48" height="48" alt="" />
                            </span>
                            <h3 className="step__title">Choose location</h3>
                            <p className="step__text">Choose your and find<br />your best car</p>
                        </article>

                        <article className="step">
                            <span className="step__icon">
                                <img src="image/how/icon-calendar.svg" width="48" height="48" alt="" />
                            </span>
                            <h3 className="step__title">Pick-up date</h3>
                            <p className="step__text">Select your pick up date and<br />time to book your car</p>
                        </article>

                        <article className="step">
                            <span className="step__icon">
                                <img src="image/how/icon-car.svg" width="48" height="48" alt="" />
                            </span>
                            <h3 className="step__title">Book your car</h3>
                            <p className="step__text">Book your car and we will deliver<br />it directly to you</p>
                        </article>
                    </div>
                </div>

                <div className="how__logos">
                    <img className="how__logo how__logo--1" src="image/how/logo-1.svg" alt="" />
                    <img className="how__logo how__logo--2" src="image/how/logo-2.svg" alt="" />
                    <img className="how__logo how__logo--3" src="image/how/logo-3.svg" alt="" />
                    <img className="how__logo how__logo--4" src="image/how/logo-4.svg" alt="" />
                    <img className="how__logo how__logo--5" src="image/how/logo-5.svg" alt="" />
                    <img className="how__logo how__logo--6" src="image/how/logo-6.svg" alt="" />
                </div>

            </div>
        </section>
    )
}
