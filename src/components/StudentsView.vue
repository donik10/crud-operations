<template>
  <div class="container">
    <!-- SIDEBAR -->
    <div class="sidebar">
      <h2><span class="accent">|</span> CRUD OPERATIONS</h2>
      <img
        :src="avatarImage"
        alt="Profile"
        class="avatar"
      />
      <h3>Karthi Madesh</h3>
      <p class="role">Admin</p>
      <ul>
        <li @click="goToDashboard">🏠 Home</li>
        <li>📘 Course</li>
        <li class="active" @click="goToStudents">🎓 Students</li>
        <li @click="goToPayments">💰 Payment</li>
        <li>📊 Report</li>
        <li>⚙️ Settings</li>
      </ul>
      <button class="logout" @click="logout">Logout</button>
    </div>

    <!-- MAIN CONTENT -->
    <div class="main">
      <div class="header">
        <h2>Students List</h2>
        <button @click="addStudent">Add New Student</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Enroll Number</th>
            <th>Date of Admission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td>
              <img :src="student.avatar" class="avatar-small" />
              <input v-if="student.editing" v-model="student.name" />
              <span v-else>{{ student.name }}</span>
            </td>
            <td>
              <input v-if="student.editing" v-model="student.email" />
              <span v-else>{{ student.email }}</span>
            </td>
            <td>
              <input v-if="student.editing" v-model="student.phone" />
              <span v-else>{{ student.phone }}</span>
            </td>
            <td>
              <input v-if="student.editing" v-model="student.enrollNumber" />
              <span v-else>{{ student.enrollNumber }}</span>
            </td>
            <td>
              <input v-if="student.editing" v-model="student.date" />
              <span v-else>{{ student.date }}</span>
            </td>
            <td>
              <button v-if="student.editing" @click="saveStudent(index)">💾</button>
              <button v-else @click="editStudent(index)">✏️</button>
              <button @click="deleteStudent(index)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarImage:
        "data:image/jpeg;base64,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",
      students: [
        {
          name: "John Doe",
          email: "john@example.com",
          phone: "123456789",
          enrollNumber: "ENR001",
          date: "2023-09-01",
          avatar: "",
          editing: false
        },
        {
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "987654321",
          enrollNumber: "ENR002",
          date: "2023-09-02",
          avatar: "",
          editing: false
        }
      ]
    };
  },
  created() {
    this.students.forEach(student => (student.avatar = this.avatarImage));
  },
  methods: {
    goToDashboard() {
        this.$router.push("/dashboard");
    },
    goToPayments() {
        this.$router.push("/payments");
    },
    goToStudents() {
      this.$router.push("/students");
    },
    logout() {
      this.$router.push("/");
    },
    addStudent() {
      const newStudent = {
        name: "New Student",
        email: "new@student.com",
        phone: "000000000",
        enrollNumber: "ENRXXX",
        date: new Date().toISOString().slice(0, 10),
        avatar: this.avatarImage,
        editing: false
      };
      this.students.push(newStudent);
    },
    editStudent(index) {
      this.students[index].editing = true;
    },
    saveStudent(index) {
      this.students[index].editing = false;
    },
    deleteStudent(index) {
      if (confirm("Are you sure you want to delete this student?")) {
        this.students.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}

.sidebar {
  background: #f5f5f5;
  width: 200px;
  padding: 20px;
  text-align: center;
  height: 100vh
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

.avatar-small {
  width: 30px;
  border-radius: 50%;
  margin-right: 8px;
  vertical-align: middle;
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

li.active,
li:hover {
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
  padding: 20px;
  background: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px #ddd;
}

th,
td {
  padding: 12px;
  text-align: left;
}

th {
  background: #facc15;
  color: white;
}

td button {
  margin-right: 5px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
