<template>
  <button type="button" class="create-button">
    <span class="create-button__text"><slot></slot></span>
    <span class="create-button__icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke="currentColor"
        height="24"
        fill="none"
        class="svg">
        <line y2="19" y1="5" x2="12" x1="12"></line>
        <line y2="12" y1="12" x2="19" x1="5"></line></svg
    ></span>
  </button>
</template>

<script setup></script>

<style scoped>
.create-button {
  position: relative;
  width: 100%;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.7vw 0 1vw;
  border: 1px solid #34974d;
  border-radius: 10px;
  background-color: #3aa856;
}

.create-button,
.create-button__icon,
.create-button__text {
  transition: all 0.3s;
}

.create-button .create-button__text {
  color: #fff;
  font-weight: 600;
}

.create-button .create-button__icon {
  height: 100%;
  width: 39px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.create-button .svg {
  width: 30px;
  stroke: #fff;
}

.create-button:hover {
  background: #34974d;
}

.create-button:hover .create-button__text {
  color: transparent;
}

.create-button:hover .create-button__icon {
  width: 45%;
  transform: translateX(-50%);
}

.create-button:active {
  background-color:#28793d;
}
</style>
