<template>
  <span class="experienceTitle">გამოცდილება</span>
  <span class="pageNumber">2/3</span>
  <router-link to="/home">
    <img src="../assets/Vector.jpg" class="homeButton" @click="clearData" />
  </router-link>
  <the-line></the-line>
  <form>
    <div
      class="position"
      :class="[
        { valid: validation.positionValidity === 'valid' },
        { invalid: validation.positionValidity === 'invalid' },
      ]"
    >
      <label for="position">თანამდებობა</label>
      <input
        type="text"
        placeholder=" დეველოპერი, დიზაინერი, ა.შ"
        id="position"
        name="position"
        v-model.lazy="resume.position"
        @blur="validatePosition"
      />
      <div>მინიმუმ 2 სიმოლო</div>
    </div>
    <div
      class="employer"
      :class="[
        { valid: validation.employerValidity === 'valid' },
        { invalid: validation.employerValidity === 'invalid' },
      ]"
    >
      <label for="employer">დამსაქმებელი</label>
      <input
        type="text"
        placeholder=" დამსაქმებელი"
        id="employer"
        name="employer"
        v-model.lazy="resume.employer"
        @blur="validateEmployer"
      />
      <div>მინიმუმ 2 სიმოლო</div>
      <img
        v-if="validation.employerValidity === 'invalid'"
        src="../assets/invalidLogo.jpg"
      />
    </div>
    <div
      class="experienceStartingDate"
      :class="[
        { valid: validation.experienceStartingDateValidity === 'valid' },
        { invalid: validation.experienceStartingDateValidity === 'invalid' },
      ]"
    >
      <label for="experienceStartingDate">დაწყების რიცხვი</label>
      <input
        type="date"
        id="experienceStartingDate"
        name="experienceStartingDate"
        v-model.lazy="resume.experienceStartingDate"
        @blur="validateExperienceStartingDate"
      />
    </div>
    <div
      class="experienceEndDate"
      :class="[
        { valid: validation.experienceEndDateValidity === 'valid' },
        { valid: validation.experienceEndDateValidity === 'invalid' },
      ]"
    >
      <label for="experienceEndDate">დამთავრეის რიცხვი</label>
      <input
        type="date"
        id="experienceEndDate"
        name="experienceEndDate"
        v-model="resume.experienceEndDate"
        @blur="validateExperienceEndDate"
      />
    </div>
    <div
      class="experienceDescription"
      :class="[
        { valid: validation.experienceDescriptionValidity === 'valid' },
        { invalid: validation.experienceDescriptionValidity === 'invalid' },
      ]"
    >
      <label for="experienceDescription">აღწერა</label>
      <input
        type="textarea"
        id="experienceDescription"
        placeholder=" როლი თანამდებობაზე და ზოგადი აღწერა"
        name="experienceDescription"
        v-model.lazy="resume.experienceDescription"
        @blur="validateExperienceDescription"
      />
    </div>
  </form>
  <div
    v-show="
      this.resume.position != null &&
      this.resume.employer != null &&
      this.resume.experienceStartingDate != null &&
      this.resume.experienceEndDate != null &&
      this.resume.experienceDescription != null
    "
  >
    <router-link to="/pageEducation">
      <button class="toTheNextPage"><span>შემდეგი</span></button>
    </router-link>
  </div>
  <div
    v-show="
      this.resume.position == null ||
      this.resume.employer == null ||
      this.resume.experienceStartingDate == null ||
      this.resume.experienceEndDate == null ||
      this.resume.experienceDescription == null
    "
  >
    <button class="toTheNextPage"><span>შემდეგი</span></button>
  </div>
  <router-link to="/pagePersonal">
    <button class="backToPreviousPage"><span>უკან</span></button>
  </router-link>

  <the-resume
    :name="resume.userName"
    :surname="resume.surname"
    :email="resume.email"
    :phoneNumber="resume.phoneNumber"
    :aboutme="resume.aboutme"
    :position="resume.position"
    :employer="resume.employer"
    :experienceStartingDate="resume.experienceStartingDate"
    :experienceEndDate="resume.experienceEndDate"
    :experienceDescription="resume.experienceDescription"
  ></the-resume>
