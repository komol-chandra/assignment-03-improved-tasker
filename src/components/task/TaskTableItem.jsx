// eslint-disable-next-line react/prop-types
import Modal from "./Modal.jsx";
import {useState} from "react";
import {toast} from "react-toastify";

export default function TaskTableItem({item, deleteTask, openEditModal}) {
    // eslint-disable-next-line react/prop-types
    const tagsArray = item.tags.split(',');
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    function handleBulkDelete(){
        setIsConfirmationModalOpen(true);
    }

    function confirmDelete(){
        deleteTask(item);
        setIsConfirmationModalOpen(false);
    }
    return (
        <>
            <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="icon icon-tabler icon-tabler-star" width="24"
                         height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="yellow"
                         fill="yellow"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                    </svg>
                </td>
                <td>{item.title}</td>
                <td>
                    <div>
                        {item.description}
                    </div>
                </td>
                <td>
                    <ul className="flex justify-center gap-1.5 flex-wrap">
                        {tagsArray.map((tag, index) => (
                            <li key={index}>
                            <span
                                className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">{tag.trim()}</span>
                            </li>
                        ))}
                    </ul>
                </td>
                <td className="text-center">{item.priority}</td>
                <td>
                    <div className="flex items-center justify-center space-x-3">
                        <button className="text-red-500" onClick={handleBulkDelete}>Delete</button>
                        <button className="text-blue-500" onClick={() => openEditModal(item)}>Edit</button>
                    </div>
                </td>
            </tr>
            <Modal className="modal-overlay" isOpen={isConfirmationModalOpen}
                   closeModal={() => setIsConfirmationModalOpen(false)}>
                <div
                    className="mx-auto my-10 w-full max-w-[400px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
                    <div className="mt-6 text-center">
                        <p className="text-lg text-white mb-4" style={{marginBottom: '1rem'}}>Are you sure you want to
                            delete the items?</p>
                        <p className="text-sm text-gray-400 mb-2" style={{marginBottom: '0.5rem'}}>This action cannot be
                            undone.</p>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-4"
                                onClick={confirmDelete}>Delete
                        </button>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                onClick={() => setIsConfirmationModalOpen(false)}>Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
