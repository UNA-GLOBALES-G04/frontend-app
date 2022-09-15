import { useCallback, useEffect } from 'react';

import { useRouter } from 'next/router'

import _ from 'lodash';

import { useGlobalState } from '.';

import LanguageDictionary from '../languages';

import { StorageService } from '../services';


const useTranslation = () => {

  const router = useRouter();

  const [language, setLanguage] = useGlobalState('languageState');

  const t = useCallback((path) => {
    return _.get(LanguageDictionary[language], path);
  }, [language]);

  const switchLanguage = useCallback(async (selectedLanguage, isReloadRequired) => {
    await StorageService.setLanguage(selectedLanguage);
    setLanguage(selectedLanguage);

    if (isReloadRequired) router.reload();
  }, [language]);

  useEffect(() => {
    const setupLanguage = async () => {
      setLanguage(await StorageService.getLanguage())
    }

    setupLanguage();
  }, [])

  return { language, switchLanguage, t };
}

export default useTranslation;