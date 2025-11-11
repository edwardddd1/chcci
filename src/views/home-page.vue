<!-- <template>
    <div class="container position-relative">
        <div class="row">
            <div class="col-lg-12">
                <div class="row mar-top justify-content-center align-items-center banner-container">
                    <div class="col-lg-7 banner-item order-lg-first order-last mt-lg-0 mt-5">
                        <span class="rectangle">
                            <svg width="85" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="84.9997" height="85" rx="8"
                                    transform="matrix(0.883521 -0.468393 0.468328 0.883555 -2.49609 37.5596)"
                                    fill="#3b5e08" />
                            </svg>
                        </span>
                        <div class="banner-text">
                            <h2 class="mb-5 banner-text" id="hero-title">
                                YOUR FIRST STEP IN REACHING YOUR MARITIME DREAM
                            </h2>
                        </div>
                        <span class="ellipse">
                            <svg width="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse rx="38.7296" ry="38.7296"
                                    transform="matrix(0.938441 0.345441 -0.345486 0.938424 39.7266 39.7235)"
                                    fill="#FDDA5F" />
                            </svg>
                        </span>
                        <span class="ellipse1">
                            <svg width="35" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse rx="38.7296" ry="38.7296"
                                    transform="matrix(0.938441 0.345441 -0.345486 0.938424 39.7266 39.7235)"
                                    fill="#FDDA5F" />
                            </svg>
                        </span>
                        <div class="d-flex hero-serch flex-wrap" id="hero-row">
                            <router-link :to="{ name: 'app-layout.admission' }" class="btn btn-primary" id="Admission"
                                data-title="Admission" @click="changename('Admission')"> Inquire Now
                                <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></circle>
                                    <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-5 banner-img">
                        <div class="img text-end" id="hero-img">
                            <img src="@/assets/resources/banner/BANNER2.png" class="img-fluid bg-img" alt="banner">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="editors position-relative">
        <div class="container" data-iq-gsap="onStart" data-iq-position-y="70" data-iq-rotate="0" data-iq-trigger="scroll"
            data-iq-ease="power.out" data-iq-opacity="0">
            <div class="row">
                <section class="editors mar-top mar-bot">
                    <div class="header-title d-flex justify-content-between">
                        <h4 class="title-bt fw-bolder">COURSES OFFERED</h4>
                    </div>
                    <span class="ellipse3">
                        <svg width="45" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse rx="38.7296" ry="38.7296"
                                transform="matrix(0.938441 0.345441 -0.345486 0.938424 39.7266 39.7235)" fill="#FDDA5F" />
                        </svg>
                    </span>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 list-inline">
                        <div class="col">
                            <div class="card bg-white iq-service-card">
                                <router-link :to="{ name: 'app-layout.admission', query: { course: '2' } }" id="Admission"
                                    data-title="Admission" @click="changename('Admission')">
                                    <div class="iq-image position-relative">
                                        <div class="img">
                                            <img src="@/assets/resources/banner/BSMT.png" alt="image"
                                                class="img-fluid height1 radius-our w-100">
                                        </div>
                                        <div class="app badge-1 btn btn-sm btn-primary">COLLEGE</div>
                                        <div class="app badge-3 ms-3 btn btn-sm text-white btn-info">BSMT</div>
                                    </div>
                                    <div class="card-body pb-3">
                                        <div class="border-bottom mt-3">
                                            <h5 class=" mb-3 fw-bolder">BS in Marine Transportation</h5>
                                        </div>
                                        <div class="d-flex justify-content-between flex-wrap mt-3">
                                            <div>
                                                <span class="text-dark ms-2">BS Marine Transportation - is a
                                                    maritime education program that covers the mandatory education
                                                    and training for a Navigational Watch required under Regulation
                                                    II/I of the STCW Convention, 1978, as amended.

                                                    The BSMT program shall cover the study of navigation, cargo
                                                    handling, and storage, and controlling the safe operation of the
                                                    ship, and care for persons on board the ship at the operational
                                                    level.</span>
                                            </div>

                                        </div>
                                    </div>
                                </router-link>

                            </div>
                        </div>


                        <div class="col">
                            <div class="card bg-white iq-service-card">
                                <router-link :to="{ name: 'app-layout.admission', query: { course: '1' } }" id="Admission"
                                    data-title="Admission" @click="changename('Admission')">
                                    <div class="iq-image position-relative">
                                        <div class="img">
                                            <img src="@/assets/resources/banner/BSMARE.png" alt="image"
                                                class="img-fluid height1 radius-our w-100">
                                        </div>
                                        <div class="app badge-2 btn btn-sm btn-primary">$2000</div>
                                        <div class="app badge-1 btn btn-sm btn-primary">COLLEGE</div>
                                        <div class="app badge-3 ms-3 btn btn-sm text-white btn-info">BSMARE</div>

                                    </div>
                                    <div class="card-body pb-3">
                                        <div class="border-bottom mt-3">
                                            <h5 class="mb-3 fw-bolder">BS in Marine ENGINEERING</h5>
                                        </div>
                                        <div class="d-flex justify-content-between flex-wrap mt-3">
                                            <div>

                                                <span class="text-dark ms-2">BS Marine Engineering - is a maritime
                                                    education program that covers the mandatory education and
                                                    training for Officers in Charge of an Engineering Watch required
                                                    under Regulation III/I of the STCW Convention, 1978, as amended

                                                    The BSMarE program shall cover the study of marine engineering
                                                    including but not limited to the propulsion system and its
                                                    auxiliaries, electrical, electronic, and control engineering,
                                                    maintenance, and repair, controlling the operation of the ship,
                                                    and care for persons on board the ship at the operational
                                                    level.he study of navigation, cargo handling, and storage, and
                                                    controlling the safe operation of the ship, and care for persons
                                                    on board the ship at the operational level.</span>
                                            </div>

                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>


                        <div class="col">
                            <div class="card bg-white iq-service-card">
                                <router-link :to="{ name: 'app-layout.admission', query: { course: '3' } }" id="Admission"
                                    data-title="Admission" @click="changename('Admission')">
                                    <div class="iq-image position-relative">
                                        <div class="img">
                                            <img src="@/assets/resources/banner/SHS.png" alt="image"
                                                class="img-fluid height1 radius-our w-100">
                                        </div>
                                        <div class="app badge-2 btn btn-sm btn-primary">$2000</div>
                                        <div class="app badge-1 btn btn-sm btn-primary">SENIOR HIGHSCHOOL</div>

                                    </div>
                                    <div class="card-body pb-3">
                                        <div class="border-bottom mt-3">
                                            <h5 class=" mb-3">Pre-Baccalaureate Maritime</h5>
                                        </div>
                                        <div class="d-flex justify-content-between flex-wrap mt-3">
                                            <div>

                                                <span class="text-dark ms-2">Senior High School - covers the
                                                    mandatory education for the last two years of the K to 12
                                                    Program and includes Grade 11 and 12 required by the Department
                                                    of Education and Marina.


                                                    The BMA SHS program offers a unique track of Pre-Baccalaureate
                                                    Maritime (PBM) aims to equip students with knowledge and skills
                                                    that will help them prepare better for their chosen field in
                                                    maritime education and training.</span>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template> -->
