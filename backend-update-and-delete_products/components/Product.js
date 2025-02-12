import React, { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import StyledLink from "../components/Link";
import Button from "../components/Button";
import EditProduct from "../components/EditProduct";

const Product = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

export default function ProductCard() {
  const [isEditting, setIsEditting] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/products/${id}`);

  function handleClick() {
    setIsEditting((prevState) => !prevState);
  }
  async function handleDelete() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <Product>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
      {!isEditting && <Button onClick={() => handleClick()}>Edit</Button>}
      <Button onClick={handleDelete}>Delete</Button>
      {isEditting && <EditProduct handleClick={handleClick} />}
    </Product>
  );
}
