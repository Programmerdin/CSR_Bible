import { atom } from 'jotai'

const currentProcedureAtom = atom('0001')
const savedProceduresAtom = atom([])


export { currentProcedureAtom, savedProceduresAtom }