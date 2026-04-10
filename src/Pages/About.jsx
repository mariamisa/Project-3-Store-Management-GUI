import PageTitle from '../components/Header/Title';
import AccordionItem from '../components/AccordionItem';

import Image from '../../public/images/header6.jpg'
import faq from '../faq.json'
import styles from './styles.module.css';

export default function About() {
	return (
		<>
			<div className={styles.pageContainer}>
				<div className={styles.pageTitleContainer}>
					<PageTitle text="About Us" />
				</div>
				<div className={styles.section1}>
					<img src={Image} alt='clothes image' />
					<p>Welcome to our clothing store, where fashion meets comfort and individuality. We believe that what you wear should reflect who you are, which is why we carefully select pieces that combine style, quality, and everyday wearability.

						Our collections are designed to keep you feeling confident and comfortable, whether you're dressing for a casual day out, work, or a special occasion. We focus on timeless essentials and modern trends that fit effortlessly into your wardrobe.

						We are committed to offering high-quality clothing at fair prices, making fashion accessible without compromising on style.

						Thank you for choosing us to be part of your style journey 💛</p>
				</div >
			</div >
			<div className={styles.pageContainer}>
				<div className={styles.section2}>
					{faq?.faq?.map(({ question, answer }) => <AccordionItem title={question}>
						{answer}
					</AccordionItem>)}
				</div>
			</div>
		</>
	)
}
