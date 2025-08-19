import { makeStyles } from '@mui/styles';
import { createStyles } from '@mui/styles';

export const resumeStyles = makeStyles(() =>
  createStyles({
    container: {
      flexDirection: 'column',
      display: 'flex',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    imgContainer: {
      height: 56,
      width: 56,
      float: 'left',
      position: 'relative',
    },
    img: {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxSizing: 'border-box',
      backgroundClip: 'content-box',
      border: '4px solid transparent',
      borderRadius: '6px',
    },
    companyContainer: {
      flex: '1 0',
      width: 'auto',
      marginLeft: '80px',
      overflow: 'hidden',
      marginBottom: 8,
    },
    title: {
      fontWeight: 800,
      fontSize: 18,
      marginBottom: 4,
    },
    description: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    link: {
      color: 'blue',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })
);