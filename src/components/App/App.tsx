import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Header from '../Header';
import Layout from '../Layout';

export default function App() {
  return (
    <Layout>
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
    </Layout>
  );
}
