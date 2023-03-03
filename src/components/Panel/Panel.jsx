import "./Panel.css";
import Task from "../Task";

const Panel = ({tasks}) => (
    <ul className="panel">
        {tasks.map((task) => <Task task={task} />)}
    </ul>
);

export default Panel;
