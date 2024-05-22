import { Helmet } from 'react-helmet-async';

import { AddSubscribeView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function AddSubscribePage() {
  return (
    <>
      <Helmet>
        <title> Subscribe | Admin panel </title>
      </Helmet>

      <AddSubscribeView />
    </>
  );
}
