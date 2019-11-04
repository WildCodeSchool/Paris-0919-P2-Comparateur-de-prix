import React,{ useState}  from 'react'

const Faq = () => {
	const [faqs, setfaqs] = useState([
	  {
		question: 'Est ce que les personnages ont le droit de prendre le numéro et les coordonnées des bêtes',
		answer: ' oui. À condition de détenir la permission du détenteur',
		open: true
	  },
	  {
		question: 'La prise de photo est autorisée ?',
		answer: 'Non, pour des raisons de sécurité et de confidentialité',
		open: false
	  },
	  {
		question: 'Est ce que les monstres peuvent manger les humains lors du meeting',
		answer: 'Vous pouvez les bouffer. Mais il n y aura plus de prochaines rencontres',
		open: false
	  },
	  {
		question: 'Quelle est la durée de la rencontre ?',
		answer: 'minimum 30 minutes et maximum 1 heure',
		open: true
	  },
	  {
		question: 'Est ce que vous organisez encore des prochaines rencontres ?',
		answer: 'Pour plus de renseignements, veuillez contacter le responsable des rencontres',
		open: false
	  },
	  {
		question:"Dans ce cas si on vous kidnappe, est ce que les gens vont paniquer ?",
		answer:"Essaie si tu l'oses, le dernier gars a fini 6 pieds sous terre pour un humain, et une reconversion par exorcisme pour un zombie",
		open: false
	  }
	]);
  
	const toggleFAQ = index => {
	  setfaqs(faqs.map((faq, i) => {
		if (i === index) {
		  faq.open = !faq.open
		} else {
		  faq.open = false;
		}
		return faq;
	  }))
	}
  
  
	return (
		<div className="faqs">
			<h1>
		question: 'Est ce que les personnages ont le droit de prendre le numéro et les coordonnées des bêtes'</h1>
		<p>answer: 'Oui. À condition de détenir la permission du détenteur'</p>
			<h2>question 'La prise de photo est autorisée ?'</h2>
		<p>answer: 'Non, pour des raisons de sécurité et de confidentialité'</p>
			<h3>question: 'Quelle est la durée de la rencontre ?'</h3>
		<p>answer: 'minimum 30 minutes et maximum 1 heure'</p>
		  {/* {faqs.map((faq, i) => (
			<Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
		  ))} */}
		</div>
	);
  }
  
  export default Faq

// function Faq ({faq, index, toggleFAQ}) {
// 	return (
// 		<div
// 			className={"faq " + (faq.open ? 'open' : '')}
// 			key={index}
// 			onClick={() => toggleFAQ(index)}
// 		>
// 			<div className="faq-question">
// 				{faq.question}
// 			</div>
// 			<div className="faq-answer">
// 				{faq.answer}
// 			</div>
// 		</div>
// 	)
// }
