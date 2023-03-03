import { useSelector } from "react-redux";
import Panel from "./Panel";

const PanelContainer = () => {
    const active = useSelector((state) => state.boards.active);
    const tasks = useSelector((state) => state.boards[active].tasks);

    return <Panel tasks={tasks} />;
};

export default PanelContainer;
