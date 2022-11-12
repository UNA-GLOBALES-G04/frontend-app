import { useCallback, useEffect } from 'react';

import { useGlobalState } from '.';

import { StorageService } from '../services';

import { useRouter } from 'next/router';


const useUpdateUser = () => {

  const [user, setUser] = useGlobalState('userState');
  const router = useRouter();

  const signIn = useCallback((userInfo) => {
    setUser(userInfo);
    StorageService.setUser(userInfo);
    router.push('/');
  }, []);

  const signOut = useCallback(async () => {
    setUser(null);
    StorageService.removeUser();
    router.reload();
  }, []);

  useEffect(() => {
    const setupUser = async () => {
      setUser(StorageService.getUser());
    }

    setupUser();
  }, [])

  return { user, signIn, signOut };
}

export default useUpdateUser;