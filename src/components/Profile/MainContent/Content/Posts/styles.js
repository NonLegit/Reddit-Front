import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  height: 36,
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center',
}));
