export const getTheme = () => {
  try {
    const value = localStorage.getItem(theme);
    if (!value) throw Error();

    return value;
  } catch (error) {
    return es;
  }
};

export const setTheme = (newTheme) => {
  try{
    return localStorage.setItem('theme', newTheme)
  }
  catch(error){}
}

export const getLanguage = () => {
  try {
    const value = localStorage.getItem('languageState');
    if (!value) throw Error();

    return value;
  } catch (error) {
    return 'es';
  }
};

export const setLanguage = (newLanguage) => {
  try{
    return localStorage.setItem('languageState', newLanguage)
  }
  catch(error){}
}

export const getUser = () => {
  try {
    const value = localStorage.getItem('userData');
    if (!value) throw Error();

    return value;
  } catch (error) {
    return null;
  }
};

export const setUser = (newUser) => {
  try{
    return localStorage.setItem('userData', JSON.stringify(newUser))
  }
  catch(error){}
}

const storageService = {
  getLanguage,
  setLanguage,
  getTheme,
  setTheme,
  getUser,
  setUser
}

export default storageService;