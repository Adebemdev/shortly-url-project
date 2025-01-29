import TwitterIcon from '../assets/icons/icon-twitter.svg';
import FacebookIcon from '../assets/icons/icon-facebook.svg';
import PinterestIcon from '../assets/icons/icon-pinterest.svg';
import InstagramIcon from '../assets/icons/icon-instagram.svg';

const footerFeaturesLinks = [
  { href: '/linking-shortening', label: 'Linking Shortening', id: 1 },
  { href: '/branded Links', label: 'Branded Links', id: 2 },
  { href: '/analytics', label: 'Analytics', id: 3 },
];
const footerResourceLinks = [
  { href: '/blog', label: 'Blog', id: 1 },
  { href: '/developers', label: 'Developers', id: 2 },
  { href: '/support', label: 'Support', id: 3 },
];
const footerCompanyLinks = [
  { href: '/about', label: 'About', id: 1 },
  { href: '/our-teams', label: 'Our Teams', id: 2 },
  { href: '/careers', label: 'Careers', id: 3 },
  { href: '/contacts', label: 'Contacts', id: 4 },
];

const Footer = () => {
  return (
    <div className="bg-very-dark-blue px-20 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 py-10 md:flex-row md:items-start">
        <div className="flex items-center md:w-1/4">
          <h1 className="text-3xl font-bold text-White">Shortly</h1>
        </div>
        <div className="flex w-full flex-1 flex-col gap-10 text-center md:flex-row md:text-left">
          <div className="flex flex-col px-6">
            <h3 className="mb-4 text-xl font-bold text-White">Features</h3>
            <div className="flex flex-col items-center justify-center md:items-start">
              {footerFeaturesLinks.map((footerFeaturesLink) => (
                <a
                  key={footerFeaturesLink.id}
                  href={footerFeaturesLink.href}
                  className="hover:text-gray--002 mb-2 inline-flex items-center font-sans text-xl font-medium text-graynish-violet"
                >
                  {footerFeaturesLink.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col px-6">
            <h3 className="mb-4 text-xl font-bold text-White">Resources</h3>
            <div className="flex flex-col items-center justify-center md:items-start">
              {footerResourceLinks.map((footerResourcesLink) => (
                <a
                  key={footerResourcesLink.id}
                  href={footerResourcesLink.href}
                  className="hover:text-gray--002 mb-2 inline-flex items-center font-sans text-xl font-medium text-graynish-violet"
                >
                  {footerResourcesLink.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col px-6">
            <h3 className="text-xl font-bold text-White">Company</h3>
            <div className="flex flex-col items-center justify-center py-2 md:items-start">
              {footerCompanyLinks.map((footerCompanyLink) => (
                <a
                  key={footerCompanyLink.id}
                  href={footerCompanyLink.href}
                  className="hover:text-gray--002 inline-flex items-center px-1 pt-2 font-sans text-xl font-medium text-graynish-violet"
                >
                  {footerCompanyLink.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-1 items-start justify-center gap-10">
            <img src={FacebookIcon} alt="" />
            <img src={TwitterIcon} alt="" />
            <img src={PinterestIcon} alt="" />
            <img src={InstagramIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
