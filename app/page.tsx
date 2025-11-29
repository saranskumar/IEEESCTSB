import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* slider_area_start */}
      <div className="slider_area">
        <div className="slider_active owl-carousel">
          <div className="single_slider overlay2 d-flex align-items-center justify-content-center slider_bg_1" style={{ backgroundImage: 'url(img/banner/002.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-10">
                  <div className="slider_text text-center">
                    <h3>IEEE SCT SB</h3>
                    <p>{/* add anything here */}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single_slider overlay2 d-flex align-items-center justify-content-center slider_bg_1" style={{ backgroundImage: 'url(img/banner/003.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text text-left">
                    <h3>ADVANCING TECHNOLOGY<br />FOR HUMANITY</h3>
                    <p>{/* add anything here */}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single_slider overlay2 d-flex align-items-center justify-content-center slider_bg_1" style={{ backgroundImage: 'url(img/banner/001.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-10">
                  <div className="slider_text text-center">
                    <h3>{/*We Design your space*/}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider_area_end */}

      {/* about_area_start */}
      <section className="ftco-section ftco-no-pt ftco-no-pb tag" data-aos="fade-up" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="tag">
          <div className="container">
            <div className="about_area" style={{ paddingTop: '20px', borderTopWidth: '10px', paddingBottom: '40px', backgroundColor: '#f7f7f7' }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-md-6">
                    <div className="about_thumb">
                      <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end">
                        <img src="img/gif.gif" alt="About GIF" />
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-5 offset-xl-1 col-md-6">
                    <div className="about_info">
                      <div className="section_title">
                        <span className="sub_heading">About Us</span>
                        <h3>IEEE<br />SCT SB</h3>
                      </div>
                      <p></p>
                      <h5>IEEE started off in Sree Chitra Thirunal College Of Engineering with the registration of members on 23rd October 2009 with 30 members in its first phase. The Student Branch is one of the top 10 SBs in the Travancore Hub. Sree Chitra Thirunal College Of Engineering is one of the leading engineering colleges in Thiruvananthapuram, Kerala.</h5>
                      <p></p>
                      <ul className="about_list">
                        <li>Founded :2009</li>
                        <li>Current Strenght: 117 Members</li>
                      </ul>
                      <a className="boxed-btn" href="https://bit.ly/IEEEMemb21">Join IEEE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex no-gutters">
              <div className="col-md-6 d-flex">
                <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end">
                  <img src="img/ieee.jpg" style={{ height: 'auto', maxWidth: '100%' }} alt="IEEE" />
                </div>
              </div>

              <div className="col-md-6 pl-md-5">
                <div className="row justify-content-start py-5">
                  <div className="col-md-12 heading-section ftco-animate pl-md-4 py-md-4">
                    <h2 className="mb-4">About IEEE</h2>
                    <p><strong>IEEE is the world&rsquo;s largest technical professional organization dedicated to advancing technology for the benefit of humanity.IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 419,000 members in over 160 countries, and its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted &ldquo;voice&rdquo; for engineering, computing, and technology information around the globe.</strong></p>

                    <div className="tabulation-2 mt-4">
                      <ul className="nav nav-pills nav-fill d-md-flex d-block">
                        <li className="nav-item mb-md-0 mb-2"><a className="nav-link active py-2" data-toggle="tab" href="#home1">Mission</a></li>
                        <li className="nav-item px-lg-2 mb-md-0 mb-2"><a className="nav-link py-2" data-toggle="tab" href="#home2">Vision</a></li>
                      </ul>

                      <div className="tab-content bg-light rounded mt-2">
                        <div className="tab-pane container p-0 active" id="home1">
                          <p>IEEE&#39;s core purpose is to foster technological innovation and excellence for the benefit of humanity.</p>
                        </div>
                        <div className="tab-pane container p-0 fade" id="home2">
                          <p>IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about_area_end */}

      <section className="tag">
        <div>
          <div className="counting-sec">
            <div className="inner-width">
              <div className="col1">
                <div className="num">232</div>
                IEEE Members
              </div>
              <div className="col1">
                <div className="num">224</div>
                Student Members
              </div>
              <div className="col1">
                <div className="num">7</div>
                Professional Members
              </div>
              <div className="col1">
                <div className="num">1</div>
                Graduate Student Member
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* dream_service_start */}
      <section className="tag">
        <div className="dream_service tag" style={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#f7f7f7' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section_title text-center mb-95">
                  <span className="sub_heading">Our Team</span>
                  <div className="hi">
                    <div className="px-4">
                      <h3>Meet Our SB</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4 col-md-5 tag">
                <div className="single_dream text-center">
                  <div className="thumb">
                    <img alt="" src="img/execom/pesc.png" style={{ width: '200px', height: '200px' }} />
                  </div>
                  <h3>Deepa&nbsp; A K</h3>
                  <h5>Counsellor</h5>
                  <p></p>
                </div>
              </div>

              <div className="col-xl-4 col-md-5 tag">
                <div className="single_dream text-center">
                  <div className="vl">
                    <div className="thumb">
                      <a href="img/execom/nandagopan.jpg">
                        <img alt="" src="img/execom/nandagopan.jpg" style={{ height: '150px', width: '150px', borderRadius: '75px' }} />
                      </a>
                    </div>
                    <h3>Nandagopan G</h3>
                    <h5>Chairperson</h5>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-5 tag">
                <div className="single_dream text-center">
                  <div className="thumb">
                    <img alt="" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" style={{ width: '150px', height: '150px', borderRadius: '75px' }} />
                  </div>
                  <h3>Geethu S Santhosh</h3>
                  <h5>Vice Chairperson</h5>
                </div>
              </div>

              <div className="col-xl-4 col-md-5 tag">
                <div className="single_dream text-center">
                  <div className="thumb">
                    <img alt="lr" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" style={{ width: '160px', height: '150px', borderRadius: '75px' }} />
                  </div>
                  <h3>Durgadas D K</h3>
                  <h5>Link Rep</h5>
                </div>
              </div>

              <div className="center">
                <div className="single_dream text-center tag">
                  <div className="thumb">
                    <img alt="" src="/img/execom/alfy.jpg" style={{ width: '150px', height: '150px', borderRadius: '75px' }} />
                  </div>
                  <h3>Alfy Joseph Kunjumon</h3>
                  <h5>Secretary</h5>
                </div>
              </div>

              <div className="centerbutton tag">
                <div className="button_cont text-center">
                  <Link className="example_b" href="/execom2023" rel="nofollow noopener" target="_blank">full panel</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SB CHAPTERS */}
      <section className="container" style={{ paddingTop: '20px' }}>
        <div className="tag">
          <div className="section-top-border">
            <div className="section_title text-center mb-20">
              <span className="sub_heading">SB Chapetrs</span>
              <div className="hi">
                <div className="px-4">
                  <h3>Our Families</h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 text-center os-init aos-init aos-animate tag">
                <div className="single-defination">
                  <h4 className="mb-20"></h4>
                  <p><img src="img/sbc/pes.png" alt="PES" /></p>
                </div>
              </div>

              <div className="col-md-4 text-center os-init aos-init aos-animate tag">
                <div className="single-defination">
                  <p><img src="img/sbc/cs.png" alt="CS" /></p>
                </div>
              </div>

              <div className="col-md-4 text-center os-init aos-init aos-animate tag">
                <div className="single-defination">
                  <h4 className="mb-20"></h4>
                  <p><img src="img/sbc/ras.png" alt="RAS" /></p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 text-center os-init aos-init aos-animate tag">
                <div className="single-defination">
                  <h4 className="mb-20"></h4>
                  <p><img src="img/sbc/ias.png" alt="IAS" /></p>
                </div>
              </div>

              <div className="col-md-4 text-center os-init aos-init aos-animate tag">
                <div className="single-defination">
                  <h4 className="mb-20"></h4>
                  <p><img src="img/sbc/wie.png" alt="WIE" /></p>
                </div>
              </div>

              <div className="col-md-4 text-center os-init aos-init aos-animate tag">
                <div className="single-defination">
                  <h4 className="mb-20"></h4>
                  <p><img src="img/sbc/sight.png" alt="SIGHT" /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testmonial_area_start */}
      <section className="tag">
        <div className="testmonial_area testimonial_bg overlay2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="testmonial_active owl-carousel">
                  <div className="single_testmonial">
                    <div className="testmonial_info text-center">
                      <div className="author">
                        <img alt="" src="img/testmonial/author.png" />
                      </div>
                      <p></p>
                      <div className="author_name">
                        <h4>Shanthi Teacher</h4>
                        <span>Founding Advisor, IEEE SCT SB</span>
                      </div>
                    </div>
                  </div>

                  <div className="single_testmonial">
                    <div className="testmonial_info text-center">
                      <div className="author">
                        <img alt="" src="img/testmonials/vk.png" />
                      </div>
                      &nbsp;
                      <h4>The IEEE SCT is a vibrant group of students focused around connecting young minds with technological enablers and their social networks . I have had the opportunity to being a part of its wonderful journey in 2011 as the chair and still feel it&#39;s momentum today. Its energy and vision shines through its strong collaboration and leadership.<br />
                        &quot;Talent wins games, but teamwork and intelligence win championships.&quot; -- Michael Jordan.</h4>
                      <div className="author_name">
                        <h4>-Vinu Kamalasanan</h4>
                        <span>Former Chair, IEEE SCT SB</span>
                      </div>
                    </div>
                  </div>

                  <div className="single_testmonial">
                    <div className="testmonial_info text-center">
                      <div className="author">
                        <img alt="" src="img/testmonials/alma.png" />
                      </div>
                      <h4>IEEE SCT SB provided me with a platform to augment my professional and technical acuity. It not only helped me inculcate a profound interest in cutting-edge technologies but also surrounded me with countless networking opportunities.<br />
                        IEEE SCT SB moves forward with the vision to serve as a bridge between students and technology. The SBC (George sir- 2015, 2016, 2017 &amp; Asha teacher 2018, 2019) and the society advisors always acted as the backbone and played a pivotal role in steering us towards a common goal.<br />
                        From being a volunteer to an organizer and finally bringing out the leader in me, IEEE SCT SB has influenced me as nothing ever has!</h4>
                      <div className="author_name">
                        <h4>Alma Anvar</h4>
                        <span>Former Chair, IEEE SCT SB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
