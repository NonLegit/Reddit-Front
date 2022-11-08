import {
  Box,
  ClickAwayListener,
  Divider, ListItem,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCommunitiesInCreatePostContext } from '../../../contexts/CommunitiesInCreatePostContext';
import iMatcher from '../../../utils/iMatcher';
import numberWithCommas from '../../../utils/numberWithCommas';
import RedditButton from '../../RedditButton/RedditButton';
import {
  AvatarContainer, CommunityCategory, CustomList, DashedCircle, DropIcon, MenuContainer, MenuOuterContainer, SubredditsContainer, SubredditSearchField, CustomAvatar, CommunityName, CommunityAvatar, Members, CommunityContainer, SearchIcon, NoCommunitiesFound, ChosenCommunityIcon,
} from './styles';

function SubredditsMenu(props) {
  // props
  const { setCommunityToPostIn, setOwnerType } = props;

  // states
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const [communityName, setCommunityName] = useState('');
  const [chosenCommunityIcon, setChosenCommunityIcon] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  // contexts
  const { communities } = useCommunitiesInCreatePostContext();

  // handlers
  const handleClickOnChoose = () => {
    setOpen(true);
    setSearching(true);
    setChosenCommunityIcon(null);
  };
  const handleClickAway = () => {
    setOpen(false);
    setSearching(false);
    setShowIcon(true);
  };
  const handleDrop = () => {
    if (open) {
      setSearching(true);
      setOpen(false);
    } else {
      setOpen(true);
      setSearching(true);
    }
  };
  const chooseCommunity = (communityId, communityName, icon, ownerType) => {
    setCommunityToPostIn(communityId);
    setOwnerType(ownerType);
    setCommunityName(communityName);
    setOpen(false);
    setChosenCommunityIcon(icon);
  };
  const handleCommunityNameChange = (e) => {
    setCommunityName(e.target.value);
  };
  const handleFilter = (community) => iMatcher(`r/${community.subredditName}`, communityName);

  // variables
  const filteredArray = communities?.filter(handleFilter);
  const filteredCommunities = filteredArray?.length === 0 ? null : filteredArray;
  const username = 'sa3eedosumboreh';
  const profileMatching = iMatcher(`u/${username}`, communityName);
  const userIcon = 'https://styles.redditmedia.com/t5_758ciw/styles/profileIcon_snoodd8b11a2-0e4a-4403-a861-a9fa7474b850-headshot.png?width=256&height=256&crop=256:256,smart&s=bc53006491e647452f185afa69775cd6a241598c';

  return (
    <MenuOuterContainer>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box height="100%" width="fit-content">
          <MenuContainer>
            {searching ? <SearchIcon />
              : (showIcon && chosenCommunityIcon ? <ChosenCommunityIcon src={chosenCommunityIcon} /> : <DashedCircle />)}
            <SubredditSearchField
              type="text"
              placeholder={searching ? 'Search communities' : 'Choose a community'}
              onClick={handleClickOnChoose}
              value={communityName}
              onChange={handleCommunityNameChange}
            />
            <DropIcon onClick={handleDrop} />
          </MenuContainer>
          {open
          && searching
          && (
          <SubredditsContainer>
            { profileMatching
            && (
            <>
              <CommunityCategory padding="16px 16px 4px">
                your profile
              </CommunityCategory>
              <CustomList>
                <ListItem
                  sx={{ cursor: 'pointer' }}
                  onClick={() => chooseCommunity(0, `u/${username}`, userIcon, 'User')}
                >
                  <AvatarContainer>
                    <Link to="/">
                      <CustomAvatar src={userIcon} alt="avatar" />
                    </Link>
                  </AvatarContainer>
                  <CommunityContainer>
                    <CommunityName>
                      u/
                      {username}
                    </CommunityName>
                  </CommunityContainer>
                </ListItem>
              </CustomList>
              {(profileMatching && filteredCommunities) && <Divider />}
            </>
            )}
            {!filteredCommunities && !profileMatching && (
            <NoCommunitiesFound>
              No communities found
            </NoCommunitiesFound>
            )}
            {(!profileMatching || filteredCommunities) && (
            <Box
              display="flex"
              justifyContent="space-between"
              padding="8px 8px 3px 16px"
              alignItems="center"
            >
              <CommunityCategory>
                your communities
              </CommunityCategory>
              <RedditButton
                padding="2px 8px"
                fontSize={12}
                fontWeight={700}
              >
                create new
              </RedditButton>
            </Box>
            )}

            <CustomList>
              {(filteredCommunities || (profileMatching ? [] : communities))?.map((community) => {
                const {
                  id, subredditName, membersCount, icon,
                } = community;
                return (
                  <ListItem
                    key={id}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => chooseCommunity(id, `r/${subredditName}`, icon, 'Subreddit')}
                  >
                    <CommunityAvatar src={icon} />
                    <CommunityContainer>
                      <CommunityName>
                        r/
                        {subredditName}
                      </CommunityName>
                      <Members>
                        {numberWithCommas(membersCount)}
                        {' '}
                        members
                      </Members>
                    </CommunityContainer>
                  </ListItem>
                );
              })}
            </CustomList>
            <Divider />
          </SubredditsContainer>
          )}
        </Box>
      </ClickAwayListener>
    </MenuOuterContainer>
  );
}
export default SubredditsMenu;
