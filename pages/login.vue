<script setup lang="ts">
import { v4 as uuid } from "uuid";

useHead({
  title: "Login | CRM System",
});

const email = ref("");
const password = ref("");
const name = ref("");

const isLoadingStore = useLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
  isLoadingStore.setIsLoading(true);
  await account.createEmailSession(email.value, password.value);

  const response = await account.get();
  if (response) {
    authStore.setUser({
      email: response.email,
      name: response.name,
      status: response.status,
    });
  }

  email.value = "";
  password.value = "";
  name.value = "";

  await router.push("/");
  isLoadingStore.setIsLoading(false);
};

const register = async () => {
  await account.create(uuid(), email.value, password.value, name.value);

  await login();
};
</script>

<template>
  <div class="wrapper">
    <div class="login">
      <h1 class="title">Login</h1>

      <form>
        <UiInput
          placeholder="Email"
          type="email"
          class="mb-3"
          v-model="email"
        />
        <UiInput
          placeholder="Password"
          type="password"
          class="mb-3"
          v-model="password"
        />
        <UiInput placeholder="Name" type="text" class="mb-3" v-model="name" />
        <div class="btn_wrapper">
          <UiButton type="button" @click="login">Login</UiButton>
          <UiButton type="button" @click="register">Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply flex items-center justify-center min-h-screen w-full;
}

.login {
  @apply rounded bg-sidebar w-1/4 p-5;
}

.title {
  @apply text-2xl font-bold text-center mb-5;
}

.btn_wrapper {
  @apply flex items-center justify-center gap-5;
}
</style>
