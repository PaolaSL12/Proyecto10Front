import { hideLoading, showLoading } from '../../components/Loading/Loading';
import { printAttendees } from '../../components/printAttendees';
import { API } from '../../services/API';
import './attendees.css'

export const getAttendees = async () => {
    const main = document.querySelector("main");

    main.innerHTML = "";

    showLoading(main);
    const res = await API({ endpoint: "/attendees" })
    const attendees = await res.json();

    hideLoading();

    printAttendees(attendees, main)
}

