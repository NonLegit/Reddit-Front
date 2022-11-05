import { SideBarContainer, CommunityContainer } from '../../Search/SideBar/style';

import BackHome from '../../BackHomeBottun/BackHome';
import About from './AboutSubReddit/About';
import Moderators from './Moderators/Moderators';
import Flirt from './Flirt/Flirt';

function SideBar() {
  return (
    <SideBarContainer>
      <CommunityContainer>
        <About />
      </CommunityContainer>
      <CommunityContainer>
        <Flirt />
      </CommunityContainer>
      <CommunityContainer sx={{ padding: '0px 12px' }}>
        <Moderators />
      </CommunityContainer>
      <BackHome sx={{ marginTop: -5 }} />
    </SideBarContainer>
  );
}

export default SideBar;