<style>
.removepadding {
    margin: 0%;
    padding: 0%;
}

* {
    margin: 0%;
    padding: 0%;
}

.custom-bullets {
    padding-left: 20px;
    text-align: left;
    color: black;
}

.custom-bullets li {
    position: relative;
    margin-bottom: 10px;
}

.custom-bullets li:before {
    content: "\2022";
    position: absolute;
    left: -20px;
}
</style>
<template>
    <div class="position-relative">
        <img src="@/assets/banner.jpg" class="img-fluid" alt="#" width="100%">
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-soft-primary"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h1 class="mb-1 fw-bold text-white display-5">
                "30 YEARS OF EXCELLENCE: HONORING THE PAST, INSPIRING THE FUTURE"
            </h1>
            <p class="text-lg mt-2 text-white">Reach your dream right now.</p>
            <a href="/#/admission"
                class="text-white bg-primary p-2 w-35 border border-primary rounded-start rounded-end">Inquire Now! <svg
                    width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"></circle>
                    <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></a>
        </div>
    </div>
    <div class="container">
        <div class="editors position-relative">
            <div class="container" data-iq-gsap="onStart" data-iq-position-y="70" data-iq-rotate="0"
                data-iq-trigger="scroll" data-iq-ease="power.out" data-iq-opacity="0">
                <div class="row">
                    <section class="editors  mar-bot">
                        <div class="card text-center mt-5 ">
                            <h4 class="fw-bolder fs-1 text-blue mb-2 mt-1">WELCOME TO THE CONCEPCION HOLY CROSS COLLEGE
                            </h4>
                            <h6 class="fw-bolder text-black mb-2">WHERE YOUR DREAMS BECOME A REALITY OF SUCCESS</h6>
                            <p class="m-3 text-black">At Concepcion Holy Cross College, we are dedicated to shaping future leaders who are guided by knowledge, faith, and service. More than just a school, we are a community that inspires excellence, nurtures compassion, and transforms lives. Our CHED recognized programs in business, education, health sciences, information technology, and the arts are designed to prepare students for success in a rapidly changing world. With strong values formation and scholarship opportunities for deserving students, we empower every Crossian to reach their full potential. Holy Cross College — Educating Minds, Nurturing Hearts, Transforming Lives.
                            </p>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="card mt-3">
                                        <h4 class="fw-bolder fs-1 text-center text-black">MISSION</h4>
                                        <p class="m-3 text-black justify-content-between">Concepcion Holy Cross College is an institution for academic and values formation offering relevant, learner-centered, and values-oriented programs that produce competent persons of character in the service of God and society.</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card mt-3">
                                        <h4 class="fw-bolder fs-1 text-center text-black">VISION</h4>
                                        <p class="m-3 text-black justify-content-between"> To become a God-centered learning institution focused on holistic education that forms and educates individuals to become conscientious, compassionate, competent, and committed persons towards the development of a just and humane society.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row text-center">
                            <div class="card">
                                <h2 class="mt-3 title-bt fw-bolder fs-1">CORE VALUES</h2>
                                <div class="row">
                                    <div class="col-sm">
                                        <h3 class="text-info fw-bolder">COMPETENCE</h3><br>
                                        <p class="text-black">
                                            This core value emphasizes acquiring and demonstrating the necessary skills, knowledge, and expertise in various fields of study. Individuals associated with the institution should strive for excellence and proficiency both academically and professionally.
                                        </p>
                                    </div>
                                    <div class="col-sm">
                                        <h3 class="text-danger fw-bolder">HOLISTIC EDUCATION</h3><br>
                                        <p class="text-black">
                                            Holistic education focuses on overall development—addressing intellectual, social, emotional, physical, and spiritual aspects. It nurtures students for a balanced future, beyond academics.
                                        </p>
                                    </div>
                                    <div class="col-sm">
                                        <h3 class="text-success fw-bolder">COMPASSION</h3><br>
                                        <p class="text-black">
                                            Compassion promotes empathy, kindness, and understanding towards others, fostering a caring and supportive college community where students, faculty, and staff feel valued and respected.
                                        </p>
                                    </div>
                                    <div class="col-sm">
                                        <h3 class="text-warning fw-bolder">COMMITMENT</h3><br>
                                        <p class="text-black">
                                            Commitment is dedication to a cause or goal. Individuals are encouraged to remain committed to academic pursuits, personal growth, and meaningful contributions to the community.
                                        </p>
                                    </div>
                                </div>
                                <p>These core values collectively shape the educational experience at Concepcion Holy Cross College, guiding both students and staff towards excellence and holistic growth.</p>
                            </div>
                            <hr>
                            <div class="header-title d-flex justify-content-between">
                                <h4 class="fw-bolder fs-1 ">OUR PROGRAMS</h4>
                            </div>
                            <div class="text-start text-black">
                                <p>Explore our diverse range of undergraduate programs designed to prepare you for a successful career:</p>
                            </div>
                            <div class="row list-inline">
                              <!-- First Row - 3 Cards -->
                              <div class="col-lg-4 col-md-6 mb-4">
                                  <div class="card bg-white iq-service-card h-100">
                                      <div class="iq-image position-relative">
                                          <div class="img">
                                              <img src="@/assets/resources/banner/comscilogo.png" alt="image"
                                                  class="img-fluid height1 radius-our w-100">
                                          </div>
                                          <div class="app badge-1 btn btn-sm btn-primary">COLLEGE</div>
                                          <div class="app badge-3 ms-3 btn btn-sm text-white btn-info">CS</div>
                                      </div>
                                      <div class="card-body pb-3">
                                          <div class="border-bottom mt-3">
                                              <h5 class="mb-3 fw-bolder">School Of Computer Studies</h5>
                                          </div>
                                          <div class="d-flex justify-content-between flex-wrap mt-3">
                                              <div>
                                                  <span class="text-dark ms-2">School of Computer Studies - offers comprehensive programs in information technology, computer science, and related fields preparing students for the digital age.
                                                  </span>
                                                  <a href="https://www.facebook.com/share/1Ch1dpknZS/" class="text-primary-emphasis">Read More.</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-lg-4 col-md-6 mb-4">
                                  <div class="card bg-white iq-service-card h-100">
                                      <div class="iq-image position-relative">
                                          <div class="img">
                                              <img src="@/assets/resources/banner/bsbalogo.png" alt="image"
                                                  class="img-fluid height1 radius-our w-100">
                                          </div>
                                          <div class="app badge-1 btn btn-sm btn-primary">COLLEGE</div>
                                          <div class="app badge-3 ms-3 btn btn-sm text-white btn-info">BA</div>
                                      </div>
                                      <div class="card-body pb-3">
                                          <div class="border-bottom mt-3">
                                              <h5 class="mb-3 fw-bolder">School Of Business Administration & Accountancy</h5>
                                          </div>
                                          <div class="d-flex justify-content-between flex-wrap mt-3">
                                              <div>
                                                  <span class="text-dark ms-2">School of Business Administration & Accountancy - develops future business leaders and accounting professionals with strong ethical foundations and practical business acumen.
                                                  </span>
                                                <br>
                                                  <a href="https://www.facebook.com/share/1LwDtET9cU/" class="text-primary-emphasis">Read More.</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-lg-4 col-md-6 mb-4">
                                  <div class="card bg-white iq-service-card h-100">
                                      <div class="iq-image position-relative">
                                          <div class="img">
                                              <img src="@/assets/resources/banner/hmlogo.png" alt="image"
                                                  class="img-fluid height1 radius-our w-100">
                                          </div>
                                          <div class="app badge-1 btn btn-sm btn-primary">COLLEGE</div>
                                          <div class="app badge-3 ms-3 btn btn-sm text-white btn-info">HM</div>
                                      </div>
                                      <div class="card-body pb-3">
                                          <div class="border-bottom mt-3">
                                              <h5 class="mb-3 fw-bolder">School Of Hospitality Management</h5>
                                          </div>
                                          <div class="d-flex justify-content-between flex-wrap mt-3">
                                              <div>
                                                  <span class="text-dark ms-2">School of Hospitality Management - provides world-class training in hotel and restaurant management, tourism, and culinary arts for the global hospitality industry.
                                                  </span><br>
                                                  <a href="https://www.facebook.com/share/16PcT5DPwR/" class="text-primary-emphasis">Read More.</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <!-- Second Row - 3 Cards -->
                              <div class="col-lg-4 col-md-6 mb-4">
                                  <div class="card bg-white iq-service-card h-100">
                                      <div class="iq-image position-relative">
                                          <div class="img">
                                              <img src="@/assets/resources/banner/educlogo.png" alt="image"
                                                  class="img-fluid height1 radius-our w-100">
                                          </div>
                                          <div class="app badge-1 btn btn-sm btn-primary">COLLEGE</div>
                                          <div class="app badge-3 ms-3 btn btn-sm text-white btn-info">TE</div>
                                      </div>
                                      <div class="card-body pb-3">
                                          <div class="border-bottom mt-3">
                                              <h5 class="mb-3 fw-bolder">School Of Teacher Education</h5>
                                          </div>
                                          <div class="d-flex justify-content-between flex-wrap mt-3">
                                              <div>
                                                  <span class="text-dark ms-2">School of Teacher Education - shapes passionate and competent educators committed to excellence in teaching and lifelong learning for future generations.
                                                  </span>
                                                  <br>
                                                  <a href="https://www.facebook.com/share/17aww9LZcm/" class="text-primary-emphasis">Read More.</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-lg-4 col-md-6 mb-4">
                                  <div class="card bg-white iq-service-card h-100">
                                      <div class="iq-image position-relative">
                                          <div class="img">
                                              <img src="@/assets/resources/banner/crimlogo.png" alt="image"
                                                  class="img-fluid height1 radius-our w-100">
                                          </div>
                                          <div class="app badge-1 btn btn-sm btn-primary">COLLEGE</div>
                                          <div class="app badge-3 ms-3 btn btn-sm text-white btn-info">CJE</div>
                                      </div>
                                      <div class="card-body pb-3">
                                          <div class="border-bottom mt-3">
                                              <h5 class="mb-3 fw-bolder">School Of Criminal Justice Education</h5>
                                          </div>
                                          <div class="d-flex justify-content-between flex-wrap mt-3">
                                              <div>
                                                  <span class="text-dark ms-2">School of Criminal Justice Education - trains law enforcement professionals and criminologists dedicated to upholding justice, public safety, and the rule of law.
                                                  </span>
                                                  <br>
                                                  <a href="https://www.facebook.com/share/1AEJaBJvP5/" class="text-primary-emphasis">Read More.</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-lg-4 col-md-6 mb-4">
                                  <div class="card bg-white iq-service-card h-100">
                                      <div class="iq-image position-relative">
                                          <div class="img">
                                              <img src="@/assets/resources/banner/nursinglogo.png" alt="image"
                                                  class="img-fluid height1 radius-our w-100">
                                          </div>
                                          <div class="app badge-1 btn btn-sm btn-primary">COLLEGE</div>
                                          <div class="app badge-3 ms-3 btn btn-sm text-white btn-info">NURSING</div>
                                      </div>
                                      <div class="card-body pb-3">
                                          <div class="border-bottom mt-3">
                                              <h5 class="mb-3 fw-bolder">School Of Nursing</h5>
                                          </div>
                                          <div class="d-flex justify-content-between flex-wrap mt-3">
                                              <div>
                                                  <span class="text-dark ms-2">School of Nursing - cultivates compassionate and skilled nursing professionals equipped with clinical expertise and patient-centered care values.
                                                  </span>
                                                  <br>
                                                  <a href="https://www.facebook.com/share/1JFtLZoMU5/" class="text-primary-emphasis">Read More.</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                            <p class="text-black">Our curriculum is thoughtfully designed to integrate academic excellence with real-world application, ensuring that our students are fully equipped to succeed in their chosen fields and make a meaningful impact in their communities.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="text-center">
    <h2 class="fw-bolder fs-1">STATE-OF-THE-ART FACILITIES</h2>
    <p class="text-black">
        At Holy Cross College, we are committed to providing our students with a dynamic learning environment
        equipped with modern facilities and innovative resources. Our campus features well-equipped laboratories,
        multimedia classrooms, computer centers, and a comprehensive library — all designed to enhance
        hands-on learning and academic excellence.
    </p>
    <hr>

    <h4 class="fw-bolder fs-1">DEDICATED AND EXPERIENCED FACULTY</h4>
    <p class="text-black">
        Our faculty is composed of passionate educators and experienced professionals who go beyond teaching —
        they inspire, mentor, and guide students toward achieving their full potential. With a focus on values-driven
        education, they cultivate both intellectual growth and character formation among every Crossian.
    </p>
    <hr>

    <h4 class="fw-bolder fs-1">CAREER-READY EDUCATION</h4>
    <p class="text-black">
        Holy Cross College ensures that every graduate is equipped with the skills, knowledge, and confidence
        to succeed in their chosen field. Through our strong academic foundation and industry linkages, students
        are well-prepared to embark on meaningful careers and serve their communities with excellence.
    </p>
    <hr>

    <h4 class="fw-bolder fs-1">WHY CHOOSE HOLY CROSS COLLEGE?</h4>
    <div class="row justify-content-center mt-1">
        <div class="col-6">
            <ul class="list-unstyled custom-bullets">
                <li>Quality education recognized by CHED and DepEd</li>
                <li>Holistic formation rooted in faith, service, and excellence</li>
                <li>Accessible scholarship opportunities for deserving students</li>
                <li>Community-oriented programs that empower lifelong learning</li>
            </ul>
        </div>
    </div>
    <hr>

    <h4 class="mt-6 fw-bolder fs-1">GET IN TOUCH</h4>
    <p class="text-black">
        Ready to begin your journey at Holy Cross College, Concepcion, Tarlac?
        Discover our programs, admission process, and student life today.
        Join our Crossian family — where faith meets excellence and learning transforms lives.
    </p>
