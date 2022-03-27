import img1 from '../../assets/images/projects/clothingShop.png';
import img2 from '../../assets/images/projects/chatApp.jpeg';
import img3 from '../../assets/images/projects/imageGallery.png';
import img4 from '../../assets/images/projects/covidTracker.png';

const data = [
	{
		avatar: img1,
		title: 'Clothing Shop',
		sourceUrl: 'https://github.com/abhishekpandya5/clothing-shop',
		hostUrl: 'https://the-clothing-shop.herokuapp.com/',
		description:
			'Shopping website created using React with cart functionality and Stripe payment service'
	},
	{
		avatar: img2,
		title: 'Chat Messenger',
		sourceUrl: 'https://github.com/abhishekpandya5/UniChat_React',
		hostUrl: 'https://unichatreact.netlify.app/',
		description:
			'Chat application created using React, Firebase and Chat Engine'
	},
	{
		avatar: img3,
		title: 'Image Search Gallery',
		sourceUrl: 'https://github.com/abhishekpandya5/Image-Search-Gallery',
		hostUrl: 'https://abhishekpandya5.github.io/Image-Search-Gallery/',
		description:
			'Image Search App created using React, Unsplash API and Semantic UI.'
	},
	{
		avatar: img4,
		title: 'Covid Tracker',
		sourceUrl: 'https://github.com/abhishekpandya5/COVID-19-Tracker',
		hostUrl: 'https://coronatracker-19.netlify.app/',
		description:
			'COVID-19 Tracker Web App created using React, Charts.js and Material UI.'
	}
];

export default data;
