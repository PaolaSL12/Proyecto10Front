
import "./myEvents.css";
import { hideLoading, showLoading } from '../../components/Loading/Loading';
import { getlogged } from '../../utils/logged';
import { getEvents } from "../../components/getEvents";


export const MyEvents = async () => {
    const main = document.querySelector("main");

    main.innerHTML = "";

    try {
    showLoading(main)

    const userAteendee = await getlogged();

    const divMyEvents = document.createElement("div");
    divMyEvents.className = "divMyEvents"

    hideLoading();
    main.append(divMyEvents)

    getEvents(divMyEvents, userAteendee);

    return userAteendee
    } catch (error) {
        console.error("Error MyEvents:", error);
    }    
}


