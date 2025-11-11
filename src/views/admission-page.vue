<template>
  <ImageTitleHeader
    titleHeader="SCHOOL ADMISSION"
    :banner="require('@/assets/resources/banner/banner.jpg')"
    topValue="80%"
  />

  <div class="container mt-5">
    <div class="alert alert-primary alert-dismissible fade show" role="alert">
      <h4 class="fw-bolder mb-2">HEY THERE, FUTURE STUDENTS!</h4>
      <p class="mb-0">
        Your journey to success starts NOW!<br />
        Are you ready to unlock your potential and be part of something amazing?
        <strong>Enrollment for incoming college freshmen IS STILL ONGOING!</strong>
      </p>
    </div>

    <div class="card mt-4">
      <div class="card-body">
        <h4 class="fw-bolder">HOW TO APPLY</h4>
        <ol class="contact-details mt-3">
          <li>Fill out the admission form here 👉🏻
            <a href="https://forms.gle/HcC4ed3fS5usD6io7" target="_blank">Admission Form</a>
          </li>
          <li>Check your email — we’ll send you your exam schedule!</li>
        </ol>

        <hr />

        <h5 class="fw-bold text-primary mt-4">DISCOVER YOUR PASSION. CHOOSE YOUR PATH.</h5>
        <p>Explore our dynamic programs and find the one that inspires you!</p>

        <hr />

        <h5 class="fw-bolder text-success mt-4">REQUIREMENTS FOR INCOMING FRESHMEN</h5>
        <ul class="contact-details">
          <li>Admission Test Result</li>
          <li>Original Form 138 / SF 9 (Report Card)</li>
          <li>Certificate of Good Moral Character</li>
          <li>Photocopy of PSA Birth Certificate</li>
          <li>Marriage Certificate (if married)</li>
          <li>1 pc. 2x2 picture</li>
        </ul>

        <h5 class="fw-bolder text-success mt-4">REQUIREMENTS FOR TRANSFEREES</h5>
        <ul class="contact-details">
          <li>Admission Test Result</li>
          <li>Copy of Grades / Transcript of Records</li>
          <li>Transfer Credential / Honorable Dismissal</li>
          <li>Photocopy of PSA Birth Certificate</li>
          <li>Marriage Certificate (if married)</li>
          <li>1 pc. 2x2 picture</li>
        </ul>

        <hr />

        <!-- Optional Carousel (Replace with your school posters/images) -->
        <div id="admissionCarousel" class="carousel slide mt-5" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="slides[0]" class="d-block w-100" alt="Enrollment Poster" />
            </div>
            <div class="carousel-item">
              <img :src="slides[1]" class="d-block w-100" alt="Programs Poster" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#admissionCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#admissionCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageTitleHeader from '@/components/main-layouts/components/widgets/ImageTitleHeader.vue'

export default {
  name: 'AdmissionPage',
  components: { ImageTitleHeader },
  data() {
    return {
      slides: [
        require('@/assets/resources/nammat/listofprograms.jpg'),
        require('@/assets/resources/nammat/enrollmentsteps.jpg')
      ]
    }
  }
}
</script>
