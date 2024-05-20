import { Helmet } from 'react-helmet-async';

import { SubscribeView } from 'src/sections/user/view/';

// ----------------------------------------------------------------------

export default function AddUserPage() {
  return (
    <>
      <Helmet>
        <title> Subscribe | Admin panel </title>
      </Helmet>

      <SubscribeView />
    </>
  );
}
