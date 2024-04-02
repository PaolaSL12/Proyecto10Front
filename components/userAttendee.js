export const getUserAttendee = async (userAteendee) => {
    const res = await fetch(`https://proyecto10-back-phi.vercel.app/api/attendees/${userAteendee._id}`);
        const events = await res.json();
    
        const myEvents = events.events
    return myEvents
}

