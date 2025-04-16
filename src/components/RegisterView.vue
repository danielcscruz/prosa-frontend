<script setup lang="ts">
import { ref } from 'vue';
import { Eye, EyeOff } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate'; // Importação de funções necessárias para validação
import * as yup from 'yup'; // Importação de yup para schema de validação

const usernameTouched = ref<boolean>(false);
const emailTouched = ref<boolean>(false);



const showPassword = ref(false);
const showConfirmPassword = ref(false);

const router = useRouter();

// Definir o esquema de validação com yup
const schema = yup.object({
  first_name: yup.string().required('obrigatório'), // Validação para o campo 'first_name'
  last_name: yup.string().required('obrigatório'), // Validação para o campo 'last_name'
  username: yup.string().required('obrigatório'), // Validação para o campo 'username'
  email: yup.string().email('E-mail inválido').required('obrigatório'), // Validação para o campo 'email'
  password: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('A senha é obrigatória'), // Validação para o campo 'password'
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'As senhas não coincidem') // Validação para garantir que a senha e a confirmação sejam iguais
    .required('A confirmação de senha é obrigatória')
});
// Usando `useForm` para controlar o formulário, com esquema de validação do yup
const { handleSubmit, meta } = useForm({
  validationSchema: schema
});

// Usar `useField` para cada campo do formulário, vinculando a validação
const { value: username, errorMessage: usernameError } = useField<string>('username');
const { value: email, errorMessage: emailError } = useField<string>('email');
const { value: first_name, errorMessage: firstNameError } = useField<string>('first_name');
const { value: last_name, errorMessage: lastNameError } = useField<string>('last_name');
const { value: password, errorMessage: passwordError } = useField<string>('password');
const { value: confirmPassword, errorMessage: confirmPasswordError } = useField<string>('confirmPassword');


const isUsernameAvailable = ref(false);
const isEmailAvailable = ref(false);

const checkUsernameAvailability = async () => {
  if (!username.value) return;
  try {
    const res = await fetch(`https://prosa-app-31830595ff5b.herokuapp.com/api/users/check-username/?username=${username.value}`);
    const data = await res.json();
    isUsernameAvailable.value = !data.username_exists;
  } catch (e) {
    console.log(e)
    isUsernameAvailable.value = false;
  }
};

const checkEmailAvailability = async () => {
  if (!email.value) return;
  try {
    const res = await fetch(`https://prosa-app-31830595ff5b.herokuapp.com/api/users/check-email/?email=${email.value}`);
    const data = await res.json();
    isEmailAvailable.value = !data.email_exists;
  } catch (e) {
    console.log(e)
    isEmailAvailable.value = false;
  }
};


const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert("As senhas não coincidem.");
    return;
  }

  try {
    const response = await fetch("https://prosa-app-31830595ff5b.herokuapp.com/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name.value,
        last_name: last_name.value,
        username: username.value.toLowerCase(),
        email: email.value.toLowerCase(),
        password: password.value,
      }),
    });

    if (response.ok) {
      alert("Cadastro realizado com sucesso!");
      router.push('/login'); // ou qualquer outra rota de sucesso

      // Redirecionar ou logar automaticamente, se desejar
    } else {
      const errorData = await response.json();
      console.error("Erro no cadastro:", errorData);
      alert("Erro ao registrar. Verifique os dados.");
    }
  } catch (err) {
    console.error("Erro de conexão:", err);
    alert("Erro ao conectar ao servidor.");
  }
}
// Enviar formulário com validação
const submitForm = handleSubmit(register); // Aplica a validação antes de chamar a função de registro
</script>

<template>
  <div class="container">
    <img alt="capivara logo" src="@/assets/logo2.png" class="logo" />
    <h2> Registre no Prosa</h2>
    <form @submit.prevent="submitForm">
      <div class="group">
        <div class="input-field">
          <input type="text" placeholder="nome" v-model="first_name" />
          <span v-if="firstNameError" class="error">{{ firstNameError }}</span> <!-- Exibe erro se houver -->
        </div>
        <div class="input-field">
          <input type="text" placeholder="sobrenome" v-model="last_name" />
          <span v-if="lastNameError" class="error">{{ lastNameError }}</span> <!-- Exibe erro se houver -->

        </div>
      </div>

      <div class="input-field">
        <input type="text" placeholder="email" v-model="email"
          @blur="() => { emailTouched = true; checkEmailAvailability(); }" />
        <span v-if="emailError" class="error">{{ emailError }}</span> <!-- Exibe erro se houver -->
        <span v-else-if="emailTouched && !isEmailAvailable" class="error">Este email já está em uso</span>
      </div>
      <div class="input-field">
        <input type="text" placeholder="usuário" v-model="username"
          @blur="() => { usernameTouched = true; checkUsernameAvailability(); }" />
        <span v-if="usernameError" class="error">{{ usernameError }}</span> <!-- Exibe erro se houver -->
        <span v-else-if="usernameTouched && !isUsernameAvailable" class="error">Este nome de usuário já está em
          uso</span> <!-- ✅ novo -->
      </div>

      <div class="input-field password">
        <input :type="showPassword ? 'text' : 'password'" placeholder="senha" v-model="password" />
        <span @click="showPassword = !showPassword" class="toggle-icon">
          <Eye v-if="!showPassword" />
          <EyeOff v-else />
        </span>
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
      </div>

      <div class="input-field password">
        <input :type="showConfirmPassword ? 'text' : 'password'" placeholder="confirme a senha"
          v-model="confirmPassword" />
        <span @click="showConfirmPassword = !showConfirmPassword" class="toggle-icon">
          <Eye v-if="!showConfirmPassword" />
          <EyeOff v-else />
        </span>
        <span v-if="confirmPasswordError" class="error">{{ confirmPasswordError }}</span>
      </div>


      <button type="submit" :disabled="!meta.valid || !isUsernameAvailable || !isEmailAvailable">
        Registrar
      </button>
      <h4>Já é cadastrado? <a href="/login">Entre aqui</a></h4>



    </form>
  </div>
</template>

<style scoped>
.input-field.password {
  position: relative;
}

.toggle-icon {
  opacity: 0.8;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--green-moss);
}

.error {
  color: var(--error-red);
  font-size: 12px;
}

.group {
  display: flex;
  width: 100%;
  justify-content: space-between;

}

.group>.input-field {
  width: 140px;
}

a {
  text-decoration: none;
  font-weight: 800;
  color: var(--brown-mud);
}

.input-field {
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 2px solid var(--light-cream);
  background-color: var(--beige-background);
  height: 40px;
  width: 300px;
  margin-top: 10px;
}

h4 {
  color: var(--brown-mud);

  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
}

h5 {
  color: var(--brown-mud);

  font-size: 12px;
  font-weight: 500;
  align-self: flex-end;
  margin-right: 20px;
  margin-top: 4px;


}

input {
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--green-moss);
  font-weight: 400;
  font-size: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;

}

h2 {
  color: var(--brown-mud);
}

button {
  background-color: var(--green-sage);
  border: none;
  width: 60%;
  height: 40px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 20px;
  color: var(--light-cream);
}

button:hover {
  background-color: var(--capivara);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  height: 100px;
  width: 100px;
  margin-top: 40px;
}

.container {
  height: 600px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--beige-background);
  border-radius: 16px;

  @media screen and (max-width: 900px) {
    background-color: var(--beige-container);

  }
}

h2 {
  margin: 20px;
}
</style>
