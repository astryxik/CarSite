import { useRef, useState } from 'react'
import Modal from './Modal.jsx'
import { read, write } from '../../data.js'

const STARS = [1, 2, 3, 4, 5]

export default function ReviewModal({ onClose, onToast }) {
    const formRef = useRef(null)
    const [error, setError] = useState('')
    const [rating, setRating] = useState(5)

    function submit(e) {
        e.preventDefault()
        const f = formRef.current
        const name = f.elements.name.value.trim()
        const text = f.elements.text.value.trim()
        if (!name || !text) { setError('Please fill in your name and review.'); return }
        const reviews = read('rentcars_reviews', [])
        reviews.push({ name: name, text: text, rating: rating, date: Date.now() })
        write('rentcars_reviews', reviews)
        f.reset()
        setRating(5)
        onClose()
        onToast('Thanks for your review, ' + name.split(' ')[0] + '!')
    }

    return (
        <Modal id="modal-review" titleId="review-title" title="Leave a review" sub="Share your experience with RENTCARS." onClose={onClose}>
            <form className="modal__form" id="form-review" noValidate ref={formRef} onSubmit={submit}>
                <label className="field">
                    <span className="field__label">Your name</span>
                    <input className="field__input" type="text" name="name" placeholder="John Doe" />
                </label>
                <div className="field">
                    <span className="field__label">Rating</span>
                    <div className="stars" data-stars>
                        {STARS.map((n) => (
                            <button
                                className={n <= rating ? 'star is-active' : 'star'}
                                type="button"
                                onClick={() => setRating(n)}
                                aria-label={n > 1 ? n + ' stars' : n + ' star'}
                                key={n}
                            >★</button>
                        ))}
                    </div>
                </div>
                <label className="field">
                    <span className="field__label">Review</span>
                    <textarea className="field__input field__input--area" name="text" placeholder="Tell us about your trip..."></textarea>
                </label>
                <p className="modal__error" data-error hidden={!error}>{error}</p>
                <button className="modal__submit" type="submit">Send review</button>
            </form>
        </Modal>
    )
}
