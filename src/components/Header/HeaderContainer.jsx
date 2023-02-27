import { useSelector } from "react-redux";
import Header from "./Header";

const HeaderConteiner = () => {
    const title = useSelector((state) => state.boards[state.boards.active].name);

    return <Header title={title} />;
};

export default HeaderConteiner;
