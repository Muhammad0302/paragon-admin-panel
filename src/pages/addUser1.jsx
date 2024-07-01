import { Helmet } from 'react-helmet-async';

import { AddUserView1 } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function AddUserPage() {
  return (
    <>
      <Helmet>
        <title> User | Admin panel </title>
      </Helmet>

      <AddUserView1 />
    </>
  );
}
