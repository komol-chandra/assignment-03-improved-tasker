import {useModal} from "../contexts/ModalContext.jsx";

export default function TaskForm() {
    const {isModalOpen, openModal, closeModal} = useModal();
    return (
        <form
            className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
            <h2
                className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                Add New Task
            </h2>
            <div className="space-y-9 text-white lg:space-y-10">
                <div className="space-y-2 lg:space-y-3">
                    <label htmlFor="title">Title</label>
                    <input
                        className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                        type="text"
                        name="title"
                        id="title"
                        required
                    />
                </div>
                <div className="space-y-2 lg:space-y-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                        type="text"
                        name="description"
                        id="description"
                        required
                    ></textarea>
                </div>
                <div
                    className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
                >
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="tags">Tags</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="tags"
                            id="tags"
                            required
                        />
                    </div>
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="priority">Priority</label>
                        <select
                            className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                            name="priority"
                            id="priority"
                            required
                        >
                            <option value="">Select Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-16 flex justify-center lg:mt-20">
                <button
                    className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                >
                    Submit
                </button>

                <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
                        style={{marginLeft: "20px"}}
                        onClick={closeModal}>Close
                </button>
            </div>
        </form>
    );
}