<template>
  <form @submit.prevent="handleSubmit">
    <label for="">Add Title</label>
    <input type="text" required v-model="title" />
    <label for="">Add Description</label>
    <textarea required v-model="description"></textarea>
    <button>Add Project</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        description: this.description,
        completed: false,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
<style>
form {
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 20px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0px 10px 0px;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  padding: 10px;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
}
textarea:focus,
input:focus {
  outline: none;
}
form button {
  display: block;
  margin: 20px auto 0;
  background-color: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
