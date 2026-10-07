export const DEALS = [
    { name: 'Jaguar XE L P250', price: '$1,800' },
    { name: 'Audi R8', price: '$2,100' },
    { name: 'BMW M3', price: '$1,600' },
    { name: 'Lamborghini Huracan', price: '$2,300' }
]

export const OPEN_KEYS = { signin: 1, signup: 1, search: 1, rent: 1, review: 1 }

export function read(key, fallback) {
    try {
        const v = JSON.parse(localStorage.getItem(key))
        return v == null ? fallback : v
    } catch (e) { return fallback }
}

export function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)) } catch (e) {}
}

export function remove(key) {
    try { localStorage.removeItem(key) } catch (e) {}
}
