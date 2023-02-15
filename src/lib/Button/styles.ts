import styled from 'styled-components';

export const Primary = styled.button`
  background: ${(props) => props.color || '#007ff8'};
  border-radius: 32px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  padding: 8px 16px;
`;
