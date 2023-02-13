<template>
  <router-link to="/home">
    <img src="../assets/Vector.jpg" class="homeButton" @click="clearData" />
  </router-link>
  <div class="resumePR">
    <div class="namePR">{{ name }}</div>
    <div class="surnamePR">{{ surname }}</div>
    <img :src="imageurl" class="imgPR" />
    <div class="emailPR">{{ email }}</div>
    <div class="phoneNumberPR">{{ phoneNumber }}</div>
    <div class="aboutMeTitlePR">ჩემ შესახებ</div>
    <div class="aboutMePR">{{ aboutme }}</div>
    <div class="experienceTitlePR">გამოცდილება</div>
    <div class="positionPR">{{ position }} {{ employer }}</div>
    <div class="experienceDatePR">
      {{ experienceStartingDate }}- {{ experienceEndDate }}
    </div>
    <div class="experienceDescriptionPR">{{ experienceDescription }}</div>
    <div class="educationTitlePR">განათლება</div>
    <div class="schoolPR">{{ school }} {{ degrees }}</div>
    <div class="degreesEndDatePR">{{ degreesEndDate }}</div>
    <div class="schoolDescriptionPR">{{ schoolDescription }}</div>
    <img class="logoPR" src="../assets/resumeLogo.jpg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: localStorage.getItem('userName'),
      surname: localStorage.getItem('surname'),
      aboutme: localStorage.getItem('aboutme'),
      email: localStorage.getItem('email'),
      phoneNumber: localStorage.getItem('phoneNumber'),
      position: localStorage.getItem('position'),
      employer: localStorage.getItem('employer'),
      experienceStartingDate: localStorage.getItem('experienceStartingDate'),
      experienceEndDate: localStorage.getItem('experienceEndDate'),
      experienceDescription: localStorage.getItem('experienceDescription'),
      school: localStorage.getItem('school'),
      degrees: localStorage.getItem('degrees'),
      degreesEndDate: localStorage.getItem('degreesEndDate'),
      schoolDescription: localStorage.getItem('schoolDescription'),
      imageurl: localStorage.getItem('image'),
    };
  },
  methods: {
    clearData() {
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
@import url('../css/resume/namePR.css');
@import url('../css/resume/resumePR.css');
@import url('../css/resume/surnamePR.css');
@import url('../css/resume/imgPR.css');
@import url('../css/resume/emailPR.css');
@import url('../css/resume/phoneNumberPR.css');
@import url('../css/resume/aboutMeTitlePR.css');
@import url('../css/resume/aboutMePR.css');
@import url('../css/resume/positionPR.css');
@import url('../css/resume/experienceTitlePR.css');
@import url('../css/resume/experienceDatePR.css');
@import url('../css/resume/experienceDescriptionPR.css');
@import url('../css/resume/educationTitlePR.css');
@import url('../css/resume/schoolPR.css');
@import url('../css/resume/degreesEndDatePR.css');
@import url('../css/resume/schoolDescriptionPR.css');
@import url('../css/resume/logoPR.css');
</style>
