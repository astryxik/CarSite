import { useEffect, useRef, useState } from 'react'
import { OPEN_KEYS, read, remove } from './data.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import How from './components/How.jsx'
import Why from './components/Why.jsx'
import Deals from './components/Deals.jsx'
import Reviews from './components/Reviews.jsx'
import Download from './components/Download.jsx'
import Footer from './components/Footer.jsx'
import SignInModal from './components/modals/SignInModal.jsx'
import SignUpModal from './components/modals/SignUpModal.jsx'
import SearchModal from './components/modals/SearchModal.jsx'
import RentModal from './components/modals/RentModal.jsx'
import ReviewModal from './components/modals/ReviewModal.jsx'

export default function App() {
    const [session, setSession] = useState(() => read('rentcars_session', null))
    const [modal, setModal] = useState(null)
    const [rentCar, setRentCar] = useState('your car')
    const [toast, setToast] = useState(null)
    const toastTimer = useRef(null)

    function showToast(msg) {
        setToast(msg)
        clearTimeout(toastTimer.current)
        toastTimer.current = setTimeout(() => setToast(null), 3200)
    }

    function openModal(key) {
        if (!OPEN_KEYS[key]) return
        setModal(key)
        try { history.replaceState(null, '', '#' + key) } catch (e) {}
    }

    function closeModal() {
        setModal(null)
        try { history.replaceState(null, '', location.pathname + location.search) } catch (e) {}
    }

    function openRent(name) {
        setRentCar(name)
        openModal('rent')
    }

    function openSearch() {
        openModal('search')
    }

    function logout() {
        remove('rentcars_session')
        setSession(null)
        showToast('You have been logged out')
    }

    useEffect(() => {
        const hash = location.hash ? location.hash.slice(1) : ''
        if (hash && OPEN_KEYS[hash]) setModal(hash)
    }, [])

    useEffect(() => {
        document.body.classList.toggle('is-locked', modal !== null)
        return () => document.body.classList.remove('is-locked')
    }, [modal])

    useEffect(() => {
        if (!modal) return
        const t = setTimeout(() => {
            const el = document.querySelector('#modal-' + modal + ' input, #' + 'modal-' + modal + ' textarea')
            if (el) el.focus()
        }, 60)
        return () => clearTimeout(t)
    }, [modal])

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape' && modal) closeModal() }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [modal])

    return (
        <>
            <div className="stage">
                <Nav session={session} onOpenModal={openModal} onLogout={logout} />
                <Hero onSearch={openSearch} />
                <How />
                <Why />
                <Deals onRent={openRent} onShowAll={openSearch} />
                <Reviews onLeaveReview={() => openModal('review')} />
                <Download />
                <Footer />
            </div>

            {modal === 'signin' && (
                <SignInModal
                    onClose={closeModal}
                    onOpenModal={openModal}
                    onAuth={(s) => { setSession(s); closeModal() }}
                    onToast={showToast}
                />
            )}

            {modal === 'signup' && (
                <SignUpModal
                    onClose={closeModal}
                    onOpenModal={openModal}
                    onAuth={(s) => { setSession(s); closeModal() }}
                    onToast={showToast}
                />
            )}

            {modal === 'search' && (
                <SearchModal onClose={closeModal} onRent={openRent} onToast={showToast} />
            )}

            {modal === 'rent' && (
                <RentModal car={rentCar} onClose={closeModal} onToast={showToast} />
            )}

            {modal === 'review' && (
                <ReviewModal onClose={closeModal} onToast={showToast} />
            )}

            <div className="toast" data-toast role="status" hidden={!toast}>{toast}</div>
        </>
    )
}
