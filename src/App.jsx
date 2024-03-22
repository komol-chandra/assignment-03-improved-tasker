import './App.css'
import NavSection from "./components/NavSection.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/HeroSection.jsx";
import TaskSection from "./components/TaskSection.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Modal from "./components/Modal.jsx";
import {useModal} from "./contexts/ModalContext.jsx";

export default function App() {
    const { isModalOpen, closeModal } = useModal();

    return (
        <>
            <NavSection></NavSection>
            <HeroSection></HeroSection>
            <TaskSection></TaskSection>
            <Footer></Footer>

            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <TaskForm></TaskForm>
            </Modal>

        </>
    )
}
