import { hideLoading, showLoading } from '../../components/Loading/Loading';
import { printAttendees } from '../../components/printAttendees';
import './attendees.css'

export const getAttendees = async () => {
    const main = document.querySelector("main");

    main.innerHTML = "";

    showLoading(main);

    const res = await fetch("https://proyecto10-back-phi.vercel.app/api/attendees");
    const attendees = await res.json();

    hideLoading();

    printAttendees(attendees, main)
}

