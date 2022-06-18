import styled from "styled-components";

export const Sidebar = styled.nav`
  grid-area: sidebar;
  position: fixed;
  padding: 40px;
  
  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    
    & li {
      margin: 10px 0;
      text-transform: uppercase
    }
    
    & a {
      color: hotpink;
      text-decoration: none;
    }

    & a:hover {
      color: var(--primary);
    }
  }
`


