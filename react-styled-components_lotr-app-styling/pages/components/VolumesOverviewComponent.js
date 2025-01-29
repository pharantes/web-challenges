import React from 'react'
import Link from "next/link";
import styled from 'styled-components';

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

export default function VolumesOverviewComponent({ introduction, volumes }) {

    return (
        <DetailsWrapper>
            <StyledTitle>The Lord of the Rings</StyledTitle>
            <StyledDescription>{introduction}</StyledDescription>
            <StyledList>
                {volumes.map((volume) => (
                    <li key={volume.id}>
                        <StyledLink href={`/volumes/${volume.slug}`}>{volume.title}</StyledLink>
                    </li>
                ))}
            </StyledList>
        </DetailsWrapper>
    )
}
