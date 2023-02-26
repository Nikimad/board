import { useSelector, useDispatch } from "react-redux";
import { boardAdd, boardsSelectors } from "../../features/boards/boardsSlice";
import Aside from "./Aside";

const AsideContainer = () => {
    const boards = useSelector(boardsSelectors.selectAll);
    const dispatch = useDispatch();
    const handleAdd = () => dispatch(boardAdd("Board"));

    return <Aside boards={boards} onAdd={handleAdd} />;
};

export default AsideContainer;
