import { useRef, useState } from 'react'
import Modal from './Modal.jsx'
import { read, write } from '../../data.js'

export default function SignInModal({ onClose, onOpenModal, onAuth, onToast }) {
    const formRef = useRef(null)
    const [error, setError] = useState('')

    function submit(e) {
        e.preventDefault()
        const f = formRef.current
        const email = f.elements.email.value.trim().toLowerCase()
        const password = f.elements.password.value
        if (!email || !password) { setError('Please fill in all fields.'); return }
        const users = read('rentcars_users', [])
        const user = users.find((u) => u.email === email)
        if (!user) { setError('No account found. Please sign up first.'); return }
        if (user.password !== password) { setError('Wrong password. Try again.'); return }
        const session = { name: user.name, email: user.email }
        write('rentcars_session', session)
        f.reset()
        onAuth(session)
        onToast('Welcome back, ' + user.name.split(' ')[0] + '!')
    }

    return (
        <Modal id="modal-signin" titleId="signin-title" title="Sign in" sub="Welcome back to RENTCARS." onClose={onClose}>
            <form className="modal__form" id="form-signin" noValidate ref={formRef} onSubmit={submit}>
                <label className="field">
                    <span className="field__label">Email</span>
                    <input className="field__input" type="email" name="email" placeholder="you@example.com" autoComplete="email" />
                </label>
                <label className="field">
                    <span className="field__label">Password</span>
                    <input className="field__input" type="password" name="password" placeholder="Enter your password" autoComplete="current-password" />
                </label>
                <p className="modal__error" data-error hidden={!error}>{error}</p>
                <button className="modal__submit" type="submit">Sign in</button>
            </form>
            <p className="modal__foot">No account? <button className="modal__link" type="button" onClick={() => onOpenModal('signup')}>Sign up</button></p>
        </Modal>
    )
}
