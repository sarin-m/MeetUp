import { useRef} from 'react';
import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'
function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(e) {
        e.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const imageRef = imageInputRef.current.value;
        const addressRef = titleInputRef.current.value;
        const descriptionRef = imageInputRef.current.value;
        const meetUpDate = {
            title: enteredTitle,
            image: imageRef,
            address: addressRef,
            description: descriptionRef
        };
        // console.log('meetupData....',meetUpDate);
        props.onAddMeetup(meetUpDate)
    }
    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='text' required id='image' ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea required id='description' ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add MeetUp</button>
                </div>
            </form>
        </Card>
    )
}
export default NewMeetupForm;