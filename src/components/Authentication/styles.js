import {
  Box, Button, TextField, Link,
  InputAdornment,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { alpha, styled } from '@mui/material/styles';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DoneIcon from '@mui/icons-material/Done';
import theme from '../../styles/theme';

export const AuthenticationConatiner = styled(Box)(() => ({
  height: 'max-content',
  minHeight: '100vh',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'space-around',
  justifyContent: 'flex-start',

}));

export const AuthenticationBG = styled(Box)(() => ({
  height: '100vh',
  width: '156px',
  backgroundImage: 'url("https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const AuthenticationBody = styled(Box)(({ mnwidth, mxwidth }) => ({
  width: 'max-content',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '0px 20px',

  '&>*': {
    minWidth: `${mnwidth}`,
    maxWidth: `${mxwidth}`,
  },
}));

export const FirstPartyContainer = styled('form')(({ width, mnwidth }) => ({
  width: (width !== undefined) ? `${width}` : '100%',
  minWidth: (mnwidth !== undefined) ? `${mnwidth}` : null,
  marginTop: '15px',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
}));

export const AuthenticationInput = styled(TextField)(({ color }) => ({
  width: '95%',
  marginBottom: '10px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: `${color}`,
    },
    '&:hover fieldset': {
      borderColor: `${color}`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${color}`,
    },
  },
  '.MuiInputLabel-shrink': {
    color: `${color}`,
  },
}));

export const RedditTextField = styled((props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextField {...props} size="small" autoComplete="off" />
))(({ clr }) => ({

  width: '95%',
  marginBottom: '10px',
  '& .MuiFilledInput-root': {
    border: `1px solid ${clr}`,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',

    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(clr, 0.25)} 0 0 0 2px`,
      borderColor: `${clr}`,
    },
  },

  '.MuiInputLabel-shrink': {
    color: `${theme.palette.neutral.main} !important`,
  },
  '.MuiInputLabel-root': {
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '2em',
    letterSpacing: '0.1em',
  },

}));

export const AuthenticationButton = styled(Button)(({ width }) => ({
  width: (width !== undefined) ? `${width}` : '100%',
  height: 35,
  margin: '15px 0px',

  fontFamily: 'ibm-plex-sans,sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0.5px',

  backgroundColor: theme.palette.primary.main,
  color: 'white',

  '&:hover': {
    backgroundColor: theme.palette.primary.fade,
  },

  '&.MuiButton-root': {
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '0.5px',
  },
}));

/* Loading Button  */
export const RedditLoadingButton = styled(LoadingButton)(({ width }) => ({
  width: (width !== undefined) ? `${width}` : '95%',
  height: 35,
  margin: '10px 0px',

  fontFamily: 'ibm-plex-sans,sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0.5px',

  backgroundColor: theme.palette.primary.main,
  color: 'white',

  '&:hover': {
    backgroundColor: theme.palette.primary.fade,
  },

  '&.MuiButton-root': {
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '0.5px',
  },

  '&>.MuiLoadingButton-loadingIndicator': {
    color: '#fff',
  },
}));

export const StyledLink = styled(Link)(({ capital, fontWeight, fontSize }) => ({

  textTransform: `${capital}`,
  fontWeight: (fontWeight !== undefined) ? `${fontWeight}` : '800',
  textDecoration: 'none',
  fontSize: (fontSize !== undefined) ? `${fontSize}` : '12px',

  '&.MuiLink-root:hover': {
    color: theme.palette.primary.fade,
  },

}));

export const wrongIcon = <InputAdornment position="end"><PriorityHighIcon color="error" fontSize="10px" /></InputAdornment>;
export const rightIcon = <InputAdornment position="end"><DoneIcon color="primary" /></InputAdornment>;
