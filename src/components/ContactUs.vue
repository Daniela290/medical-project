<template>
  <div class="contact-us wrapper"
       :class="$store.getters.theme?'contact-us--light--theme':'contact-us--dark--theme'">
    <div class="content contact-us__content">

      <div class="title contact-us__title"
           :class="$store.getters.theme?'contact-us__title--light--theme':'contact-us__title--dark--theme'">
        Contact us
      </div>

      <form class="form" @submit.prevent="submitHandler()" autocomplete="off">

        <input class="input"
               type="text"
               :placeholder="$v.name.$error?'Please enter name':'Name'"
               v-model.trim="name"
               :class="[{'input-invalid': ($v.name.$dirty && !$v.name.required)
               || ($v.name.$dirty && !$v.name.maxLength)},
               {'input-valid': ($v.name.required && $v.name.maxLength)},
               $store.getters.theme?'input--light--theme':'input--dark--theme']"
               autocomplete="new-password">

        <input class="input"
               type="text"
               :placeholder="$v.email.$error?'Please enter email':'Email'"
               v-model.trim="email"
               :class="[{'input-invalid': ($v.email.$dirty && !$v.email.required)
               || ($v.email.$dirty && !$v.email.email)},
               {'input-valid': ($v.email.required && $v.email.email)},
               $store.getters.theme?'input--light--theme':'input--dark--theme']"
               autocomplete="new-password">

        <input class="input"
               type="text"
               :placeholder="$v.subject.$error?'Please subject name':'Subject'"
               v-model.trim="subject"
               :class="[{'input-invalid': ($v.subject.$dirty && !$v.subject.required)
               || ($v.subject.$dirty && !$v.subject.minLength)},
               {'input-valid': ($v.subject.required && $v.subject.minLength)},
               $store.getters.theme?'input--light--theme':'input--dark--theme']">

        <textarea class="input input--with-margin"
                  placeholder="Your message"
                  v-model.trim="yourMessage"
                  :class="$store.getters.theme?'input--light--theme':'input--dark--theme'">
        </textarea>

        <button class="submit" type="submit">SUBMIT</button>

      </form>

      <el-dialog
          title="Gratitude"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>
        <span>Thank you for contacting us!</span>
        <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="centerDialogVisible = false">Close</el-button>
  </span>
      </el-dialog>

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
      this.centerDialogVisible = true
      this.name = ''
      this.email = ''
      this.subject = ''
      this.yourMessage = ''
      this.$v.reset
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
      yourMessage: '',
      centerDialogVisible: false
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

.contact-us {
  min-height: 100vh;
  padding-top: 110px;
  padding-bottom: 20px;

  &__content {
    flex-direction: column;
    justify-content: center;
  }

  &--light-theme {
    background: $portfolio-bg;
  }

  &--dark--theme {
    background-color: rgba($dark-color, .5)
  }

  &__title--light-theme {
    color: rgb(65, 61, 75);
  }

  &__title--dark--theme {
    color: $portfolio-bg;
  }

  &__title {
    margin-bottom: 70px;
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
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    padding-left: 20px;
    font-size: 20px;
    font-family: "Times New Roman";

    &--light-theme {
      color: rgba($footer-bg, .1);
      opacity: 0.212;
      border-color: $footer-bg;
    }

    &--dark--theme {
      color: $portfolio-bg;
      opacity: 1;
      background-color: rgba($portfolio-bg, .2);
      border-color: $portfolio-bg;
    }

    &-invalid {
      border-width: 1px !important;
      border-color: red !important;
      opacity: .7;
      background-color: rgba(red, .2);
    }

    &-valid {
      border-width: 1px !important;
      border-color: #01db01 !important;
      opacity: 1;
      background-color: rgba(70, 243, 70, 0.3);
    }

    &--with-margin {
      padding-top: 19px;
      height: 259px;
    }
  }

  .input::placeholder {
    font-size: 20px;
    font-family: "Times New Roman";
  }

  .input--dark--theme::placeholder {
    color: $portfolio-bg;
    opacity: 1;
  }

  .input--light--theme::placeholder {
    color: $footer-bg;
    opacity: 0.702;
  }

  .input-invalid::placeholder {
    color: red !important;
    opacity: 1;
  }

  .submit {
    font-size: 0.564cm;
    font-family: "Roboto";
    color: $blue-color;
    text-align: center;
    cursor: pointer;
    border-width: 0.035cm;
    border-color: rgb(0, 224, 208);
    border-style: solid;
    border-radius: 0.071cm;
    width: 4.233cm;
    height: 1.411cm;
  }

  .submit:hover {
    box-shadow: 0 0 10px $blue-color, 0 0 15px rgba($footer-bg, .6), 0 0 24px rgba($footer-bg, .4);
  }

}

</style>