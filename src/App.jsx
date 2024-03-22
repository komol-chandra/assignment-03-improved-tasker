import './App.css'
import './styles/modal.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page from "./components/Page.jsx";

export default function App() {

    return (
        <>
            <Page/>
            <ToastContainer />
        </>
    )
}
