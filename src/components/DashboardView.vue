<template>
  <div class="dashboard">
    <div class="sidebar">
      <h2><span class="accent">|</span> CRUD OPERATIONS</h2>
      <img src="data:image/jpeg;base64,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" alt="Profile" class="avatar" />
      <h3>Karthi Madesh</h3>
      <p class="role">Admin</p>
      <ul>
        <li class="active">🏠 Home</li>
        <li>📘 Course</li>
        <li  @click="goToStudents">🎓 Students</li>
        <li  @click="goToPayments">💰 Payment</li>
        <li>📊 Report</li>
        <li>⚙️ Settings</li>
      </ul>
      <button class="logout"  @click="logout">Logout</button>
    </div>
    <div class="main">
      <div class="cards">
        <div class="card lightblue">
        <div class="icon"><img src="./Vector.png" alt="Students Icon" /></div>
        <p class="label">Students</p>
        <p class="value">{{ students }}</p>
      </div>
      <div class="card pink">
        <div class="icon"><img src="./bookmark 1.png" alt="Course Icon" /></div>
        <p class="label">Course</p>
        <p class="value">{{ courses }}</p>
      </div>
      <div class="card lightyellow">
        <div class="icon"><img src="./usd-square 1.png" alt="Money Icon" /></div>
        <p class="label">Payments</p>
        <p class="value">INR {{ payments.toLocaleString() }}</p>
      </div>
      <div class="card orange">
        <div class="icon"><img src="./Vector (1).png" alt="Users Icon" /></div>
        <p class="label">Users</p>
        <p class="value">{{ users }}</p>
      </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      students: 0,
      courses: 0,
      payments: 0,
      users: 0,
    };
  },
  methods: {
    logout() {
      this.$router.push('/');
    },
    goToStudents() {
      this.$router.push('/students');
    },
    goToPayments() {
      this.$router.push('/payments');
    },
    animateValue(property, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        this[property] = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
  },
  mounted() {
    this.animateValue('students', 0, 243, 1500);
    this.animateValue('courses', 0, 13, 1500);
    this.animateValue('payments', 0, 556000, 1500);
    this.animateValue('users', 0, 3, 1500);
  },
};
</script>



<style scoped>
body, html {
  margin: 0;
  font-family: Arial, sans-serif;
  height: 100vh;
}
.dashboard {
  display: flex;
  height: 100vh;
}

.sidebar {
  background: #f5f5f5;
  width: 200px;
  padding: 20px;
  text-align: center;
}

.accent {
  color: #facc15;
  margin-right: 5px;
}

.avatar {
  border-radius: 50%;
  width: 100px;
  margin: 20px 0 10px;
}

.role {
  color: orange;
  font-size: 14px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  text-align: left;
  cursor: pointer;
}

li.active, li:hover {
  background-color: #facc15;
  color: white;
  border-radius: 5px;
}

.logout {
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  background: none;
  border: 1px solid #ccc;
  cursor: pointer;
}

.main {
  flex: 1;
  background: white;
  padding: 30px;
  font-family: sans-serif;
}

.cards {
  display: flex;
  gap: 10px;
}

.card {
  flex: 1;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 150px;
}

.icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.label {
  font-size: 14px;
  margin: 0;
  opacity: 0.7;
}

.value {
  font-size: 22px;
  font-weight: bold;
  margin: 0;
}

.lightblue {
  background-color: #e0f2fe;
  color: black;
}

.pink {
  background-color: #fce7f3;
  color: black;
}

.lightyellow {
  background-color: #fef9c3;
  color: black;
}

.orange {
  background: linear-gradient(to right, #f59e0b, #fbbf24);
  color: white;
}

</style>
