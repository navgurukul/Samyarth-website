import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/header.module.css';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { breakpoints } from '../styles/constant';

const Header = () => {
  const isActive = useMediaQuery(`(max-width:${breakpoints.values.sm}px)`);
  const email = 'vaibhav.m@navgurkul.org';
  return (
    <AppBar position="sticky" elevation={0} className={styles.header}>
      <Toolbar>
        <Grid container justifyContent= {isActive? 'center': "space-between"} alignItems="center">
          <Grid item>
            <Image src="/logo.svg" alt="Logo" width={200} height={70} />
          </Grid>
          {!isActive && ( 
            <Grid item>
              <Link href={`mailto:${email}`} passHref className={styles.navbarText}>
                <Typography variant="h6"  >
                  Connect With Us
                </Typography>
              </Link> 
            </Grid>
            )}
        </Grid>
         
      </Toolbar>
    </AppBar>
  );
};

export default Header;
