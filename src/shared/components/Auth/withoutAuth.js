import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useGlobalState, useHasHydrated } from "@src/shared/hooks";
import { StorageService } from "@src/shared/services";

const withoutAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [data, setData] = useState(null);

    const [user, setUser] = useGlobalState("userState");

    useEffect(() => {
      const getUser = async () => {
        let userData = user;

        if(!userData) {
          userData = StorageService.getUser();
          setUser(userData);
        }
        console.log('userData', userData);
        if (userData) {
          router.push("/");
        } else {
          setData(userData);
        }
      };
      getUser();
    }, []);

    return useHasHydrated() && !data ? <Component /> : <></>; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};

export default withoutAuth;
