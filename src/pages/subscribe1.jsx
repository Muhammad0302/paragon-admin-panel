import { Helmet } from 'react-helmet-async';

import { SubscribeView1 } from 'src/sections/user/view/';

// ----------------------------------------------------------------------

export default function AddUserPage() {
  return (
    <>
      <Helmet>
        <title> Subscribe | Admin panel </title>
      </Helmet>

      <SubscribeView1 />
    </>
  );
}
