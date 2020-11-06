<template>
  <div
    id="app"
    class="container mx-auto flex flex-col h-screen justify-between w-2/3"
  >
    <nav class="flex flex-col items-center justify-center my-4">
      <h1 class="text-4xl tracking-wide">Vivaldi</h1>
      <span>Open-source ear training app for musicians</span>
    </nav>
    <router-view class="mb-auto h-full" />
    <footer class="mt-auto mb-auto mt-10 h-10 flex justify-between">
      <span>From musicians ❤️ musicians</span>
      <a href="https://gitlab.com/baris/vivaldi">Gitlab</a>
    </footer>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
body {
  @apply bg-gray-100 antialiased;
  font-family: "Playfair Display", serif;
}

.btn {
  @apply rounded-t p-2 text-white;
  &.btn-blue {
    @apply bg-blue-400 border-b-4 border-l-2 shadow border-blue-500;
    &:hover {
      @apply bg-blue-500 border-blue-400;
    }
  }
}
</style>
