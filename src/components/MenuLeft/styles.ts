import styled from 'styled-components';

export const SCMenuLeft = styled.div`
  padding: 5px 10px;
  background-color: #fff;
  border: solid 1px #00000030;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 #00000030;
`
export const SCMenuItem = styled.div<{ active: true | false }>`
  color: ${props => (props.active ? '#0a58ca' : '#495057')};
  font-weight: 600;
  cursor: pointer;
`
export const SCItemChild = styled.div<{ active: true | false, status: true | false }>`
  color: ${props => (props.active ? '#0a58ca' : '#495057')};
  font-weight: 600;
  cursor: pointer;
  padding: 0px 10px;
  overflow: hidden;
  transition: height 0.3s;
  height: ${props => (props.status ? '24px' : '0px')};
`
export const SCLogoutBtn = styled.div`
  font-weight: 600;
  cursor: pointer;
`