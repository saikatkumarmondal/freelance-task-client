import React from 'react';
import { useLoaderData } from 'react-router';
import TaskDetails from './TaskDetails';

const TaskCards = () => {
    // const {
    //   budget,
    //   category,
    //   deadline,
    //   description,
    //   title,
    //   userEmail,
    //   userName,
    // } = useLoaderData();
    const taskInfo = useLoaderData();
    console.log(taskInfo);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {taskInfo.map((task) => (
          <TaskDetails task={task} key={task._id}></TaskDetails>
        ))}
      </div>
    );
};

export default TaskCards;