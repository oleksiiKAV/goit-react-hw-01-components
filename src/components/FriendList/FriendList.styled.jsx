// import {clsx} from 'clsx';
import styled from 'styled-components';

export const ItemCSS = styled.li`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 560px;
  padding: 20px;
  box-shadow: 10px 5px 5px #cbc9c997;
  border: solid 2px black;
  margin-bottom: 20px;
`;

export const ImageCSS = styled.img`
  width: 100px;
  height: 100px;
`;

export const StatusCSS = styled.span`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => (props.children ? 'green' : 'red')};
`;
export const NameCSS = styled.p`
  display: block;
  font-style: italic;
  font-size: 42px;
  color: ${props => (props.isOnline ? 'green' : 'red')};
`;