</template>

<script>
import TheResume from '../components/TheResume.vue';
import TheLine from '../components/TheLine.vue';
export default {
  components: {
    TheResume,
    TheLine,
  },
  data() {
    return {
      resume: {
        userName: localStorage.userName,
        surname: localStorage.surname,
        aboutme: localStorage.aboutme,
        email: localStorage.email,
        phoneNumber: localStorage.phoneNumber,
        position: localStorage.position,
        employer: localStorage.employer,
        experienceStartingDate: localStorage.experienceStartingDate,
        experienceEndDate: localStorage.experienceEndDate,
        experienceDescription: localStorage.experienceDescription,
      },

      validation: {
        positionValidity: 'pending',
        employerValidity: 'pending',
        experienceStartingDateValidity: 'pending',
        experienceEndDateValidity: 'pending',
        experienceDescriptionValidity: 'pending',
      },
    };
  },
  methods: {
    clearData() {
      localStorage.clear();
    },
    validateExperienceEndDate() {
      if (this.resume.experienceEndDate !== '') {
        this.validation.experienceEndDateValidity = 'valid';
        localStorage.setItem(
          'experienceEndDate',
          this.resume.experienceEndDate
        );

        console.log(this.resume.experienceEndDate);
      } else {
        this.validation.experienceEndDateValidity = 'invalid';
      }
    },
    validateExperienceStartingDate() {
      if (this.resume.experienceStartingDate !== '') {
        this.validation.experienceStartingDateValidity = 'valid';
        localStorage.setItem(
          'experienceStartingDate',
          this.resume.experienceStartingDate
        );
        console.log(this.resume.experienceStartingDate);
      } else if (this.resume.experienceStartingDate === '') {
        this.validation.experienceStartingDateValidity = 'invalid';
      }
    },
    validateEmployer() {
      if (this.resume.employer?.match(/^[a-zA-Z]{2,}$/)) {
        this.validation.employerValidity = 'valid';
        localStorage.setItem('employer', this.resume.employer);
      } else {
        this.validation.employerValidity = 'invalid';
      }
    },
    validatePosition() {
      if (this.resume.position?.match(/^[a-zA-Z]{2,}$/)) {
        this.validation.positionValidity = 'valid';
        localStorage.setItem('position', this.resume.position);
      } else {
        this.validation.positionValidity = 'invalid';
      }
    },
    validateExperienceDescription() {
      if (this.resume.experienceDescription !== '') {
        this.validation.experienceDescriptionValidity = 'valid';
        localStorage.setItem(
          'experienceDescription',
          this.resume.experienceDescription
        );
      } else {
        this.validation.experienceDescriptionValidity = 'invalid';
      }
    },
  },
};
</script>

<style scoped>
@import '../css/experience/experienceTitle.css';
@import '../css/experience/position.css';
@import '../css/experience/employer.css';
@import '../css/experience/experienceStartingDate.css';
@import '../css/experience/experienceEndDate.css';
@import '../css/experience/experienceDescription.css';
@import '../css/experience/toTheNextPage.css';
@import '../css/experience/backToPersonal.css';

.experienceDescription.valid input {
  border-color: #98e37e;
}
.experienceDescription.invalid input {
  border-color: #ef5050;
}
.experienceStartingDate.valid input {
  border-color: #98e37e;
}
.experienceEndDate.valid input {
  border-color: #98e37e;
}
.experienceStartingDate.invalid input {
  border-color: #ef5050;
}
.experienceEndDate.invalid input {
  border-color: #ef5050;
}
.position.valid input {
  border-color: #98e37e;
  background: url('../assets/validLogo.jpg') no-repeat scroll 760.75px 11.75px;
}

.position.invalid input {
  border-color: #ef5050;
}

.employer.valid input {
  border-color: #98e37e;
  background: url('../assets/validLogo.jpg') no-repeat scroll 760.75px 11.75px;
}

.employer.invalid input {
  border-color: #ef5050;
}
[placeholder=' როლი თანამდებობაზე და ზოგადი აღწერა'] {
  height: 21px;
  left: 16px;
  right: 16px;
  top: 13px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  color: rgba(0, 0, 0, 0.6);
}
</style>
