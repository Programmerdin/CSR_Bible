import { atom } from 'jotai'

const currentViewAtom = atom('search')
const lastViewAtom = atom('search')

export { currentViewAtom, lastViewAtom }