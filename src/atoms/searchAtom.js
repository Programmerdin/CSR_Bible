import { atom } from 'jotai'

const queryAtom = atom('')
const searchResultsAtom = atom([]);
const recentVisitHistoryAtom = atom([]);


export { queryAtom, searchResultsAtom, recentVisitHistoryAtom };