<template>
  <div class="container">
    <h2>Img Generator Project</h2>
    <div class="form-container">
      <section class="form-box">
        <label><i class="fa-regular fa-keyboard"></i> user_input</label>
        <textarea v-model="user_input" type="text" required />
        <button
          @click.prevent="getImg"
          class="btn"
          :class="{ isSaving: isSaving }"
          :disabled="isLoading"
        >
          <span class="text-content">
            <span v-if="!isSaving">Generate!</span>
            <span v-else>Generating<span class="loading-dot">.</span></span>
          </span>
        </button>
      </section>
      <section class="form-box">
        <label><i class="fa-regular fa-image"></i> Img Display</label>
        <div class="img-display">
          <div class="style-select">
            <div v-for="(url, index) in imgList" :key="index">
              <div
                :style="{ backgroundImage: 'url(' + url + ')' }"
                class="style-sample"
              >
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const isSaving = ref(false);
const user_input = ref("");
const imgList = ref([]);

const getImg = async () => {
  isSaving.value = true;
  try {
    const { data } = await axios.get("54.199.16.160/generator-back/endpoint.php", {
      params: { user_input: user_input.value },
    });

    if (data) {
      imgList.value = data.data.img_list;
    }
  } catch (error) {
    console.error(error);
  } finally {
    isSaving.value = false;
  }
};
</script>

<style scoped>
.container {
  justify-content: center;
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  padding: 100px;
  align-items: center;
}

.form-container {
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 20px;
  width: 100%;
}

.form-box {
  width: 100%;
}

label,
input,
textarea {
  width: 100%;
  border-radius: 5px;
  outline: none;
}

label {
  font-weight: 700;
}

textarea {
  height: 60px;
  border: 1px solid darkgray;
}

input {
  border: 1px solid darkgray;
}

button:focus,
input:focus {
  outline: none;
}

.btn {
  background-color: #05bfbf;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
  display: block;
  border: none;
}

.btn:hover {
  transform: scale(1.1);
}

.btn.isSaving::after {
  content: ".";
  animation: loading 0.5s infinite;
  display: inline-block;
  width: 1em;
  text-align: left;
}

@keyframes loading {
  0% {
    content: "";
  }
  33% {
    content: ".";
  }
  67% {
    content: "..";
  }
}

.img-display {
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;
  border: 1px solid darkgray;
  border-radius: 5px;
}

.style-select {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.style-sample {
  top: 0;
  left: 0;
  width: 230px;
  height: 230px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
  transform-origin: center;
}
</style>
