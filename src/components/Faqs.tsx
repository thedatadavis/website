import React from 'react';
import Accordion from './Accordion';

const faqs = [
	{
		heading: 'When will I be billed?',
		content: 'Our Production plan charges based on usage. You will receive your involve at the end of each month.',
	},
	{
		heading:
			'Is the Hobby Tier free forever? What sort of workloads can I run on it?',
		content:
			'The Hobby Tier is free forever. The purpose of the Hobby Tier is to prototype a side-project and to try out different stacks and extensions on Tembo Cloud. We recommend using it for hobby projects but not for production workloads.',
	},
	{
		heading: 'Are annual plans available?',
		content:
			'Yes, we do provide annual plans which offer a significant discount over the list price. Please reach out to brad@tembo.io to learn more.',
	},
	{
		heading: 'Do you have plans specifically for early-stage startups?',
		content:
			'Yes! please visit our Tembo for Startups site (https://tembo.io/for-startups/) and follow instructions. We offer up to 50% off for the first year, and ongoing discounts for startups who are part of a Partner Organization in our Partner network.',
	},
	{
		heading: 'Can Tembo be hosted on my own infrastructure?',
		content:
			'Yes, you can self-host our Kubernetes Operator present at https://github.com/tembo-io/tembo/tree/main/tembo-operator or get in touch with brad@tembo.io to explore our private data plane offering.',
	},
];

const Faqs: React.FC = () => {
	return (
		<div className='z-50'>
			<h2 className='font-bold text-pricingGreen text-[32px] leading-[40px] tracking-[0.54px] [text-shadow:0px_0px_81px_#000] z-50'>
				Frequently Asked Questions
			</h2>
			<Accordion items={faqs} />
		</div>
	);
};

export default Faqs;
