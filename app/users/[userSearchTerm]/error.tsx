'use client'; 

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main>
            <h2>Something went wrong!</h2>
            <p>
                Or go back to <Link href="/users" className="underline">Users</Link>
            </p>
        </main>
    );
}