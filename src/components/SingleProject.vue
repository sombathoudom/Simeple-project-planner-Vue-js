<template>
  <div class="project">
    <div class="actions">
      <h3 @click="showDescription = !showDescription">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons"> edit </span>
        <span class="material-icons" @click="deleteProject"> delete </span
        ><span class="material-icons"> done </span>
      </div>
    </div>
    <div v-if="showDescription" class="description">
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["project"],
  data() {
    return {
      showDescription: false,
      url: "http://localhost:3000/projects" + this.project.id, //it's from props
    };
  },
  methods: {
    deleteProject() {
      fetch(this.url, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.error(err));
    },
  },
};
</script>
<style scoped>
.project {
  margin: 20px auto;
  background-color: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.actions .icons span {
  margin: 4px 0px;
  color: rgb(158, 155, 155);
  cursor: pointer;
}
.actions span:hover {
  color: rgb(92, 89, 89);
}
</style>
