import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Template
          </Typography>

          <Link
            aria-label="Go to GitHub repository"
            color="inherit"
            component={IconButton}
            href="https://github.com/remarkablemark/mui-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
