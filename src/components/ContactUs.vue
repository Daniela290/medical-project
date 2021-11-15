<template>
  <div class="contact-us wrapper">
    <div class="content contact-us__content">

      <div class="title contact-us__title">Contact us</div>

      <form class="form" @submit.prevent="submitHandler()">

        <input class="input"
               type="text"
               :placeholder="$v.name.$error?'Please enter name':'Name'"
               v-model.trim="name"
               :class="{'input-invalid': ($v.name.$dirty && !$v.name.required)
               || ($v.name.$dirty && !$v.name.maxLength)}">

        <input class="input"
               type="text"
               :placeholder="$v.email.$error?'Please enter email':'Email'"
               v-model.trim="email"
               :class="{'input-invalid': ($v.email.$dirty && !$v.email.required)
               || ($v.email.$dirty && !$v.email.email)}">

        <input class="input"
               type="text"
               :placeholder="$v.subject.$error?'Please subject name':'Subject'"
               v-model.trim="subject"
               :class="{'input-invalid': ($v.subject.$dirty && !$v.subject.required)
               || ($v.subject.$dirty && !$v.subject.minLength)}">

        <textarea class="input input--with-margin" placeholder="Your message" v-model.trim="yourMessage"></textarea>

        <button class="submit" type="submit">SUBMIT</button>

      </form>

    </div>
  </div>
</template>

<script>
import {required, maxLength, minLength, email} from 'vuelidate/lib/validators'

export default {
  name: "ContactUs",
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      console.log('submitHandler')
    }
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(20)
    },
    email: {
      required,
      email
    },
    subject: {
      required,
      minLength: minLength(10)
    },
    yourMessage: {}
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      yourMessage: ''
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

.contact-us {
  min-height: 100vh;
  padding-top: 110px;

  &__content {
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    color: rgb(65, 61, 75);
    margin-bottom: 70px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.input {
  width: 700px;
  height: 65px;
  border-radius: 5px;
  border-width: 0.035cm;
  border-color: rgb(0, 0, 0);
  border-style: solid;
  opacity: 0.202;
  box-sizing: border-box;
  padding-left: 20px;
  font-size: 20px;
  font-family: "Times New Roman";
  //animation: invalidInput .4s linear .10s;
  //transform: skew(0, 0);

  &-invalid {
    border-width: 1px !important;
    border-color: red !important;
    opacity: .7;
  }

  &--with-margin {
    padding-top: 19px;
    height: 259px;
  }
}

@keyframes invalidInput {
  0% {
    transform: skew(0, 0);
  }
  35% {
    transform: skew(-20px, 20px) //matrix(0,-20px,20px,0,-20px,20px);
  }
  65% {
    transform: skew(20px, -20px) //matrix(0,-20px,20px,0,20px,-20px);
  }
  100% {
    transform: skew(0, 0);
  }
}

.input::placeholder {
  font-size: 20px;
  font-family: "Times New Roman";
  color: $footer-bg;
  opacity: 0.702;
}

.input-invalid::placeholder {
  color: red !important;
  opacity: 0.9;
}

.submit {
  font-size: 0.564cm;
  font-family: "Roboto";
  color: $blue-color;
  text-align: center;

  border-width: 0.035cm;
  border-color: rgb(0, 224, 208);
  border-style: solid;
  border-radius: 0.071cm;

  width: 4.233cm;
  height: 1.411cm;
}

</style>