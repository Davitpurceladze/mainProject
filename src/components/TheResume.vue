<template>
  <div class="resumeBody">
    <div class="resumeName">{{ name }}</div>
    <div class="resumeSurname">{{ surname }}</div>
    <div class="resumeEmail">
      {{ email }}
      <div v-show="email"><img src="../assets/emailLogo.jpg" /></div>
    </div>
    <div class="resumePhoneNumber">
      {{ phoneNumber }}
      <div v-show="phoneNumber">
        <img src="../assets/phoneNumberLogo.jpg" />
      </div>
    </div>
    <div v-show="aboutme" class="resumeAboutmeTitle">ჩემ შესახებ</div>
    <div class="resumeAboutme">
      {{ aboutme }}
    </div>
    <div v-show="position" class="resumeExperienceTitle">გამოცდილება</div>
    <div class="resumePosition">{{ position }}, {{ employer }}</div>

    <div class="resumeExperienceDate">
      {{ experienceStartingDate }} - {{ experienceEndDate }}
    </div>
    <div class="resumeExperienceDescription">
      {{ experienceDescription }}
    </div>
    <div>
      <img :src="imageurl" class="profileImage" />
    </div>
    <div v-show="school" class="resumeEducation">განათლება</div>
    <div class="resumeSchool">{{ school }} {{ degrees }}</div>
    <div class="resumeDegreesEndDate">{{ degreesEndDate }}</div>
    <div class="resumeSchoolDescription">{{ schoolDescription }}</div>

    <img class="resumeLogo" src="../assets/resumeLogo.jpg" />
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'surname',
    'email',
    'phoneNumber',
    'aboutme',
    'position',
    'employer',
    'experienceStartingDate',
    'experienceEndDate',
    'experienceDescription',
    'school',
    'degrees',
    'degreesEndDate',
    'schoolDescription',
  ],
  data() {
    return {
      imageurl: localStorage.getItem('image'),
    };
  },
};
</script>

<style scoped>
.resumeSchoolDescription {
  position: absolute;
  width: 662px;
  height: 88px;
  left: 80px;
  top: 687px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* or 138% */

  text-transform: lowercase;

  color: #000000;
}
.resumeDegreesEndDate {
  position: absolute;
  width: 84px;
  height: 19px;
  left: 80px;
  top: 652px;

  font-family: 'Helvetica Neue';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #919191;
}
.resumeSchool {
  position: absolute;
  width: 349px;
  height: 20px;
  left: 80px;
  top: 625px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  /* off black */

  color: #1a1a1a;
}

.resumeEducation {
  position: absolute;
  width: 115px;
  height: 22px;
  left: 80px;
  top: 588px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #f93b1d;
}
.profileImage {
  position: absolute;
  width: 246px;
  height: 246px;
  left: 501px;
  top: 48px;

  border-radius: 133px;
}
.resumeExperienceDescription {
  position: absolute;
  width: 662px;
  height: 66px;
  left: 80px;
  top: 464px;

  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* or 138% */

  text-transform: capitalize;

  color: #000000;
}
.resumeExperienceDate {
  position: absolute;
  width: 183px;
  height: 19px;
  left: 80px;
  top: 429px;

  font-family: 'HelveticaNeue';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #919191;
}
.resumeExperienceTitle {
  position: absolute;
  width: 143px;
  height: 22px;
  left: 80px;
  top: 365px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #f93b1d;
}
.resumePosition {
  position: absolute;
  width: 178px;
  height: 20px;
  left: 80px;
  top: 402px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  /* off black */

  color: #1a1a1a;
}
.resumeLogo {
  position: absolute;
  width: 42px;
  height: 42px;
  left: 78px;
  top: 994px;
}
.resumeAboutmeTitle {
  position: absolute;
  width: 118px;
  height: 22px;
  left: 80px;
  top: 213px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #f93b1d;
}
.resumeAboutme {
  position: absolute;
  width: 432px;
  height: 72px;
  left: 80px;
  top: 250px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  text-transform: lowercase;

  color: #000000;
}
.resumePhoneNumber img {
  position: absolute;
  width: 16.64px;
  height: 16.64px;
  top: 1.8px;
  left: -27px;
}
.resumePhoneNumber {
  position: absolute;
  width: 151px;
  height: 21px;
  left: 111px;
  top: 158px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #1a1a1a;
}
.resumeEmail img {
  position: absolute;
  width: 16.67px;
  height: 16.67px;
  top: 1.67px;
  left: -28px;
  background: #898989;
}
.resumeEmail {
  position: absolute;
  width: 179px;
  height: 21px;
  left: 111px;
  top: 127px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #1a1a1a;
}
.resumeSurname {
  position: absolute;
  width: 145px;
  height: 42px;
  left: 223px;
  top: 68px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;

  color: #f93b1d;
}
.resumeBody {
  position: absolute;
  width: 822px;
  height: 1080px;
  left: 1098px;
  right: 0px;
  top: 0px;
}

.resumeName {
  position: absolute;
  width: 123px;
  height: 42px;
  left: 80px;
  top: 68px;

  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;

  color: #f93b1d;
}
</style>
