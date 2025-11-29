import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <>
            <div className="header text-center" style={{ backgroundColor: '#0066A1', height: 'auto' }}>
                <div className="container" style={{ top: '0px', height: '56px', position: 'relative', visibility: 'visible' }}>
                    <nav>
                        <a href="https://www.ieee.org/" target="_blank" className="text-white font-serif text-lg">IEEE.org</a>
                        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <a href="http://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" className="text-white font-serif text-lg">IEEE Xplore Digital Library</a>
                        <span className="text-white">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                        <a href="http://standards.ieee.org/" target="_blank" className="text-white font-serif text-lg">IEEE Standards</a>
                        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <a href="https://spectrum.ieee.org/" target="_blank" className="text-white font-serif text-lg">IEEE Spectrum</a>
                        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <a href="https://ieeekerala.org/" target="_blank" className="text-white font-serif text-lg">IEEE Kerala Section</a>
                        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <a href="http://www.ieeer10.org/" target="_blank" className="text-white font-serif text-lg">IEEE Region 10</a>
                        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <a href="https://www.ieee.org/sitemap.html" target="_blank" className="text-white font-serif text-lg">More Sites</a>
                    </nav>
                </div>
            </div>

            <header role="banner">
                <div className="header-area">
                    <div className="main-header-area white-bg" id="sticky-header">
                        <div className="container">
                            <div className="row align-items-center justify-content-between no-gutters">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo-img">
                                        <Link href="/">
                                            <Image alt="logo" src="/img/logo.png" width={100} height={50} style={{ width: 'auto', height: 'auto' }} />
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-xl-10 col-lg-5">
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link className="active" href="/"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>home</span></Link></li>
                                                <li>
                                                    <a className="active"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>ABOUT </span></a>
                                                    <ul className="submenu">
                                                        <li><Link href="/about"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>SB</span></Link></li>
                                                        <li><Link href="/execom2024"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>EXECOM 2024</span></Link></li>
                                                        <li><Link href="/execom2023"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>EXECOM 2023</span></Link></li>
                                                        <li><Link href="/execom2022"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>EXECOM 2022</span></Link></li>
                                                        <li><Link href="/execom2021"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>EXECOM 2021</span></Link></li>
                                                        <li><Link href="/execom2020"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>EXECOM 2020</span></Link></li>
                                                        <li><Link href="/execom2019"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>EXECOM 2019</span></Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>SB CHAPTERS </span></a>
                                                    <ul className="submenu">
                                                        <li><Link href="/ias"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>IAS</span></Link></li>
                                                        <li><Link href="/cs"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>CS</span></Link></li>
                                                        <li><Link href="/pes"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>PES</span></Link></li>
                                                        <li><Link href="/ras"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>RAS</span></Link></li>
                                                        <li><Link href="/wie"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>WIE</span></Link></li>
                                                        <li><Link href="/sight"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>SIGHT</span></Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/project"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>events</span></Link></li>
                                                <li><Link href="/gallery"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>Gallery</span></Link></li>
                                                <li><Link href="/contact"><span style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>Contact</span></Link></li>
                                                <li>
                                                    <div className="get_in_tauch">
                                                        <a className="boxed-btn" href="https://bit.ly/IEEEMemb21" style={{ paddingTop: '10px', marginTop: '2px', paddingBottom: '10px', width: 'auto' }}>Join IEEE </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
