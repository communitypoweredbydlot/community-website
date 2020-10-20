<template>
  <svg
    class="fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
  >
    <path :d="$slots.default[0].text.trim()" />
  </svg>
</template>
