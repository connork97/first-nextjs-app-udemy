import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) { 
    return (
        <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
        // <MeetupDetail
        //     image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
        //     title='A Third Meetup'
        //     address='Some Street 3, Some City'
        //     description='This is a third meetup description'
        // />
    )
}

export async function getStaticPaths() {
    
    const client = await MongoClient.connect('mongodb+srv://connorkormos97:UEuUL3qk14xLxvza@meetups.79ky1ce.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        }))
        // paths: [
        //     { params: {
        //         meetupId: 'm1'
        //     } },
        //     { params: {
        //         meetupId: 'm2'
        //     } }
        // ]
    }
}

export async function getStaticProps(context) {

    // fetch data for single meetup

    
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://connorkormos97:UEuUL3qk14xLxvza@meetups.79ky1ce.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    
    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            },
            // meetupData: {
            //     id: meetupId,
            //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
            //     title: 'A Third Meetup',
            //     address: 'Some Street 3, Some City',
            //     description: 'This is a third meetup description'
            // }
        }
    }
}

export default MeetupDetails;