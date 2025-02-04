import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { volumes } from '@/resources/lib/data'
import { useRouter } from "next/router.js"


export default function VolumePage() {
    const router = useRouter();
    const { slug } = router.query;

    if (!router.isReady) {
        return null;
    }

    const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

    const volume = volumes[volumeIndex];
    const nextVolume = volumes[volumeIndex + 1];
    const previousVolume = volumes[volumeIndex - 1];

    const { title, description, cover, books } = volume;
    return (
        <>
            <h2><Link href={`/volumes`} >← All Volumes</Link></h2>
            <h1>{title}</h1>
            <p>{description}</p>
            <ul>
                {books.map(({ ordinal, title }) => (
                    <li key={title}>
                        {ordinal}: <strong>{title}</strong>
                    </li>
                ))}
            </ul>
            <Image
                src={cover}
                alt={`Cover image of ${title}`}
                width={140}
                height={230}
            />
            {previousVolume ? (
                <div>
                    <Link href={`/volumes/${previousVolume.slug}`}>
                        ← Previous Volume: {previousVolume.title}
                    </Link>
                </div>
            ) : null}
            {nextVolume ? (
                <div>
                    <Link href={`/volumes/${nextVolume.slug}`}>
                        Next Volume: {nextVolume.title} →
                    </Link>
                </div>
            ) : null}
        </>
    )
}
