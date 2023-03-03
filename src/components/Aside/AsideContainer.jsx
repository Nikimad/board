import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../features/boards/boardsSlice";
import { setHidden } from "../../features/boardsUI/boardsUISlice";
import Aside from "./Aside";

const AsideContainer = () => {
    const active = useSelector((state) => state.boards.active);
    const isHidden = useSelector((state) => state.boardsUI.isHidden);
    const dispatch = useDispatch();
    const handleSet = (e) => {
        e.preventDefault();
        dispatch(setActive(e.target.id));
        dispatch(setHidden());
    };

    return <Aside onSet={handleSet} active={active} isHidden={isHidden} />;
};

export default AsideContainer;
