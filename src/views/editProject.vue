<template>
  <form @submit.prevent="handleUpdate">
    <label for="">Add Title</label>
    <input type="text" required v-model="title" />
    <label for="">Add Description</label>
    <textarea required v-model="description" rows="10" cols="20"></textarea>
    <div class="check-complete">
      <label for="">Status</label>
      <input type="checkbox" v-model="complete" rows="10" cols="20" />
    </div>
    <div class="button-action">
      <button>Update Project</button>
      <button class="btn-danger" :to="{ name: '/' }">Cancel Project</button>
    </div>
  </form>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      description: "",
      complete: "",
      url: "  http://localhost:3000/projects/" + this.id, //id is a props
    };
  },
  mounted() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.description = data.description;
        this.complete = data.completed;
      });
  },
  methods: {
    handleUpdate() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          completed: this.complete,
        }),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>
<style>
button {
  cursor: pointer;
}
.check-complete {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check-complete input {
  width: 22px;
  height: 50px;
}
.button-action {
  display: flex;
}
.button-action .btn-danger {
  background-color: red;
  color: white;
}
</style>
