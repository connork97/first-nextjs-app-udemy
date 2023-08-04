import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 1, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 2, 23456 Some Other City',
        description: 'This is a second meetup!'
    }
]

function HomePage(props) {

    return (
        <Fragment>
            <Head>
                <title>First Next.js App!</title>
                <meta
                    name="description"
                    content="Browse all of the meetups in this React/Next.js application!"
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//  Fetch Data from an API here!
    // return {
    //     props: {
    //         meetups: API Data (aka DUMMY_MEETUPS)
    //     }
    // }
// }

export async function getStaticProps() {
    // * fetch data from API here
    const client = await MongoClient.connect('mongodb+srv://connorkormos97:UEuUL3qk14xLxvza@meetups.79ky1ce.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        }
    }
}

export default HomePage;