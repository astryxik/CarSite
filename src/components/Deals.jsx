const CARS = [
    { mod: 'deal--1', img: 'image/deals/car-1.png', alt: 'Jaguar XE L P250', name: 'Jaguar XE L P250', score: '4.8', reviews: '2.436', seats: '4 Passagers', doors: '4 Doors', price: '$1,800' },
    { mod: 'deal--2', img: 'image/audi.png', alt: 'Audi R8', name: 'Audi R8', score: '4.6', reviews: '1.936', seats: '2 Passagers', doors: '2 Doors', price: '$2,100' },
    { mod: 'deal--3', img: 'image/deals/car-3.png', alt: 'BMW M3', name: 'BMW M3', score: '4.5', reviews: '2.036', seats: '4 Passagers', doors: '4 Doors', price: '$1,600' },
    { mod: 'deal--4', img: 'image/deals/car-4.png', alt: 'Lamborghini Huracan', name: 'Lamborghini Huracan', score: '4.3', reviews: '2.236', seats: '2 Passagers', doors: '2 Doors', price: '$2,300' }
]

export default function Deals({ onRent, onShowAll }) {
    return (
        <section className="deals" id="deals">
            <div className="deals__inner">
                <div className="deals__head">
                    <span className="deals__badge">POPULAR RENTAL DEALS</span>
                    <h2 className="deals__title">Most popular cars rental deals</h2>
                </div>

                <div className="deals__cards">
                    {CARS.map((car) => (
                        <article className={'deal ' + car.mod} key={car.name}>
                            <img className="deal__img" src={car.img} alt={car.alt} />
                            <h3 className="deal__name">{car.name}</h3>
                            <div className="deal__rating">
                                <img className="deal__star" src="image/deals/star.svg" width="16" height="16" alt="" />
                                <span className="deal__score">{car.score}</span><span className="deal__reviews">({car.reviews} reviews)</span>
                            </div>
                            <ul className="deal__specs">
                                <li className="deal__spec">
                                    <img className="deal__spec-ic" src="image/deals/ic-user.svg" width="20" height="20" alt="" />{car.seats}
                                    <span className="deal__spec-ic deal__spec-ic--auto"><img src="image/deals/ic-auto.svg" width="20" height="20" alt="" />Auto</span>
                                </li>
                                <li className="deal__spec">
                                    <img className="deal__spec-ic" src="image/deals/ic-ac.svg" width="20" height="20" alt="" />Air Conditioning
                                    <span className="deal__spec-ic deal__spec-ic--door"><img src="image/deals/ic-door.svg" width="20" height="20" alt="" />{car.doors}</span>
                                </li>
                            </ul>
                            <div className="deal__price"><span>Price</span><span className="deal__amount"><b>{car.price}</b>/day</span></div>
                            <a className="deal__rent" href="#" onClick={(e) => { e.preventDefault(); onRent(car.name) }}>Rent Now<span className="deal__arrow"><img src="image/deals/ic-arrow-white.svg" width="20" height="20" alt="" /></span></a>
                        </article>
                    ))}
                </div>

                <a className="deals__more" href="#" onClick={(e) => { e.preventDefault(); onShowAll() }}>
                    <span>Show all vehicles</span>
                    <span className="deals__more-arrow"><img src="image/deals/ic-arrow.svg" width="20" height="20" alt="" /></span>
                </a>
            </div>
        </section>
    )
}
