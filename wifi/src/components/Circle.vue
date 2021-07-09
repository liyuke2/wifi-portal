<template>
    <div class="circel-root">
        <svg focusable="false" viewBox="0 0 120 120" class="circle-pross">
            <circle fill="transparent" stroke="#0F5DFB" stroke-width="10" stroke-dasharray="0 314" cx="60" cy="60" r="50"></circle>
        </svg>
    </div>
</template>
<style scoped>
.circel-root{
    position: relative;
}
.circle-pross{
  width: 100%;
  height: 100%;
  animation: circle-pross2 1.5s linear 0s infinite;
}
.circle-pross circle{
  stroke-dasharray: 0,44, 210;
  animation: circle-pross1 1.5s ease 0s infinite;
}
@keyframes circle-pross1 {
  0% {stroke-dasharray: 0, 0, 0, 314;}
  50% {stroke-dasharray: 0, 44, 270, 0;}
  100% {stroke-dasharray: 0, 314, 0, 0;}
}
@keyframes circle-pross2 {
  0% {transform: rotateZ(-45deg);}
  100% {transform: rotateZ(315deg);}
}

</style>