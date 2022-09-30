import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typography from "@mui/material/Typography";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography>@{new Date().getFullYear()} PhotoGallery</Typography>
      <Stack direction="row" justifyContent="center">
        <IconButton color="secondary">
          <Link href={"https://www.facebook.com/"}>
            <FacebookIcon />
          </Link>
        </IconButton>
        <IconButton color="secondary">
          <Link href="https://www.instagram.com/">
            <InstagramIcon />
          </Link>
        </IconButton>
      </Stack>
    </footer>
  );
};

export default Footer;
