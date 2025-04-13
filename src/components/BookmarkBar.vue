<script setup lang="ts">
import PostList from './PostList.vue';
</script>

<template>
  <div class="container-post">
    <div class="header-image">
      <div class="card">
        <div class="avatar-container">
        </div>
        <div class="details">
          <div>
            <h2>Buscar</h2>
            <h4>@danzinho</h4>
          </div>
          <div class="stats">
            <div>
              <h2>11</h2>
              <h4>seguindo</h4>
            </div>
            <div>
              <h2>15</h2>
              <h4>seguidores</h4>
            </div>
          </div>
          <div>
            <!-- <img src="../assets/user-add.png" class="icon-action" /> -->
            <!-- <img src="../assets/user-trust.png" class="icon-action" /> -->
            <img src="../assets/user-pen.png" class="icon-action" />
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
    <div>
      <PostList />
    </div>

  </div>

</template>

<style scoped>
.icon-action {
  height: 25px;
  width: 25px;
  transition: transform 0.1s ease-in-out;
  cursor: pointer;

}

.icon-action:hover {
  transform: scale(1.5);
}



.header-image {
  height: 150px;
  background-color: var(--green-sage);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  padding: 20px;
}

.card {
  align-items: center;
  display: flex;
  gap: 20px;
  line-height: 20px;
  width: 100%;

}

.details {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

}

.stats {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  text-align: center;

}

.avatar-image {
  height: 100px;
  width: 100px;
  object-fit: cover;
  /* Ensures the image fills the circle */
  border-radius: 50%;
}

h4 {
  font-weight: 300;
  font-size: 14px;
}
</style>
