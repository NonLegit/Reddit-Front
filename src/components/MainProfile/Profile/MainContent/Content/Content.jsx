import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../../contexts/UserProvider';
import EmptyContent from '../EmptyContent/EmptyContent';
import Filter from '../Filter/Filter';
import { NEW, NewBox } from '../styles';
import ContentBox from './styles';
import Posts from './Posts/Posts';
// import Comments from './Comments/Comments';
import { overviewServer } from '../../../profileServer';

/**
 * Content component display the comments and posts in the profile page
 *
 * @component Content
 * @property {array} posts -array of posts objects
 * @property {array} comments -array of comments objects
 * @property {string} username
 * @returns {React.Component} Content
 */
function Content() {
  const { username } = useContext(UserContext);
  const [isContent, setIsContent] = useState(false);
  const [posts] = overviewServer(username);

  useEffect(() => {
    console.log(posts);
    if (posts?.posts.length > 0) { setIsContent(true); }
    // if (posts?.posts.length > 0 || comments?.length > 0) { console.log(true); setIsContent(true); }
  }, [username, posts]);

  const emptyContent = `hmm... u/${username}
          hasn't posted recently`;

  return (
    <ContentBox>
      <Filter subTitle2="" />
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <>
            <NEW>
              <NewBox>
                NEW! Now you can get data and insights on your posts
                <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
              </NewBox>
            </NEW>
            { posts?.posts.map((post, index) => (
              <Posts key={`${index + 0}`} post={post} />
            ))}
            {/* {comments.map((comment, index) => (
              <Comments key={`${index + 0}`} comment={comment} />
            ))} */}
          </>
          )}
    </ContentBox>
  );
}

export default Content;
