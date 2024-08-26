import { atom } from 'jotai'

const currentView = atom('home')
const lastView = atom('home')

export { currentView, lastView }