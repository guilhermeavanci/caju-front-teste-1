import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  justify-content: center;
  margin-top: 24px;
`;

export const Column = styled.div<{ $backgroundColor: any }>`
  height: auto;
  border-radius: 32px;
  min-height: 80vh;
  max-height: 80vh;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || '#FFF'};
`;

export const TitleColumn = styled.h3<{ $color: any }>`
  margin: 0px;
  color: ${({ $color }) => $color || '#000'};
  margin: 24px;
`;

export const ColumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`;
