import { useSelector } from "react-redux";
import Header from "./Header";

const HeaderConteiner = () => {
    const title = useSelector((state) => state.boards.active);

    return <Header title={title} />;
};

export default HeaderConteiner;
