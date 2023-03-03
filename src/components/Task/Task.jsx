import "./Task.css";

const Task = ({ title, completedCounter, allCounter }) => (
  <li className="task">
    <h3 className="task__title">{title}</h3>
    <p className="task__subtasks-counter">
      {completedCounter} of {allCounter} subtasks
    </p>
  </li>
);

export default Task;
