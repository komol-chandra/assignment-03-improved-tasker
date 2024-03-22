import {createContext, useContext, useState} from 'react';

const ModalContext = createContext();

export function ModalProvider({children}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <ModalContext.Provider value={{isModalOpen, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    return useContext(ModalContext);
}