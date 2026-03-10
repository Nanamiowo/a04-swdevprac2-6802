import styles from './banner.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img src="/banner.jpg" className={styles.bannerImage} />

      <div className={styles.overlay}>
        <h1>where every event finds its venue</h1>
        <p>Here is a place for gaming and a lot! COME COME!!!</p>
      </div>
    </div>
  )
}