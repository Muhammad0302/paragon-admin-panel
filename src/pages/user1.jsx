import { Helmet } from 'react-helmet-async';

import { UserView1 } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Admin panel </title>
      </Helmet>

      <UserView1 />
    </>
  );
}
