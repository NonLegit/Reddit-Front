import { Box, ThemeProvider } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import MainContent from '../MainContent/MainContent';
import PostSubreddit from './Post/Post';
import CreatePostInHome from '../HomePage/HomePageContainer/CreatePostInHome/CreatePostInHome';
import SideBar from './SideBar/SideBar';
import {
  Com, Content, Cover, Data, Desc, IconContainer, Image, Join, Logo, Namee, Notification, PostHeader, TotalHeader, JoinCommunity,
} from './style';
import PostsClassificationSubreddit from './PostClassificationSubreddit/PostClassification';
import theme2 from '../../styles/theme/layout';
import useFetch from '../../hooks/useFetch';
import PostJoin from './PostJoin';

/**
 * Subreddit page
 * @component
 * @return {React.Component} - Subreddit page
 */

function Header() {
  const [posts, setPosts] = useState([]);
  const [icon, setIcon] = useState();
  const [join, setJoin] = useState('');
  const [disc, setDisc] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [primaryTopic, setPrimaryTopic] = useState();
  const [topics, setTopics] = useState([]);
  const [moderatoesName, setModeratoesName] = useState([]);
  const [fixedName, setFixedName] = useState();
  const [cookies] = useCookies(['redditUser']);
  const [username, setUserName] = useState('');
  const [members, setMembers] = useState();

  useEffect(() => { setUserName(cookies.redditUser?.userName); }, [cookies]);

  const { Name, postClass } = useParams();
  const [data, dataError, statusCode] = useFetch(`/subreddits/${Name}`);
  const value = useMemo(() => ({ data, dataError }), [data, dataError]);
  console.log(value);

  const postsUrl = `/subreddits/${Name}/${postClass || 'best'}`;
  const [data3, dataError3, statusCode3] = useFetch(postsUrl);
  console.log(dataError3);
  useEffect(() => {
    if (statusCode === 401 || statusCode3 === 401) {
      window.location.href = './login';
    }
    setIcon(data?.icon);
    setDisc(data?.description);
    setTopics(data?.topics);
    setPrimaryTopic(data?.primaryTopic);
    setCreatedAt(data?.createdAt);
    setModeratoesName(data?.moderators);
    setFixedName(data?.fixedName);
    setMembers(data?.members);
    setPosts(data3);
  }, [data, postClass, data3, statusCode, statusCode3]);

  // fetch data of communities i am a moderator of
  const [data2, dataError2, statusCode2] = useFetch('/subreddit/mine/moderator');
  const value2 = useMemo(() => ({ data2, dataError2 }), [data2, dataError2]);
  console.log(value2);
  useEffect(() => {
    if (statusCode2 === 401) {
      window.location.href = './login';
    }
    console.log(dataError2);

    if ((data2?.subreddits?.filter((e) => e.subredditName === Name.toString()))?.length > 0) {
      setJoin(true);
    } else {
      setJoin(false);
    }
  }, [data2, username, statusCode2]);
  // subscribr or unsubscribe
  const sendData = (b) => {
    PostJoin(`/subreddits/${Name}/subscribe`, b);
  };
  return (
    <>
      <Cover />
      <Logo>
        <IconContainer>
          <Data>
            <Image src={icon} />
            <Content>
              <Desc>
                <Namee>
                  r/
                  { Name }
                </Namee>
                <Com>
                  r/
                  {fixedName}
                </Com>
              </Desc>
              <Box sx={{ display: 'flex' }}>
                {!join
                && <JoinCommunity onClick={() => { setJoin(true); sendData(true); }}>Join</JoinCommunity>}
                {join
                && (
                <>
                  <Join onClick={() => { setJoin(false); sendData(false); }} onMouseEnter={(e) => { e.target.innerHTML = 'Leave'; }} onMouseLeave={(e) => { e.target.innerHTML = 'Joined'; }}>Joined</Join>
                  <Notification sx={{
                    '@media screen and (max-width: 435px)': {
                      display: 'none',
                    },
                  }}
                  >
                    <NotificationsIcon
                      color="primary"
                      sx={{
                        lineHeight: 0,
                        cursor: 'pointer',

                      }}
                    />
                  </Notification>
                </>
                )}
              </Box>
            </Content>
          </Data>
          <PostHeader>Posts</PostHeader>
        </IconContainer>
      </Logo>
      <TotalHeader>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          margin: '0 auto',
          '@media screen and (max-width: 435px)': {
            width: '100%',
          },
        }}
        >
          <MainContent width={640}>
            <ThemeProvider theme={theme2}>
              <CreatePostInHome />
            </ThemeProvider>
            <PostsClassificationSubreddit subredditName={Name} />
            { posts?.map((posts) => (
              <PostSubreddit
                createdAt={createdAt}
                title={posts.title}
                image={posts.image}
                owner={Name}
                author={posts.author}
                flairText={posts.flairText}
                flairBackgroundColor={posts.flairBackgroundColor}
                popularity={posts.popularity}
                flairColor={posts.flairColor}
                url={posts.url}
                kind={posts.kind}
                votes={posts.votes}
                commentCount={posts.commentCount}
                text={posts.text}
                key={posts.id}
              />
            ))}
          </MainContent>
          <SideBar members={members} Name={Name} username={username} topics={topics} disc={disc} primaryTopic={primaryTopic} createdAt={createdAt} moderatoesName={moderatoesName} />
        </Box>
      </TotalHeader>

    </>
  );
}
export default Header;
