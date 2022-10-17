import {useTranslation} from '../src/shared/hooks';
import { Footer } from '../src/modules';

export default function Home() {

  const { language, t, switchLanguage} = useTranslation();

  return (
    <>
    <div onClick={()=> {switchLanguage('en', false)}}>
      {t('global.language.es')}
    </div>
    </>
  )
}
