import Modal from './Modal.jsx'

export default function RentModal({ car, onClose, onToast }) {
    function submit(e) {
        e.preventDefault()
        onClose()
        onToast('Booking confirmed for ' + car + '! We will contact you shortly.')
    }

    return (
        <Modal
            id="modal-rent"
            titleId="rent-title"
            title="Rent a car"
            sub={<>Complete your booking for <b data-rent-car>{car}</b>.</>}
            onClose={onClose}
        >
            <form className="modal__form" id="form-rent" noValidate onSubmit={submit}>
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
                <button className="modal__submit" type="submit">Confirm booking</button>
            </form>
        </Modal>
    )
}
