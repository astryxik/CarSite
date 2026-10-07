import { useRef, useState } from 'react'
import Modal from './Modal.jsx'
import { read, write } from '../../data.js'

export default function SignUpModal({ onClose, onOpenModal, onAuth, onToast }) {
    const formRef = useRef(null)
    const [error, setError] = useState('')

    function submit(e) {
        e.preventDefault()
        const f = formRef.current
        const name = f.elements.name.value.trim()
        const email = f.elements.email.value.trim().toLowerCase()
        const password = f.elements.password.value
        const confirm = f.elements.confirm.value
        if (!name || !email || !password || !confirm) { setError('Please fill in all fields.'); return }
        if (password.length < 6) { setError('Password must be at least 6 characters.'); return }
        if (password !== confirm) { setError('Passwords do not match.'); return }
        const users = read('rentcars_users', [])
        if (users.some((u) => u.email === email)) { setError('This email is already registered. Try signing in.'); return }
        users.push({ name: name, email: email, password: password })
        write('rentcars_users', users)
        const session = { name: name, email: email }
        write('rentcars_session', session)
        f.reset()
        onAuth(session)
        onToast('Welcome to RENTCARS, ' + name.split(' ')[0] + '!')
    }

    return (
        <Modal id="modal-signup" titleId="signup-title" title="Sign up" sub="Create an account to start renting cars." onClose={onClose}>
            <form className="modal__form" id="form-signup" noValidate ref={formRef} onSubmit={submit}>
                <label className="field">
                    <span className="field__label">Full name</span>
                    <input className="field__input" type="text" name="name" placeholder="John Doe" autoComplete="name" />
                </label>
                <label className="field">
                    <span className="field__label">Email</span>
                    <input className="field__input" type="email" name="email" placeholder="you@example.com" autoComplete="email" />
                </label>
                <label className="field">
                    <span className="field__label">Password</span>
                    <input className="field__input" type="password" name="password" placeholder="At least 6 characters" autoComplete="new-password" />
                </label>
                <label className="field">
                    <span className="field__label">Confirm password</span>
                    <input className="field__input" type="password" name="confirm" placeholder="Repeat your password" autoComplete="new-password" />
                </label>
                <p className="modal__error" data-error hidden={!error}>{error}</p>
                <button className="modal__submit" type="submit">Create account</button>
            </form>
            <p className="modal__foot">Already have an account? <button className="modal__link" type="button" onClick={() => onOpenModal('signin')}>Sign in</button></p>
        </Modal>
    )
}
