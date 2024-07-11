import { Helmet } from 'react-helmet-async';

import { AddSubscribeView1 } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function AddSubscribePage1() {
  return (
    <>
      <Helmet>
        <title> Subscribe | Admin panel </title>
      </Helmet>

      <AddSubscribeView1 />
    </>
  );
}
