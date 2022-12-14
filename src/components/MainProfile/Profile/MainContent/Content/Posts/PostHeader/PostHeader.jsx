import { Typography } from '@mui/material';
import moment from 'moment/moment';
import {
  HeaderAvatar, HeaderAvatarImage, HeaderPost, LinkTo,
} from './styles';

/**
 * Header for a post
 *
 * @component PostHeader
 * @property {string} subReddit - name of subReddit the post published in
 * @property {string} nameuser - name of publisher
 * @property {string} time - time of publishing the post
 * @returns {React.Component} PostHeader
 */

function PostHeader(props) {
  const {
    subReddit, nameUser, Time, type, icon,
  } = props;
  return (
    <HeaderPost>
      <HeaderAvatar>
        <HeaderAvatarImage src={icon} />
      </HeaderAvatar>

      <LinkTo to={(type === 'Subreddit') ? `/Subreddit/${subReddit}` : `/user/${subReddit}`}>
        <Typography variant="caption" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
          {type === 'Subreddit' ? 'r/' : 'u/'}
          {subReddit}
          {' '}
          .
          {' '}
        </Typography>
      </LinkTo>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        {' '}
        Posted by
      </Typography>
      <LinkTo to={`/user/${nameUser}`}>
        <Typography variant="caption" sx={{ color: '#787c7e', '&:hover': { textDecoration: 'underline' } }}>
          u/
          {nameUser}
        </Typography>
      </LinkTo>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        {' '}
        {(moment.utc(Time).local().startOf('seconds')
          .fromNow())}
      </Typography>
    </HeaderPost>
  );
}

export default PostHeader;