</div>
<hr>

     <section class="leadership-section">
      <div class="container">
        <div class="section-header">
          <h2>Board of Trustees</h2>
          <p>Meet the dedicated individuals guiding our institution</p>
        </div>

        <div class="leadership-grid">
          <div class="leader-card" v-for="(leader, index) in leadership" :key="index">
            <div class="leader-image">
              <img :src="leader.image" :alt="leader.name" />
            </div>
            <div class="leader-info">
              <h4>{{ leader.name }}</h4>
              <p class="leader-title">{{ leader.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  setup() {
    const leadership = ref([
      {
        name: 'Archbishop Paciano B. Anicento, DD',
        position: 'Chairman Of The Board',
        image: require('@/assets/images/leader/a.jpg')
      },
      {
        name: 'RAQUEL T. STA INES, Ph.D.',
        position: 'President',
        image: require('@/assets/images/leader/b.jpg')
      },
      {
        name: 'DANA GENEROSA SI. MARCELO',
        position: 'Comptroller, Purchasing Department - Head',
        image: require('@/assets/images/leader/d.jpg')
      },
      {
        name: 'DOLORES RAQUEL S. SALVADOR, MD, MHPEd',
        position: 'B.E.D. Principal Health Services Director',
        image: require('@/assets/images/leader/c.jpg')
      },
      {
        name: 'DANIEL PABLO T. STA INES, MS-IDT, RRT-NPS',
        position: 'Executive Assistant for VP. AMF',
        image: require('@/assets/images/leader/h.jpg')
      }
    ])

    return { leadership }
  },
  mounted() {
    axios
      .get('checker')
      .then((response) => {
        console.log(response.data.bot)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>
/* Leadership Section */
/* Leadership Section */
.leadership-section {
  padding: 6rem 0;
  background-color: #f9fafb;
  text-align: center;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #002855;
  margin-bottom: 0.5rem;
}

.section-header p {
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
}

/* 3x2 Grid Layout */
.leadership-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* exactly 3 columns */
  gap: 2rem;
  justify-items: center;
}

.leader-card {
  background: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 350px;
  height: 420px; /* Equal height for all cards */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.leader-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
}

.leader-image {
  height: 260px;
  overflow: hidden;
  background: #f0f0f0;
}

.leader-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease;
}

.leader-card:hover .leader-image img {
  transform: scale(1.05);
}

.leader-info {
  padding: 1rem 1.5rem;
}

.leader-info h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #002855;
  margin-bottom: 0.4rem;
}

.leader-title {
  color: #007bff;
  font-weight: 600;
  font-size: 0.95rem;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .leadership-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
  }
}

@media (max-width: 600px) {
  .leadership-grid {
    grid-template-columns: 1fr; /* 1 column on small screens */
  }

  .leader-card {
    height: auto;
  }
}

</style>
