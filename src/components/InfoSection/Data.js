import ContactForm from './ContactForm';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Projects',
    headline: 'Recent Work',
    description: 'Our rich portfolio of previous work showcases our commitment to excellence, community empowerment, and sustainable practices. We have collaborated with a diverse range of clients, including local governments, private developers, and First Nations organizations, to deliver top-notch contracting solutions tailored to their unique needs. Our projects span various sectors, such as infrastructure, commercial development, and environmental stewardship, reflecting our versatile expertise and dedication to creating lasting, positive impacts.',
    buttonLabel: 'Get In Touch',
    imgStart: false,
    img: require('../../images/ironlinkedinthumb.png').default,
    alt: 'Rocket',
    dark: true,
    primary: true,
    darkText: false,
		form: ''
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Company',
    headline: 'Indigenous Iron Story',
    description: 'Cody is a Tsleil-Waututh First Nation Community member. He has extensive civil construction project experience, and the last few years have been productive in a senior development management role with KFN Enterprises. He owns and manages several businesses (including Indigenous Iron Construction) and specializes in Indigenous partnerships and maximizing opportunities and benefits for Indigenous businesses through large public sector projects.',
    buttonLabel: "We're Hiring! Click Here To Apply",
    imgStart: true,
    img: require('../../images/company-logo.png').default,
    alt: 'Planet',
    dark: false,
    primary: false,
    darkText: true,
		form: ''
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Contact Us',
  headline: 'Tell Us About Your Project',
  description: 'At Indigenous Iron, our mission is to provide exceptional contracting and sub-contracting services to our clients while upholding our commitment to the values of our First Nations communities. We are dedicated to building lasting partnerships with our clients based on trust, mutual respect, and a shared vision for success. Fill out our contact form and we will be happy to help you with your project goals!',
  buttonLabel: 'Back To Top',
  dark: false,
  primary: false,
  darkText: true,
	form: <ContactForm />
};
