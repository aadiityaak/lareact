import React from 'react';
import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Crud(props) {
    return (
        <>
        <Head title="Welcome" />
        <Navbar />
        <div class="container mx-auto">
            <Head title="Welcome" />
            <h1>About</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dictum diam, at convallis purus. Donec varius ipsum viverra, pharetra mauris at, cursus nibh. Nunc ut mattis arcu. Proin laoreet tortor vitae pharetra semper. Morbi ultrices neque id varius viverra. Proin sit amet viverra nibh. Fusce vel nibh neque. Donec odio massa, vulputate ut viverra dignissim, tempor a ligula. Ut tempor, est non dapibus dignissim, elit diam fringilla diam, ac lobortis est augue eget purus. Maecenas turpis felis, venenatis ac auctor dapibus, molestie et lorem. Donec non mattis enim, quis convallis ex. Donec tristique efficitur cursus. Nullam facilisis augue mauris, quis fringilla metus eleifend id. Suspendisse orci quam, blandit vitae erat et, tristique luctus dui.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dapibus vehicula nunc, sit amet dictum nibh dapibus in. Fusce molestie porta tellus, ut imperdiet elit ultricies nec. Duis tincidunt purus mauris, nec congue lorem dignissim eu. Praesent bibendum eget purus ac pharetra. Suspendisse maximus, nisl ut tempor porta, massa felis imperdiet odio, at convallis libero metus quis urna. Donec pretium maximus ligula, quis faucibus augue fermentum at. Pellentesque non sapien hendrerit, imperdiet augue a, ullamcorper nisl. Vestibulum dictum nisi vel elit pharetra malesuada. Mauris mollis sagittis tellus. Nullam lacinia metus ut massa imperdiet vestibulum. Donec consectetur augue ornare magna fringilla rhoncus.

Curabitur suscipit tempor rhoncus. Mauris nisi urna, finibus a egestas et, tincidunt et nisl. Phasellus quis lacus est. Pellentesque arcu urna, semper ut turpis ullamcorper, pulvinar ultricies ligula. Donec tempor mollis magna, nec sagittis lacus tempor vitae. Quisque nec aliquam neque. Praesent rutrum diam nulla.

Nullam vestibulum efficitur eros, in viverra mauris blandit id. Curabitur pulvinar ultricies fermentum. Donec condimentum diam augue, et auctor elit viverra ac. Morbi malesuada ultrices ultricies. Vivamus ultrices nibh eu dolor faucibus scelerisque. Nulla facilisi. Nullam purus mi, fringilla a purus non, vestibulum rutrum dolor. Sed tempor massa sed dolor tempus, sed tristique mauris iaculis. Duis justo justo, ultricies commodo quam non, interdum gravida dui. Sed lacus velit, laoreet sed mollis ut, tempus ornare nisi. Mauris pharetra tempus arcu. Sed lobortis enim augue, in bibendum mauris vestibulum vitae. Nulla a est lacinia elit malesuada maximus id a nulla. Quisque nulla tellus, efficitur at quam eu, venenatis gravida augue.
            </p>
            <p>
                <Link href="/dashboard">Go to dashboard</Link>
            </p>
        </div>
        </>
    );
}