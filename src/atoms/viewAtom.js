import { atom } from 'jotai'

const currentViewAtom = atom('home')
const lastViewAtom = atom('home')

export { currentViewAtom, lastViewAtom }