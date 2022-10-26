import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';

export const Voting = styled(Box)(({ flexDirection }) => ({
  padding: '8px 4px',
  backgroundColor: (flexDirection === 'column' ? '#F8F9FA' : '#fff'),
  display: 'flex',
  borderRadius: '3px 0 0 3px',
  alignItems: 'center',
}));

export const Votes = styled(Box)(() => ({
  fontSize: '12px',
  fontWeight: 'bolder',
  cursor: 'pointer',
}));

export const ReactionIconButton = styled(IconButton)(() => ({
  borderRadius: 4,
  padding: '2px 3px',
}));
