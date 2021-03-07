<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex flex-col items-center justify-center min-h-screen pt-4 px-4">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75" /></div>
      <div class="rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-11/12 md:w-2/5" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
