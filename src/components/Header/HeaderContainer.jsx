import { useDispatch, useSelector } from "react-redux";
import { setVissible } from "../../features/boards/boardsSlice";
import Header from "./Header";

const HeaderConteiner = () => {
    const title = useSelector((state) => state.boards[state.boards.active].name);
    const dispatch = useDispatch();
    const handleClick = () => dispatch(setVissible());

    return <Header title={title} onClick={handleClick} />;
};

export default HeaderConteiner;
