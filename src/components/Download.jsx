export default function Download() {
    return (
        <section className="download" id="download">
            <svg className="download__decor" viewBox="0 0 649 500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path opacity="0.08" fillRule="evenodd" clipRule="evenodd" d="M-244 591L202.544 415.159L649 591L467.71 313.352L202.544 -93L-62.7097 313.352L-244 591Z" fill="#1572D3" />
            </svg>

            <div className="download__inner">
                <div className="download__text">
                    <span className="download__badge">DOWNLOAD</span>
                    <h2 className="download__title">Download Rentcars<br />App for <span className="download__accent">FREE</span></h2>
                    <p className="download__sub">For faster, easier booking and exclusive deals.</p>
                    <div className="download__stores">
                        <a className="store store--first" href="#" aria-label="Get it on Google Play"></a>
                        <a className="store store--second" href="#" aria-label="Download on the App Store"></a>
                    </div>
                </div>

                <div className="download__phone">
                    <img className="download__phone-body" src="image/node46-image2_46_5252.png" alt="" />
                    <img className="download__phone-screen" src="image/iphone.png" alt="Rentcars mobile app" />
                </div>
            </div>
        </section>
    )
}
