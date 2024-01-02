import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/header.module.css';
import Link from 'next/link';

const Header = () => {
  const email = 'vaibhavkumar@navgurukul.org';
  return (
    <AppBar position="sticky" elevation={0} className={styles.header}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Image src="/logo.svg" alt="Logo" width={200} height={70} />
          </Grid>
          <Grid item>
          <Link href={`mailto:${email}`} passHref className={styles.navbarText}>
            <Typography variant="h6"  >
              Get Involved
            </Typography>
          </Link> 
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
