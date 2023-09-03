import {useNavigate} from 'react-router-dom'; 
import NewMeetupForm from '../components/meetup/NewMeetupForm'
function NewMeetup() {
    const navigate = useNavigate();
    function AddMeetupHandler(meetupData) {
        console.log('meetupData.....',meetupData)
        fetch('https://react-getting-started-9fe72-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(() => {
            navigate('/');
        })
        console.log('meetupData.....',meetupData)
    }
    return (
        <section>
            <h1> NewMeetup Page</h1>
            <NewMeetupForm onAddMeetup = {AddMeetupHandler}/>
        </section>
    )
}
export default NewMeetup;