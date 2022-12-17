import {
  Box, Button, styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const ComminityBox = styled(Box)(() => ({
  width: '100%',
  height: 36,
  display: 'flex',
  alignItems: 'center',
  marginTop: 10,
  position: 'relative',
}));

export const HeaderAvatar = styled(Box)(() => ({
  width: 32,
  height: 32,
  marginRight: 8,
  borderRadius: '50%',
}));

export const HeaderAvatarImage = styled('img')(() => ({
  width: 32,
  height: 32,
}));

export const SubReddit = styled(Link)(() => ({
  color: 'black',
  textDecoration: 'none',
  fontSize: 13,
  height: 'fit-content',
  fontFamily: "'Mukta', sans-serif",
  fontWeight: 500,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const Joined = styled(Button)(() => ({
  textTransform: 'unset',
  borderRadius: 999,
  height: 32,
  width: 106,
  fontWeight: 700,
  position: 'absolute',
  boxShadow: 'none',
  right: 0,
  '&:hover': {
    boxShadow: 'none',
  },
}));
