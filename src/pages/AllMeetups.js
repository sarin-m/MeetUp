import {useState, useEffect} from 'react';
import MeetupList from '../components/meetup/MeetupList';
function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetup, setLoadedMeetup] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-9fe72-default-rtdb.firebaseio.com/meetups.json')
        .then (response => {
            response.json()
            .then(data => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id:key,
                        ...data[key]
                    }
                    meetups.push(meetup)
                }
                setIsLoading(false);
                setLoadedMeetup(meetups);
                console.log('data....',meetups);
            })
        })
    }, [])

    if (isLoading) {
        return (
            <section>
                <p>Loading......</p>
            </section>
        )
    }
    return (
        <section>
           <h1> All MeetUp Page</h1>
            <MeetupList meetup={loadedMeetup}/>
        </section>
    )
}
export default AllMeetups;