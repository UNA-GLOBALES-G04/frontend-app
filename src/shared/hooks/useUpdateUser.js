import { useCallback, useEffect } from 'react';

import { useGlobalState } from '.';

import { StorageService } from '../services';

import { useRouter } from 'next/router';


const useUpdateUser = () => {

  const [user, setUser] = useGlobalState('userState');
  const router = useRouter();

  const signIn = useCallback(async (userInfo) => {
    setUser(userInfo);
    await StorageService.setUser(userInfo);
    router.push('/');
  }, []);

  const signOut = useCallback(async () => {
    setUser(null);
    await StorageService.setUser(null);
  }, []);


  return { user, signIn, signOut };
}

export default useUpdateUser;