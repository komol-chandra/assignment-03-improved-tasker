import TaskFormModal from "./TaskFormModal.jsx";
import Modal from "./Modal.jsx";
import React, {useEffect, useState} from "react";
import {addTask, deleteTask, editTask, getTaskList} from "../../data/tasks.js";
import TaskTableItem from "./TaskTableItem.jsx";
import {toast} from "react-toastify";

export default function TaskSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    const [selectedItems, setSelectedItems] = useState([]);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    /*
     Action Functions List
        handleAddTask
        handleEditTask



     */
    useEffect(() => {
        setTasks(getTaskList());
    }, []);

    /*
       Event Base Functions List
           handleModalOpen
           handleModalClose
           handleEditModal
           handleBulkDeleteClick
   */

    function handleModalOpen() {
        console.log("handleModalOpen")
        setIsModalOpen(true);
    }

    function handleModalClose() {
        console.log("handleModalClose")
        setIsModalOpen(false);
    }

    function handleEditModal(item) {
        setIsModalOpen(true);
        setEditingTask(item);
    }
    function handleBulkDeleteClick(){
        if (tasks.length === 0) {
            toast.error('There are no items to delete.');
        } else {
            setIsConfirmationModalOpen(true);
        }
    }
    /*
        Action Functions List
            handleAddTask
            handleEditTask
            handleDeleteTask
            confirmDeleteAll
    */

    function handleAddTask(item) {
        addTask(item);
        setTasks(getTaskList());
        toast.success(`${item.title} Inserted Successfully`, {
            position: 'bottom-right'
        });
    }

    function handleEditTask(item) {
        editTask(item);
        setTasks(getTaskList());
        toast.success(`${item.title} Updated Successfully`, {
            position: 'bottom-right'
        });
    }

    function handleDeleteTask(item) {
        setTasks(tasks.filter(task => task.id !== item.id));
        toast.success(`${item.title} Deleted Successfully`, {
            position: 'bottom-right'
        });
    }

    function confirmDeleteAll(){
        setTasks([]);
        setIsConfirmationModalOpen(false);
        toast.success('All items deleted successfully.');
    }


    return (
        <section className="mb-20" id="tasks">
            <div className="container">
                <div
                    className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <div className="mb-14 items-center justify-between sm:flex">
                        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
                        <div className="flex items-center space-x-5">
                            <form>
                                <div className="flex">
                                    <div
                                        className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                                        <input type="search" id="search-dropdown"
                                               className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                                               placeholder="Search Task"
                                               required/>
                                        <button type="submit"
                                                className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4">
                                            <svg className="h-4 w-4" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 fill="none"
                                                 viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                            </svg>
                                            <span className="sr-only">Search</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                                    onClick={handleModalOpen}
                            >Add Task
                            </button>

                            <button
                                onClick={handleBulkDeleteClick}
                                className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">Delete All
                            </button>
                        </div>
                    </div>
                    {
                        isModalOpen &&
                        <TaskFormModal isOpen={isModalOpen} closeModal={handleModalClose} addTask={handleAddTask}
                                       editTask={handleEditTask} editingTaskData={editingTask}/>
                    }

                    <div className="overflow-auto">
                        <table className="table-fixed overflow-auto xl:w-full">
                            <thead>
                            <tr>
                                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]">
                                </th>
                                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title</th>
                                <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description</th>
                                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags</th>
                                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority</th>
                                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tasks.map(item => (
                                <TaskTableItem
                                    key={item.id}
                                    item={item}
                                    deleteTask={handleDeleteTask}
                                    openEditModal={handleEditModal}
                                />
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Confirmation Modal */}
                <Modal className="modal-overlay" isOpen={isConfirmationModalOpen}
                       closeModal={() => setIsConfirmationModalOpen(false)}>
                    <div
                        className="mx-auto my-10 w-full max-w-[400px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
                        <div className="mt-6 text-center">
                            <p className="text-lg text-white mb-4" style={{marginBottom: '1rem'}}>Are you sure you want
                                to delete the selected items?</p>
                            <p className="text-sm text-gray-400 mb-2" style={{marginBottom: '0.5rem'}}>This action
                                cannot be undone.</p>
                        </div>
                        <div className="mt-8 flex justify-center">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-4"
                                    onClick={confirmDeleteAll}>Delete
                            </button>
                            <button className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                    onClick={() => setIsConfirmationModalOpen(false)}>Cancel
                            </button>
                        </div>
                    </div>
                </Modal>

            </div>
        </section>
    );
}