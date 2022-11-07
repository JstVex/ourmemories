import { MemoriesContext } from '../context/MemoriesContext';
import { useContext } from 'react';

export const useMemoriesContext = () => {
    const context = useContext(MemoriesContext);

    if (!context) {
        throw Error('useMemoriesContext must be used inside the MemoriesContextProvider:(');
    }

    return context
}