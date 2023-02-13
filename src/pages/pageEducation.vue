<template>
  <span class="educationTitle">განათლება</span>
  <span class="pageNumber">3/3</span>
  <router-link to="/home">
    <img src="../assets/Vector.jpg" class="homeButton" @click="clearData" />
  </router-link>
  <the-line></the-line>

  <form>
    <div
      class="school"
      :class="[
        { valid: validation.schoolValidity === 'valid' },
        { invalid: validation.schoolValidity === 'invalid' },
      ]"
    >
      <label for="school">სასწავლებელი</label>
      <input
        type="text"
        name="school"
        id="school"
        placeholder=" სასწავლებელი"
        v-model.lazy="resume.school"
        @blur="validateSchool"
      />

      <div>მინიმუმ 2 სიმბოლო</div>
      <img
        v-if="validation.schoolValidity === 'invalid'"
        src="../assets/invalidLogo.jpg"
      />
    </div>
    <div
      class="degree"
      :class="[
        { valid: this.validation.degreesValidity === 'valid' },
        { invalid: this.validation.degreesValidity === 'invalid' },
      ]"
    >
      <label for="degree">ხარისხი</label>
      <select
        name="degree"
        id="degree"
        @click="getDataFromServer"
        v-model="selectOption"
        @blur="selectedOption"
      >
        <option
          v-for="degree in degrees"
          :key="degree.id"
          :value="degree.title"
        >
          {{ degree.title }}
        </option>
      </select>
    </div>
    <div
      class="degreesEndDate"
      :class="[
        { valid: this.validation.degreesEndDateValidity === 'valid' },
        { invalid: this.validation.degreesEndDateValidity === 'invalid' },
      ]"
    >
      <label for="degreesEndDate">დამთავრების რიცხვი</label>
      <input
        type="date"
        id="degreesEndDate"
        name="degreesEndDate"
        v-model="resume.degreesEndDate"
        @blur="validateDegreesEndDate"
      />
    </div>
    <div
      class="schoolDescription"
      :class="[
        { valid: this.validation.schoolDescriptionValidity === 'valid' },
        { invalid: this.validation.schoolDescriptionValidity === 'invalid' },
      ]"
    >
      <label for="schoolDescription">აღწერა</label>
      <input
        type="textarea"
        id="schoolDescription"
        name="schoolDescription"
        placeholder=" განათლების აღწერა"
        v-model.lazy="resume.schoolDescription"
        @blur="validateSchoolDescription"
      />
    </div>

    <router-link to="/pageExperience">
      <button class="backToPreviousPage"><span>უკან</span></button>
    </router-link>
  </form>
  <button class="finishButton" @click="uploadFilesToServer">
    <span>დასრულება</span>
  </button>

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
    :school="resume.school"
    :degrees="resume.degrees"
    :degreesEndDate="resume.degreesEndDate"
    :schoolDescription="resume.schoolDescription"
  ></the-resume>
</template>

<script>
import TheLine from '../components/TheLine.vue';
import TheResume from '../components/TheResume.vue';
export default {
  components: {
    TheLine,
    TheResume,
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
        school: localStorage.school,
        degrees: localStorage.degrees,
        degreesEndDate: localStorage.degreesEndDate,
        schoolDescription: localStorage.schoolDescription,
      },
      validation: {
        schoolValidity: ' pending',
        degreesValidity: 'pending',
        degreesEndDateValidity: 'pending',
        schoolDescriptionValidity: 'pending',
      },
      degrees: [],
      selectOption: '',
    };
  },
  methods: {
    uploadFilesToServer() {
      fetch('https://resume.redberryinternship.ge/api/cvs', {
        method: 'post',
        headers: { 'content-type': 'multipart/form-data' },
        body: {},
      });
    },
    validateSchoolDescription() {
      if (this.resume.schoolDescription?.match(/^[a-zA-Z]{2,}$/)) {
        localStorage.setItem(
          'schoolDescription',
          this.resume.schoolDescription
        );
        this.validation.schoolDescriptionValidity = 'valid';
      } else {
        this.validation.schoolDescriptionValidity = 'invalid';
      }
    },
    selectedOption() {
      if (this.selectOption !== '') {
        localStorage.setItem('degrees', this.selectOption);
        this.validation.degreesValidity = 'valid';
      } else {
        this.validation.degreesValidity = 'invalid';
      }
    },
    clearData() {
      localStorage.clear();
    },

    getDataFromServer() {
      fetch('https://resume.redberryinternship.ge/api/degrees', {
        method: 'get',
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              title: data[id].title,
            });
          }
          this.degrees = results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validateDegreesEndDate() {
      if (this.resume.degreesEndDate !== '') {
        this.validation.degreesEndDateValidity = 'valid';
        localStorage.setItem('degreesEndDate', this.resume.degreesEndDate);
      } else {
        this.validation.degreesEndDateValidity = 'invalid';
      }
    },
    validateSchool() {
      if (this.resume.school?.match(/^[a-zA-Z]{2,}$/)) {
        this.validation.schoolValidity = 'valid';
        localStorage.setItem('school', this.resume.school);
      } else {
        this.validation.schoolValidity = 'invalid';
      }
    },
  },

  mounted() {
    this.getDataFromServer();
  },
};
</script>

<style scoped>
@import '../css/personal/pageNumber.css';
@import '../css/education/educationTitle.css';
@import '../css/education/school.css';
@import '../css/education/degree.css';
@import '../css/education/degreesEndDate.css';
@import '../css/education/schoolDescription.css';
@import '../css/education/finishButton.css';
.school.valid input {
  border-color: #98e37e;
  background: url('../assets/validLogo.jpg') no-repeat scroll 760.75px 11.75px;
}
.school.invalid input {
  border-color: #ef5050;
}

.degree.invalid select {
  border-color: #ef5050;
}
.degree.valid select {
  border-color: #98e37e;
}
.schoolDescription.valid input {
  border-color: #98e37e;
}
.schoolDescription.invalid input {
  border-color: #ef5050;
}

.degreesEndDate.valid input {
  border-color: #98e37e;
}
.degreesEndDate.invalid input {
  border-color: #ef5050;
}
</style>
