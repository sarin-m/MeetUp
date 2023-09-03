import MeetupList from '../components/meetup/MeetupList';
const DUMMY_DATA = [{
    id:'m1',
    title:'This is first Image',
    image:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    address: 'Some Street 1',
    description:'This is the first image',
    
},
{
    id:'m2',
    title:'This is Second Image',
    image:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    address: 'Some Street 2',
    description:'This is the Second image',
}]
function AllMeetups() {
    return (
        <section>
           <h1> All MeetUp Page</h1>
            <MeetupList meetup={DUMMY_DATA}/>
        </section>
    )
}
export default AllMeetups;