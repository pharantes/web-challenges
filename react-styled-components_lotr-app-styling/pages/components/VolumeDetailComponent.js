import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledLink = styled(Link)`
    font-size: 1.2rem;
    padding: 1rem 0;
`
const StyledTitle = styled.h1`
    text-decoration: underline;
`
const StyledDescription = styled.p`
    max-width: 640px;
`
const StyledList = styled.ul`
    list-style-type: none;
`
const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default function VolumeDetailComponenet({ volume, previousVolume, nextVolume }) {
    return (
        <DetailsWrapper>
            <StyledLink href="/volumes">← All Volumes</StyledLink>
            <StyledTitle>{volume.title}</StyledTitle>
            <StyledDescription>{volume.description}</StyledDescription>
            <StyledList>
                {volume.books.map(({ ordinal, title }, index) => (
                    <li key={index}>
                        {ordinal}: <strong>{title}</strong>
                    </li>
                ))}
            </StyledList>
            <Image
                src={volume.cover}
                alt={`Cover image of ${volume.title}`}
                width={140}
                height={230}
            />
            {
                previousVolume ? (
                    <StyledLink href={`/volumes/${previousVolume.slug}`}>
                        ← Previous Volume: {previousVolume.title}
                    </StyledLink>
                ) : null
            }
            {
                nextVolume ? (
                    <StyledLink href={`/volumes/${nextVolume.slug}`}>
                        Next Volume: {nextVolume.title} →
                    </StyledLink>
                ) : null
            }
        </DetailsWrapper>
    )
}
