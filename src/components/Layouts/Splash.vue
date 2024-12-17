<template>
  <div class="splash-screen">
    <div class="grid grid-rows-2 gap-4 justify-center">
      <img src="../../assets/logo-white.png" class="animated-logo" />
      <div class="loading flex justify-center">
        <div class="obj"></div>
        <div class="obj"></div>
        <div class="obj"></div>
        <div class="obj"></div>
        <div class="obj"></div>
        <div class="obj"></div>
        <div class="obj"></div>
        <div class="obj"></div>
      </div>
    </div>
    <!-- <div class="logo-container">
      
    </div> -->
  </div>
</template>
<script>
export default {
  name: "SplashScreen",
  methods: {
    AnimationSplash() {
      const splash = document.querySelector(".splash-screen");
      const mainContent = document.querySelector(".main-content");

      setTimeout(() => {
        splash.style.display = "none"; // Remove splash screen
        mainContent.classList.add("visible"); // Show main content
      }, 3000); // 2s delay + 1s animation duration
    },
  },
  mounted() {
    this.AnimationSplash();
  },
};
</script>
<style>
/* General reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Splash screen styles */
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0d2959;
  /* Splash screen background color */
  color: #fff;
  /* Text color */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background-image: url("../../assets/bg-fix.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  /* Ensure it's above all other elements */
  animation: slideIn 1s ease-out forwards;
  /* Trigger the slide-up animation */
  animation-delay: 1s;
  /* Display splash screen for 2 seconds */
}

/* Animation for sliding up */
@keyframes slideIn {
  0% {
    transform: translateY(0);
    opacity: 1; /* Fully transparent */
  }

  100% {
    transform: translateY(-100%);
    opacity: 0; /* Fully visible */

  }
  
}

/* Show the main content after the splash screen */
.main-content.visible {
  display: block;
}

/* Logo animation styles */
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
}

.animated-logo {
  width: 150px;
  position: relative;
}

.loading {
  /* position: absolute; */
  /* top: 100%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  height: 50px;
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
}

.obj {
  width: 6px;
  height: 0px;
  background: #17a2b8;
  margin: 0 3px;
  border-radius: 10px;
  animation: loading 1.2s infinite;
}

.obj:nth-child(2) {
  animation-delay: 0.15s;
}
.obj:nth-child(3) {
  animation-delay: 0.3s;
}
.obj:nth-child(4) {
  animation-delay: 0.45s;
}
.obj:nth-child(5) {
  animation-delay: 0.6s;
}
.obj:nth-child(6) {
  animation-delay: 0.75s;
}
.obj:nth-child(7) {
  animation-delay: 0.9s;
}
.obj:nth-child(8) {
  animation-delay: 1.05s;
}

@keyframes loading {
  0% {
    height: 0;
  }
  50% {
    height: 50px;
  }
  100% {
    height: 0;
  }
}
</style>
