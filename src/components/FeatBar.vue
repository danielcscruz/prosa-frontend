<script setup lang="ts">
</script>

<template>
  <div class="container-feats">
    <div class="feat-box">
      <h2>Posts mais curtidos</h2>
      <ul>
        <li>
          <div class="card-post-list">
            <h3>Lorem ipsum dolor sit ame...</h3>
            <h4>@danzinho</h4>
            <h5>100 curtidas</h5>
          </div>
        </li>
        <li>
          <div class="card-post-list">
            <h3>Lorem ipsum dolor sit ame...</h3>
            <h4>@danzinho</h4>
            <h5>100 curtidas</h5>
          </div>
        </li>
        <li>
          <div class="card-post-list">
            <h3>Lorem ipsum dolor sit ame...</h3>
            <h4>@danzinho</h4>
            <h5>100 curtidas</h5>
          </div>
        </li>
      </ul>
    </div>

    <div class="feat-box">
      <h2>Quem Seguir</h2>
      <ul>
        <li>
          <div class="card-add-list">
            <div class="profile-feat">
              <img src="@/assets/avatar.png" alt="user" class="avatar-feat" />
              <div class="user-group">
                <h3>Lorem Ipsum </h3>
                <h4>@Lorinho</h4>
              </div>
            </div>
            <div class="add-circle">
              <img src="@/assets/user-add.png" alt="" class="add-feat" />
            </div>
          </div>
        </li>
        <li>
          <div class="card-add-list">
            <div class="profile-feat">
              <img src="@/assets/avatar.png" alt="user" class="avatar-feat" />
              <div class="user-group">
                <h3>Lorem Ipsum </h3>
                <h4>@Lorinho</h4>
              </div>
            </div>
            <div class="add-circle">
              <img src="@/assets/user-add.png" alt="" class="add-feat" />
            </div>
          </div>
        </li>
        <li>
          <div class="card-add-list">
            <div class="profile-feat">
              <img src="@/assets/avatar.png" alt="user" class="avatar-feat" />
              <div class="user-group">
                <h3>Lorem Ipsum </h3>
                <h4>@Lorinho</h4>
              </div>
            </div>
            <div class="add-circle">
              <img src="@/assets/user-add.png" alt="" class="add-feat" />
            </div>
          </div>
        </li>


      </ul>
    </div>
  </div>

</template>

<style scoped>
.card-add-list {
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 10px;

}

.profile-feat {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 8px;
}

.profile-feat:hover {
  background-color: var(--green-moss);

}

.avatar-feat {
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.user-group {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 18px;
  gap: 4px;
}

.user-group h3 {
  font-size: 16px;
}

.user-group h4 {
  font-size: 12px;
}

.add-circle {
  border-radius: 30%;
  height: 40px;
  width: 40px;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

}

.add-circle:hover {
  transform: scale(1.5);
}

.add-feat {
  height: 20px;
  width: 20px;


}



.container-feats {
  display: block;
  padding: 20px 8px;
}

.feat-box {
  width: 90%;
  background-color: var(--green-sage);
  border-radius: 16px;
  padding: 16px;
  margin-top: 20px;
}

.card-post-list {
  padding-left: 4px;
  border-radius: 8px;
  cursor: pointer;
  padding-top: 8px;
}

.card-post-list:hover {
  background-color: var(--green-moss);

}

/* li:not(:first-child):not(:last-child) {

  border-bottom: 1px solid var(--green-moss);
  border-top: 1px solid var(--green-moss);
} */

.feat-box h2 {
  font-size: 20px;
}

.feat-box h3 {
  font-size: 18px;
  font-weight: 500;
}

.feat-box h4 {
  font-weight: 100;
  line-height: 6px;
}

.feat-box h5 {
  margin-top: 6px;
  margin-bottom: 4px;

}
</style>
