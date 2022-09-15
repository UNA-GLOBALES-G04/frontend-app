import { useRecoilState } from 'recoil';
import { recoilStateDictionary } from '../recoil'

const useGlobalState = (state) => {
  return useRecoilState(recoilStateDictionary[state]);
};

export default useGlobalState;