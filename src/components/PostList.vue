<script setup lang="ts">
</script>

<template>
  <ul>
    <li>
      <div class="card">
        <div class="avatar-section">
          <img src="@/assets/avatar.png" class="avatar-img" alt="like" />
        </div>
        <div class="content">
          <div class="title">
            <h3>Daniel Cruz</h3>
            <h4>@danzinho</h4>
          </div>
          <div class="post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            Cras venenatis euismod.
          </div>
          <div class="actions">
            <img src="@/assets/heart-green.png" class="icon-post" alt="like" />
            <img src="@/assets/refresh-green.png" class="icon-post" alt="repost" />
            <img src="@/assets/bookmark-green.png" class="icon-post" alt="bookmark" />
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="card">
        <div class="avatar-section">
          <img src="@/assets/avatar.png" class="avatar-img" alt="like" />
        </div>
        <div class="content">
          <div class="title">
            <h3>Daniel Cruz</h3>
            <h4>@danzinho</h4>
          </div>
          <div class="post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            Cras venenatis euismod.
          </div>
          <div class="actions">
            <img src="@/assets/heart-green.png" class="icon-post" alt="like" />
            <img src="@/assets/refresh-green.png" class="icon-post" alt="repost" />
            <img src="@/assets/bookmark-green.png" class="icon-post" alt="bookmark" />
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="card">
        <div class="avatar-section">
          <img src="@/assets/avatar.png" class="avatar-img" alt="like" />
        </div>
        <div class="content">
          <div class="title">
            <h3>Daniel Cruz</h3>
            <h4>@danzinho</h4>
          </div>
          <div class="post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            Cras venenatis euismod.
          </div>
          <div class="actions">
            <img src="@/assets/heart-green.png" class="icon-post" alt="like" />
            <img src="@/assets/refresh-green.png" class="icon-post" alt="repost" />
            <img src="@/assets/bookmark-green.png" class="icon-post" alt="bookmark" />
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="card">
        <div class="avatar-section">
          <img src="@/assets/avatar.png" class="avatar-img" alt="like" />
        </div>
        <div class="content">
          <div class="title">
            <h3>Daniel Cruz</h3>
            <h4>@danzinho</h4>
          </div>
          <div class="post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            Cras venenatis euismod.
          </div>
          <div class="actions">
            <img src="@/assets/heart-green.png" class="icon-post" alt="like" />
            <img src="@/assets/refresh-green.png" class="icon-post" alt="repost" />
            <img src="@/assets/bookmark-green.png" class="icon-post" alt="bookmark" />
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="card">
        <div class="avatar-section">
          <img src="@/assets/avatar.png" class="avatar-img" alt="like" />
        </div>
        <div class="content">
          <div class="title">
            <h3>Daniel Cruz</h3>
            <h4>@danzinho</h4>
          </div>
          <div class="post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            Cras venenatis euismod.
          </div>
          <div class="actions">
            <img src="@/assets/heart-green.png" class="icon-post" alt="like" />
            <img src="@/assets/refresh-green.png" class="icon-post" alt="repost" />
            <img src="@/assets/bookmark-green.png" class="icon-post" alt="bookmark" />
          </div>
        </div>
      </div>
    </li>



  </ul>
</template>

<style scoped>
.card {
  margin-top: 8px;
  border-bottom: 1px solid var(--beige-background);
  padding-bottom: 8px;
  padding-right: 8px;
  display: flex;
}

ul {
  max-height: 500px;
  /* Set a fixed height */
  overflow-y: auto;
}

.avatar-img {
  margin: 8px 16px;
  height: 70px;
  width: 70px;
  object-fit: cover;
  /* Ensures the image fills the circle */
  border-radius: 50%;
}

.title {
  display: flex;
  align-items: center;
  /* Align text vertically */
  gap: 4px;
}

.title h3 {
  font-size: 18px;
  font-weight: 700;
}

.title h4 {
  font-size: 14px;
  color: var(--green-sage);
  font-weight: 400;

}

.post {
  padding-bottom: 8px;
}

.actions {
  padding-top: 8px;
  display: inline;
}

.icon-post {
  height: 15px;
  width: 15px;
  margin-right: 80px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  /* Animação suave */

}

.icon-post:hover {
  transform: scale(1.5);
  /* Aumenta 20% */

}
</style>
