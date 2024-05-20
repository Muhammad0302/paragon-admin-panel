import { Helmet } from 'react-helmet-async';

import { PackageView } from 'src/sections/user/view/';

// ----------------------------------------------------------------------

export default function AddUserPage() {
  return (
    <>
      <Helmet>
        <title> Package | Admin panel </title>
      </Helmet>

      <PackageView />
    </>
  );
}
