import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import RedditButton from '../../../../../RedditButton/RedditButton';

export const PostsQueueBox = styled(Box)(() => ({
  minHeight: 150,
  display: 'flex',
  backgroundColor: 'white',
  marginTop: 10,
  borderRadius: 3,
  border: '1px solid #ccc;',
  marginBottom: 10,
  '&:hover': {
    border: '1px solid #898989',
    cursor: 'pointer',
  },
}));

export const PostContentBox = styled(Box)(() => ({
  height: '100%',
  width: '100%',
}));

export const TitlePost = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],

}));
export const ParagraphPost = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  minHeight: 36,
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center',
}));

export const Flair = styled(RedditButton)(({ backgroundcolor, flaircolor }) => ({
  fontSize: 10,
  padding: '2px 10px',
  fontWeight: 'normal',
  backgroundColor: backgroundcolor,
  color: flaircolor,
  marginLeft: 5,
  '&:hover': {
    backgroundColor: backgroundcolor,
  },
}));
