import { useState, useEffect} from "react";
import styled from "styled-components";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const CopyrightSection = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  color: black;

  a {
    text-decoration: underline;
  }
`;

const Copyright = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <CopyrightSection>
      <AiOutlineCopyrightCircle fontSize={26} style={{paddingTop: 6}} />
      {year} Omar El Hadi
    </CopyrightSection>
  );
};

export default Copyright;
