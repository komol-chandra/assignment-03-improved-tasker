const data = [
    {
        id: crypto.randomUUID(),
        title: "Integration API",
        description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        tags: "Web,Python,API",
        priority:"High",
        isFavourite: true
    },
    {
        id:crypto.randomUUID(),
        title: "API Data Synchronization with Python",
        description: "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
        tags: "Python,API,Data Synchronization",
        priority:"High",
        isFavourite: false
    },
    {
        id: crypto.randomUUID(),
        title: "Efficient Web API Connectivity in Python",
        description: "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
        tags: "Web,Python,API",
        priority:"High",
        isFavourite: false
    },
    {
        id: crypto.randomUUID(),
        title: "Data Handling",
        description: "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
        tags: "Web,Python,Security",
        priority:"High",
        isFavourite: false
    }
]

function getTaskList() {
    return data;
}

function addTask(item) {
    item.id = crypto.randomUUID();
    data.push(item);
}

function deleteTask(item) {
    return  getTaskList().filter(task => task.id !== item.id);
}

function editTask(updatedTask) {
    const index = data.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
        data[index] = updatedTask;
    }
}

export {getTaskList,addTask,deleteTask,editTask};