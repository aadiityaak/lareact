import React from 'react';
import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Home(props) {
    return (
        <>
        <Head title="Welcome" />
        <Navbar />
        <div class="container mx-auto">
            <Head title="Welcome" />
            <h1>Welcome to My Project</h1>
            <p>
                This is the welcome page of the InertiaJS app. 
            </p>
            <p>
                <Link href="/dashboard">Go to dashboard</Link>
            </p>
        </div>
        </>
    );
}