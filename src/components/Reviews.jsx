const REVIEWS = [
    {
        img: 'image/testimonials/person-1.png',
        name: 'Jenny Wilson',
        quote: '“I have been using your services for 3 years. Your service is great, I will continue to use your service.”',
        mod: '',
        fromMod: ''
    },
    {
        img: 'image/testimonials/person-1.png',
        name: 'Charlie Johnson',
        quote: '“I feel very secure when using caretall\'s services. Your customer care team is very enthusiastic and the driver is always on time.”',
        mod: '',
        fromMod: ''
    },
    {
        img: 'image/testimonials/person-3.png',
        name: 'Charlie Johnson',
        quote: '“I feel very secure when using caretall\'s services. Your customer care team is very enthusiastic and the driver is always on time.”',
        mod: ' review--alt',
        fromMod: ' review__from--dark'
    }
]

const STARS = [0, 1, 2, 3, 4]

export default function Reviews({ onLeaveReview }) {
    return (
        <section className="reviews" id="reviews">
            <svg className="reviews__deco reviews__deco--a" width="292" height="310" viewBox="0 -70 279 297" preserveAspectRatio="none" fill="none" aria-hidden="true">
                <path opacity="0.1" d="M128.68 227V118.53C128.68 68.6 117.956 27.2783 96.5098 -5.43477C74.2053 -38.1479 42.0354 -59.6696 0 -70V-24.8044C25.7359 -17.9174 44.1801 -5.00437 55.3323 13.9348C66.4845 32.0131 72.9185 55.687 74.6342 84.9565H25.736V227H128.68ZM279 227V118.53C279 68.6 268.277 27.2783 246.83 -5.43477C224.526 -38.1479 192.356 -59.6696 150.32 -70V-24.8044C176.056 -17.9174 194.5 -5.00437 205.653 13.9348C216.805 32.0131 223.239 55.687 224.954 84.9565H176.056V227H279Z" fill="#1572D3" transform="translate(279,0) scale(-1,1)"></path>
            </svg>
            <svg className="reviews__deco reviews__deco--b" width="279" height="297" viewBox="0 -70 279 297" fill="none" aria-hidden="true">
                <path opacity="0.1" d="M128.68 227V118.53C128.68 68.6 117.956 27.2783 96.5098 -5.43477C74.2053 -38.1479 42.0354 -59.6696 0 -70V-24.8044C25.7359 -17.9174 44.1801 -5.00437 55.3323 13.9348C66.4845 32.0131 72.9185 55.687 74.6342 84.9565H25.736V227H128.68ZM279 227V118.53C279 68.6 268.277 27.2783 246.83 -5.43477C224.526 -38.1479 192.356 -59.6696 150.32 -70V-24.8044C176.056 -17.9174 194.5 -5.00437 205.653 13.9348C216.805 32.0131 223.239 55.687 224.954 84.9565H176.056V227H279Z" fill="#1572D3"></path>
            </svg>

            <div className="reviews__inner">
                <div className="reviews__head">
                    <span className="reviews__badge">TESTIMONIALS</span>
                    <h2 className="reviews__title">What peole say about us?</h2>
                </div>

                <div className="reviews__row">
                    {REVIEWS.map((r, i) => (
                        <article className={'review' + r.mod} key={i}>
                            <img className="review__img" src={r.img} alt={r.name} />
                            <div className="review__body">
                                <p className="review__score">5.0<span> stars</span></p>
                                <div className="review__stars">
                                    {STARS.map((s) => (
                                        <img src="image/testimonials/star-24.svg" width="24" height="24" alt="" key={s} />
                                    ))}
                                </div>
                                <blockquote className="review__quote">{r.quote}</blockquote>
                                <p className="review__name">{r.name}</p>
                                <p className={'review__from' + r.fromMod}>From New York, US</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="reviews__cta">
                    <button className="reviews__more" type="button" onClick={onLeaveReview}>Leave a review</button>
                </div>
            </div>
        </section>
    )
}
