import { useParams } from "react-router";
import { MenuContainer } from "../menu-container/menu-container";

export const MenuPage = () => {

    const { restaurantId } = useParams();


    return <MenuContainer restaurantId={restaurantId}/>
}