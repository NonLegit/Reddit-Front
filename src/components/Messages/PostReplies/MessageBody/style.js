import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const Body = styled('div')(({ theme, index }) => ({

  padding: ' 10px 15px',
  backgroundColor: (index % 2) ? '#f6f7f8' : theme.palette.common.white,
}));
export const MessageBoddy = styled('div')(() => ({
  padding: '10px 15px',
}));
export const MessageHeader = styled('h3')(() => ({
  margin: '0px 0px  0.5em 0px',
}));
export const LinkProfile = styled(Link)(({ type }) => ({
  color: (type === 'profile') ? '#4f79d3' : '#2f8822',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
export const MessageContent = styled('div')(() => ({
  lineHeight: '1.5em',
  fontSize: '1.0769230769230769em',
  fontWeight: '400',
  marginTop: '10px',
  fontFamily: 'inherit',
  marginBottom: '10px',
}));
export const ReplayButton = styled('div')(() => ({
  color: '#888',
  fontWeight: 'bold',
  cursor: 'pointer',
  width: 'fit-content',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
export const TeaxArea = styled('textarea')(() => ({
  width: '60%',
  height: '100px',
  padding: '8px',
}));
export const ButtonsContanier = styled('div')(() => ({
  display: 'flex',
  gap: '8px',
}));
export const SubmitButton = styled('button')(({ theme }) => ({
  padding: '6px 16px 4px',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  fontWeight: 'bold',
  borderColor: '#00497f',
  borderStyle: 'solid',
  borderWidth: '0px 2px 2px 0px',
  cursor: 'pointer',
  borderRadius: '4px',
  marginTop: '12px',
}));
export const Error = styled('span')(({ unread }) => ({
  color: (unread) ? 'red' : 'black',
  fontSize: 'small',
  margin: '3px',
}));
export const Footer = styled('div')(() => ({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
}));
