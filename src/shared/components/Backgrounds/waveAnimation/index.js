import Styles from './styles.module.css';

const Waves = () => {
  return (
    <div className={Styles.box}>
      <div className={`${Styles.wave} ${Styles._one}`}></div>
      <div className={`${Styles.wave} ${Styles._two}`}></div>
      <div className={`${Styles.wave} ${Styles._three}`}></div>
    </div>
  )
}

export default Waves;