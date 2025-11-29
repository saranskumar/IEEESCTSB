import TeamMember from "../components/TeamMember";
import PhotoCarousel from "../components/PhotoCarousel";

export default function PES() {
    const carouselImages = [
        "img/pes/1.jpg",
        "img/pes/2.jpg",
        "img/pes/3.jpg",
        "img/pes/4.jpg"
    ];

    return (
        <main>
            <div className="project_details" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div style={{ backgroundColor: '#F4F1F0', paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="container">
                        <h2>IEEE POWER & ENERGY SOCIETY <img src="img/sbc/small-pes.png" alt="PES Logo" /><br />SCT SBC</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6" style={{ height: '500px' }}>
                            <div className="project_details_left">
                                <div className="single_details" style={{ paddingTop: '50px' }}>
                                    <p>Established on April 27, 2019 under the founding chairman G Harikrishnan and the advisor in charge Prof. Deepa A K, our Student Branch Chapter has rapidly evolved into a vibrant community of passionate individuals dedicated to advancing the field of power and energy.</p>
                                    <p>&nbsp;The inauguration ceremony for the society coincided with a workshop on E-Mobility, held as part of the "Key Elements of Smart Cities" Workshop series organized by the IEEE Kerala Section. The workshop series featured lectures from esteemed experts from IEEE PES, NATPAC, EMC, NIIST, C-DAC and UBER.&nbsp;In 2022, we was honoured to receive the prestigious Gold Plaque Outstanding Student Branch Chapter Award from IEEE PES Kerala Chapter Awards as a result of the hard work and dedication of our members.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6" style={{ height: '350px', paddingTop: '50px' }}>
                            <div className="projects_details_info">
                                <div className="details_thumb">
                                    <PhotoCarousel images={carouselImages} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="team_area" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                            <div className="container">
                                <div className="row" style={{ height: '150px' }}>
                                    <div className="col-xl-12">
                                        <div className="section_title text-center mb-95">
                                            <span className="sub_heading">PES Team</span>
                                            <div className="hi">
                                                <div className="px-4">
                                                    <h3>EXECOM</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col align-self-center">
                                        <TeamMember name="Mrs.Deepa A K" role="PES Chapter Advisor" image="img/execom/pesc.png" />
                                    </div>
                                </div>

                                <div className="row">
                                    <TeamMember name="Pranav Baburajan" role="Chairman" image="img/execom/pranav.jpeg" imageStyle={{ width: '200px', height: '200px' }} />
                                    <TeamMember name="Tariq Nazeer" role="Vice Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" imageStyle={{ width: '200px', height: '200px' }} />
                                    <TeamMember name="Fisa Fathima Feroze" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" imageStyle={{ width: '200px', height: '200px' }} />
                                </div>

                                <div className="row">
                                    <TeamMember name="Agraja SS" role="Women In Power" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" imageStyle={{ width: '200px', height: '200px' }} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="container">
                        <div className="section-top-border">
                            <h3 className="mb-30">Recent Events</h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <h4 className="mb-20"><a href="exhibit.html">IEEE PES Green Plaque-2022</a></h4>
                                            <p><a href="exhibit.html"><img src="img/execom/green_plate.jpeg" style={{ height: '200px', width: '300px' }} alt="Green Plaque" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <h4 className="mb-20"><a href="peswebinar.html">WE Soar with Power</a></h4>
                                            <p><a href="peswebinar.html"><img src="img/execom/we_soar.jpeg" style={{ height: '200px', width: '300px' }} alt="WE Soar" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <h4 className="mb-20"><a href="env.html">Environment Day celebration</a></h4>
                                            <p><a href="env.html"><img src="img/execom/env.png" style={{ height: '200px', width: '300px' }} alt="Environment Day" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <h4 className="mb-20"><a href="fabrica.html">Fabrica</a></h4>
                                            <p><a href="fabrica.html"><img src="img/execom/fabrica.jpeg" style={{ height: '200px', width: '300px' }} alt="Fabrica" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <h4 className="mb-20"><a href="aura.html">Aura 3.0</a></h4>
                                            <p><a href="aura.html"><img src="img/execom/aura.jpeg" style={{ height: '200px', width: '300px' }} alt="Aura 3.0" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <h4 className="mb-20"><a href="powerpods.html">Powerpods</a></h4>
                                            <p><a href="powerpods.html"><img src="img/execom/powerpods.jpeg" style={{ height: '200px', width: '300px' }} alt="Powerpods" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <h4 className="mb-20"><a href="pesday.html">Pes day</a></h4>
                                            <p><a href="pesday.html"><img src="img/execom/pes_day.jpeg" style={{ height: '200px', width: '300px' }} alt="Pes day" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <h4 className="mb-20"><a href="nuclearpes.html">Rustify</a></h4>
                                            <p><a href="nuclearpes.html"><img src="img/execom/rustify.jpeg" style={{ height: '200px', width: '300px' }} alt="Rustify" /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
