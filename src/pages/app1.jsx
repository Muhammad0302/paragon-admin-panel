import { Helmet } from 'react-helmet-async';

import { AppView1 } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Admin panel </title>
      </Helmet>

      <AppView1 />
    </>
  );
}
