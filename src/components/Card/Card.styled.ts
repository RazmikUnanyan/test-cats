import styled from "styled-components";

interface Props {
    url: string
}

export const Card = styled.div`
  
`

export const Img = styled.img<Props>`
  width: 200px;
  height: 200px;
  margin: 15px;
  border-radius: 10px;
  background-size: contain;
  background-position: center;
  background:url(${(props) => props.url});
`