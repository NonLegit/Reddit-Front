import {
  Box,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import ModerationDrawer from '../components/Moderation/ModerationDrawer/ModerationDrawer';
import ModerationHeader from '../components/Moderation/ModerationHeader/ModerationHeader';
import ModerationMainPage from '../components/Moderation/ModerationMainPage/ModerationMainPage';
import Queue from '../components/Moderation/ModQueues/Queue';
// import { ModMainPage } from '../components/Moderation/ModerationMainPage/styles';
// import Queue from '../components/Moderation/ModQueues/Queue/Queue';
// import Profile from './Profile';

const renderSwitch = (param) => {
  switch (param) {
    case 'Spam':
    case 'Edited':
    case 'Unmoderated':
      return <Queue subTitle={param} />;
    default:
      return <ModerationMainPage />;
  }
};

function Moderation() {
  const { subTitle } = useParams();
  return (
    <>
      <ModerationHeader />
      <Box sx={{ marginTop: 5 }}>
        <ModerationDrawer />
        {renderSwitch(subTitle)}

      </Box>
    </>
  );
}

export default Moderation;
