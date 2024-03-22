import {useState} from "react";
import {toast} from "react-toastify";

// eslint-disable-next-line react/prop-types
export default function TaskFormModal({ isOpen, closeModal, addTask, editTask, editingTaskData }) {
    const initialFormData = {
        title: '',
        description: '',
        tags: '',
        priority: ''
    };

    const [formData, setFormData] = useState(editingTaskData || initialFormData);

    function handleFormSubmit(event) {
        event.preventDefault();

        if (validateForm(formData)) {
            if (editingTaskData) {
                editTask(formData);
            } else {
                addTask(formData);
            }
            closeModal();
        }
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function validateForm(formData) {
        const errors = [];
        if (!formData.title) {
            errors.push('Please provide a title.');
        }
        if (!formData.description) {
            errors.push('Please provide a description.');
        }
        if (!formData.tags) {
            errors.push('Please provide tags.');
        }
        if (!formData.priority) {
            errors.push('Please provide a priority.');
        }

        if (errors.length) {
            errors.forEach(errorData => {
                toast.error(errorData, {
                    position: 'bottom-right'
                });
            });
            return false;
        }
        return true;
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <form onSubmit={handleFormSubmit} className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
                    <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                        {editingTaskData ? 'Edit Task' : 'Add New Task'}
                    </h2>
                    <div className="space-y-9 text-white lg:space-y-10">
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="title">Title</label>
                            <input
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="title"
                                id="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                                name="description"
                                id="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                            <div className="space-y-2 lg:space-y-3">
                                <label htmlFor="tags">Tags</label>
                                <input
                                    className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                    type="text"
                                    name="tags"
                                    id="tags"
                                    value={formData.tags}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2 lg:space-y-3">
                                <label htmlFor="priority">Priority</label>
                                <select
                                    className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                    name="priority"
                                    id="priority"
                                    value={formData.priority}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Priority</option>
                                    <option value="low" selected={formData.priority === 'low'}>Low</option>
                                    <option value="medium" selected={formData.priority === 'medium'}>Medium</option>
                                    <option value="high" selected={formData.priority === 'high'}>High</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 flex justify-center lg:mt-20">
                        <button
                            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                            type="submit"
                        >
                            {editingTaskData ? 'Update' : 'Submit'}
                        </button>
                        <button
                            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
                            style={{ marginLeft: '20px' }}
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
