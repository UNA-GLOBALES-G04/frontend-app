import {useEffect} from 'react';
import { useRouter } from 'next/router'
import UserProfile from "@src/modules/UserProfile/UserProfile";

const ServicesTest = () => {

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {id && <UserProfile userId={id}/>}
    </div>
  );
};

export default ServicesTest;