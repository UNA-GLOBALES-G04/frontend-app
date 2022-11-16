import {useEffect} from 'react';
import { useRouter } from 'next/router'
import ServiceOfferedCopy from "@src/modules/ServiceOffered/ServiceOfferedCopy";

const ServicesTest = () => {

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {id && <ServiceOfferedCopy serviceId={id}/>}
    </div>
  );
};

export default ServicesTest;