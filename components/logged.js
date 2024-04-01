export const getlogged = async () => {
    const logged = JSON.parse(localStorage.getItem("user"))

    const res = await fetch(`https://proyecto10-back-phi.vercel.app/api/attendees/name/${logged.name}`);
    const response = await res.json();
    
    const userAteendee = response[0]

    return userAteendee
}
