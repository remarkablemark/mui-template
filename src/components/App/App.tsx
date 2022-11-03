import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Header from '../Header';

export default function App() {
  return (
    <>
      <Header />
      <br />

      <Container component="main">
        <Typography>
          Welcome to{' '}
          <Link
            href="https://github.com/remarkablemark/mui-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            MUI Template
          </Link>
          !
        </Typography>
      </Container>
    </>
  );
}
