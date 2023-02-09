import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

interface Links {
  id: number,
  value: string,
  title: string | JSX.Element,
}

export const navLinks: Links[] = [
  {id: 1, value: 'about', title: 'About'},
  {id: 2, value: 'skills', title: 'Skills'},
  {id: 3, value: 'services', title: 'Services'},
  {id: 4, value: 'portfolio', title: 'Portfolio'},
];

export const socialLinks: Links[] = [
  {id: 1, value: 'https://www.instagram.com/asda7o/?igshid=YmMyMTA2M2Y%3D', title: <BsInstagram className='DeveloperInfo__link'/>},
  {id: 2, value: 'https://www.linkedin.com/in/vadym-voiedilo-131283264/', title: <BsLinkedin  className='DeveloperInfo__link'/>},
  {id: 3, value: 'https://github.com/vadiimvooo', title: <BsGithub  className='DeveloperInfo__link'/>},
]