<template>
  <div
      id="app"
      class="container flex flex-col px-4 lg:px-0 lg:w-2/3 h-screen mx-auto"
  >
    <nav class="flex items-center justify-between my-4">
      <router-link to="/">
        <div class="flex items-start space-x-3">
          <img class="w-16 mt-3 rounded-lg"
               src="@/assets/logo.png" alt="">
          <div>
            <h1 class="text-4xl tracking-wide">Vivaldi</h1>
            <span>Open-source ear training app for musicians</span>
          </div>

        </div>
      </router-link>

      <div class="hidden lg:block">
        <h1 class="text-xl tracking-wide text-right">v0.1.0</h1>
        <span>Pre-alpha</span>
      </div>

    </nav>
    <router-view class="lg:h-full flex-grow"/>
    <footer class="flex items-center justify-between h-10 mt-auto">
      <span>From musicians ❤️ musicians</span>
      <div class="flex flex-row space-x-2 divide-x-2">
        <a class="text-center" href="https://gitlab.com/baris/vivaldi">Source Code</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

body {
  @apply antialiased bg-gradient-to-r from-gray-100 to-gray-200;
  font-family: "Playfair Display", serif;
}

.blur {
  filter: blur(7px);
}

kbd {
  background-color: #eee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset;
  color: #333;
  display: inline-block;
  font-size: .85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}

.btn {
  @apply p-2 text-white rounded-t;
  &.btn-blue {
    @apply bg-blue-400 border-b-4 border-l-2 border-blue-500 shadow;
    &:hover {
      @apply bg-blue-500 border-blue-400;
    }
  }
}
</style>
