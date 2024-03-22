import TaskSectionList from "./TaskSectionList.jsx";
import TaskSectionHeader from "./TaskSectionHeader.jsx";
export default function TaskSection(){
    return(
        <section className="mb-20" id="tasks">
            <div className="container">
                <div
                    className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskSectionHeader></TaskSectionHeader>
                   <TaskSectionList></TaskSectionList>
                </div>
            </div>
        </section>
    );
}