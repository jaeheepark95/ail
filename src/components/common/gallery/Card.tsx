import Image from "next/image";
import styles from "./Card.module.scss"; // CSS 모듈을 사용한 스타일링

function Card({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={300}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
