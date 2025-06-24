import Image from 'next/image';
import styles from './donationsSection.module.css';

const DonationFeed = ({ donations }) => {
    return (
        <div className={styles.feedSection}>
            <h2>Feed de solicitações de doações</h2>
            <div className={styles.feedGrid}>
                {donations.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <button className={styles.donateButton}>Saiba mais</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonationFeed;
