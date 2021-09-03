import { Typography, makeStyles, Box } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  footerTop: {
    height: '50px',
    color: '#ffffff',
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '0.1px solid #fff',
  },
  footerTypo: {
    fontSize: '0.8rem',
    fontWeight: 600,
  },
  footerIcon: {
    margin: theme.spacing(0, 0.3, 0, 0.3),
    fontSize: '1.5rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footerTop}>
      <Typography className={classes.footerTypo}>
        {' '}
        Design and Developed By Prashant khanal{' '}
      </Typography>
      <LinkedInIcon className={classes.footerIcon} />
      <GitHubIcon className={classes.footerIcon} />
      <FacebookIcon className={classes.footerIcon} />
    </Box>
  );
};

export default Footer;
