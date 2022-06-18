import styled from "styled-components";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-auto-rows: auto 1fr;
  grid-template-areas:
    "sidebar content";
  min-height: 100vh;
`
