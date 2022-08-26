<script setup>
import AuthTemplate from "../components/AuthPage/AuthTemplate.vue";
import main from '../js/VueRouter.js'
const {toSection} = main()
</script>

<template>
  <AuthTemplate>
    <template #authSelect>
        Log in
    </template>
    <template #btnName>
        Log in
    </template>
    <template #forgot_password>
        Forgot your password?
    </template>
    <template #select>
          Don’t have an account?
          <u class="cursor-pointer" @click="toSection('/auth/signup')">Sign up</u>
        </template>
  </AuthTemplate>
</template>