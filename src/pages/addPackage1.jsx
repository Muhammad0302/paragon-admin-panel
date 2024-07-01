import { Helmet } from 'react-helmet-async';

import { AddPackageView1 } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function AddPackagePage() {
  return (
    <>
      <Helmet>
        <title> Package | Admin panel </title>
      </Helmet>

      <AddPackageView1 />
    </>
  );
}
