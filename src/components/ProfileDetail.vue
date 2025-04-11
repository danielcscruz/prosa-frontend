<script setup lang="ts">
import PostList from './PostList.vue';
</script>

<template>
  <div class="container-post">

    <div class="header">
      <h3>PROFILEEEE</h3>
      <div class="post-area">
        <textarea placeholder="Digite aqui..."></textarea>
        <div class="btn-group">
          <button> Prosear</button>
          <span>0/140</span>
        </div>
      </div>
    </div>
    <div>
      <PostList />
    </div>

  </div>

</template>

<style scoped>
.container-post {
  display: block;
  padding: 8px 16px;
}

.header {
  max-width: 100%;
  margin: 8px 8px;
}

.header h3 {
  font-family: Inter;
  font-weight: 800;
  color: #4E2E10;
  font-size: 24px;
}

.post-area {
  margin-top: 8px;
  border: 1px solid var(--beige-background);
  background-color: var(--light-cream);
  border-radius: 8px;
  width: 100%;
  height: 70px;
  position: relative;
}

.btn-group {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6px;
  right: 8px;
}

button {
  background-color: var(--green-sage);
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  color: var(--light-cream);

}

button:hover {
  background-color: var(--capivara);
}

span {
  font-family: inter;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
}

textarea {
  background-color: transparent;
  padding: 4px;
  border: none;
  height: 100%;
  width: 80%;
  font-size: 16px;
  font-weight: 200;
  resize: none;
  align-items: center;
  outline: none;

}

textarea:hover {
  border: none;
}

textarea:focus:hover {
  border: none;
}
</style>
