export interface IAuthStore {
  email: string;
  name: string;
  status: boolean;
}

const defaultValue: { user: IAuthStore; isLoading: boolean } = {
  user: {
    email: "",
    name: "",
    status: false,
  },
  isLoading: false,
};

export const useAuthStore = defineStore("auth", () => {
  const user = ref(defaultValue.user);

  const status = computed(() => user.value.status);

  const setUser = (input: IAuthStore) => {
    user.value = input;
  };

  const clear = () => {
    user.value = defaultValue.user;
  };

  return {
    status,
    setUser,
    clear,
  };
});

export const useLoadingStore = defineStore("loading", () => {
  const isLoading = ref(defaultValue.isLoading);

  const getIsLoading = computed(() => isLoading.value);

  const setIsLoading = (load: boolean) => {
    isLoading.value = load;
  };

  return {
    getIsLoading,
    setIsLoading,
  };
});
