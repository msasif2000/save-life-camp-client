import logo from '../../assets/logo.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content flex flex-wrap">
                <aside className='  mx-auto'>
                    <img src={logo} alt="" className='h-28 w-28 rounded-lg' />
                    <p className='text-xl'>SAVE LIFE MEDICAL CAMP <br /> <span className='italic text-sm'>Make Yourself Healthy</span></p>
                </aside>
                <nav className=' mx-auto'>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Health Awareness</a>
                    <a className="link link-hover">Health Program</a>
                    <a className="link link-hover">Physiology</a>
                    <a className="link link-hover">Child Care</a>
                </nav>
                <nav className=' mx-auto'>
                    <header className="footer-title">Save Life</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Blogs</a>
                </nav>
                <nav className=' mx-auto'>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                
            </footer>
            
        </div>
    );
};

export default Footer;