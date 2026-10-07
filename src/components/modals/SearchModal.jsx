import Modal from './Modal.jsx'
import { DEALS } from '../../data.js'

export default function SearchModal({ onClose, onRent, onToast }) {
    function submit(e) {
        e.preventDefault()
        onToast('Found ' + DEALS.length + ' cars for your dates')
    }

    return (
        <Modal id="modal-search" titleId="search-title" title="Search cars" sub="Pick a location and dates to find a car." onClose={onClose}>
            <form className="modal__form" id="form-search" noValidate onSubmit={submit}>
                <label className="field">
                    <span className="field__label">Location</span>
                    <input className="field__input" type="text" name="location" placeholder="Search your location" />
                </label>
                <div className="field-row">
                    <label className="field">
                        <span className="field__label">Pickup date</span>
                        <input className="field__input" type="date" name="pickup" defaultValue="2026-02-15" />
                    </label>
                    <label className="field">
                        <span className="field__label">Return date</span>
                        <input className="field__input" type="date" name="return" defaultValue="2026-02-16" />
                    </label>
                </div>
                <button className="modal__submit" type="submit">Find a car</button>
            </form>
            <div className="modal__results" data-results>
                {DEALS.map((d) => (
                    <div className="result" key={d.name}>
                        <div className="result__info">
                            <p className="result__name">{d.name}</p>
                            <p className="result__price"><b>{d.price}</b>/day</p>
                        </div>
                        <button className="result__rent" type="button" onClick={() => onRent(d.name)}>Rent</button>
                    </div>
                ))}
            </div>
        </Modal>
    )
}
