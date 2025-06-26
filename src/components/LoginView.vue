<template>
  <div class="login-container">
    <div class="login-box">
      <h2><span class="accent">|</span> CRUD OPERATIONS</h2>
      <h3>SIGN IN</h3>
      <p>Enter your credentials to access your account</p>
      <form @submit.prevent="handleSubmit">
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          required
        />
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit">SIGN IN</button>
      </form>
      <p class="reset">Forgot your password? <a href="#">Reset Password</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      // Пример простой проверки
      if (this.email === 'Doniyor@gmail.com' && this.password === '1111') {
        alert('Login successful!');
        this.$router.push('/dashboard');
        // Можно здесь сделать редирект на другую страницу
      } else {
        alert('Invalid credentials');
      }
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
}

.login-container {
  background: linear-gradient(135deg, #fbbf24, #fde68a);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box {
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  width: 360px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

.accent {
  color: #facc15;
  font-weight: bold;
  margin-right: 6px;
}

h3 {
  margin: 10px 0;
}

form {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 12px;
  margin-top: 20px;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background-color: #f59e0b;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #d97706;
}

.reset {
  margin-top: 20px;
  font-size: 14px;
}

.reset a {
  color: #f59e0b;
  text-decoration: none;
}
</style>
