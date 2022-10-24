import { styled } from '@mui/system';

export const TimelineContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: 640,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
