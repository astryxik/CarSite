export default function Modal({ id, titleId, title, sub, onClose, children }) {
    return (
        <div className="modal" id={id}>
            <div className="modal__overlay" data-close onClick={onClose}></div>
            <div className="modal__box" role="dialog" aria-modal="true" aria-labelledby={titleId}>
                <button className="modal__close" type="button" data-close onClick={onClose} aria-label="Close">×</button>
                <h3 className="modal__title" id={titleId}>{title}</h3>
                <p className="modal__sub">{sub}</p>
                {children}
            </div>
        </div>
    )
}
