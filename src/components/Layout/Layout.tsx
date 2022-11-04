import Container from '@mui/material/Container';
import type { ReactNode } from 'react';

import Header from '../Header';

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  return (
    <>
      <Header />
      <br />
      <Container component="main">{props.children}</Container>
    </>
  );
}
