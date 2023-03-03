import { useSelector, useDispatch } from "react-redux";
import { setActive, setVissible } from "../../features/boards/boardsSlice";
import Aside from "./Aside";

const AsideContainer = () => {
    const active = useSelector((state) => state.boards.active);
    const vissible = useSelector((state) => state.boards.vissible);
    const dispatch = useDispatch();
    const handleSet = (e) => {
        e.preventDefault();
        dispatch(setActive(e.target.id));
        dispatch(setVissible());
    };

    return <Aside onSet={handleSet} active={active} isHidden={vissible} />;
};

export default AsideContainer;
