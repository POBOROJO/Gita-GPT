import React from "react";

const Enlighten = ({ setValue, chatHistory }) => {
	const englightenOption = [
	"Kanha, how can I overcome fear and self-doubt?",
	"What is the secret to true happiness?",
	"Kanha, how can I stay strong in tough times?",
	"How can one achieve balance in life?",
	"Kanha, what is the purpose of human relationships?",
	"How do I let go of anger and resentment?",
	"Kanha, what does it mean to live in the moment?",
	"How can I cultivate gratitude in daily life?",
	"Kanha, what is the essence of true love?",
	"What is the best way to deal with failure?",
	"Kanha, how can I control my desires and attachments?",
	"What is the true meaning of forgiveness?",
	"Kanha, how can I overcome jealousy and envy?",
	"What role does faith play in life?",
	"Kanha, how can I align myself with my true purpose?",
	"What is the relationship between karma and free will?",
	"Kanha, how can I stay humble yet confident?",
	"How can one develop self-discipline?",
	"Kanha, what is the best way to serve others?",
	"How can I find joy in the simplest of things?",
	"Kanha, how can I stay true to myself in a challenging world?",
	"What is the significance of faith during hardships?",
	"Kanha, how can I accept change gracefully?",
	"What does it mean to live a life of virtue?",
	"Kanha, how can I achieve inner freedom?",
	"What is the connection between spirituality and happiness?",
	"Kanha, how can I learn to love myself more?",
	"What is the importance of silence and reflection?",
	"Kanha, how can I create harmony in my relationships?",
	"How can I keep my mind calm amidst chaos?",
	"Kanha, what does it mean to truly surrender to a higher power?",
	];

	const englighten = () => {
		const randomValue = Math.floor(Math.random() * englightenOption.length);
		setValue(englightenOption[randomValue]);
	};

	return (
		<div className="enlighten">
			<p>Hey Parth, what bothers you ?</p>
			<button onClick={englighten} disabled={!chatHistory}>
				Enlighten Me !
			</button>
		</div>
	);
};

export default Enlighten;
