import React from 'react'
import Link from 'next/link'
import { introduction, volumes } from '@/resources/lib/data'
export default function Home() {
    return (
        <>
            <h2><Link href={`/`} >← Home</Link></h2>
            <h1>Lord of the Rings</h1>
            <p>{introduction}</p>
            <h2>All Volumes</h2>
            <ul>
                {volumes.map((volume, index) => {
                    return <li key={index}><Link href={`/volumes/${volume.slug}`}>{volume.title}</Link></li>
                })}
            </ul>
        </>
    )
}
