import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../features/boards/boardsSlice";
import Aside from "./Aside";

const AsideContainer = () => {
    const active = useSelector((state) => state.boards.active);
    const dispatch = useDispatch();
    const handleSet = (e) => {
        e.preventDefault();
        dispatch(setActive(e.target.textContent));
    };

    return <Aside onSet={handleSet} active={active} />;
};

export default AsideContainer;
