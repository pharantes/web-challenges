import styled from "styled-components";

export default function Card() {
  return (
    <CardWrap>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardWrap>
  );
}
const CardWrap = styled.div`
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`
const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.25rem;
`
const CardDescription = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
`