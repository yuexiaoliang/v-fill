# v-fill

[简体中文](./README-zh.md)

`v-fill` is a custom directive for Vue designed to help developers quickly achieve the functionality of making page elements automatically fill the remaining screen height. It is especially suitable for creating full-screen layouts or components that need to fill the remaining space on the screen.

## Features

- **Automatic Calculation**: Automatically calculates and applies the required height to ensure elements fill the remaining space on the screen.
- **Flexible Configuration**: Supports configuration through modifiers and values to meet different layout needs.
- **Minimum Height Control**: Allows specifying a minimum height mode to ensure flexibility and responsiveness of the layout.

## Installation

Install `v-fill` using npm:

```sh
npm install v-fill --save
```

## Usage

First, you need to register the `v-fill` directive in your Vue application.

```js
import { createApp } from 'vue';
import VFill from 'v-fill';
import App from './app.vue';

const app = createApp(App);
app.use(vFill);

app.mount('#app');
```

Then, you can use the `v-fill` directive in any Vue component to make an element fill the screen's height.

```html
<template>
  <!-- This element will fill the remaining height of the screen, subtracting 60px -->
  <div v-fill.subtract="60"></div>
</template>

<template>
  <!-- This element will fill the remaining height of the screen, adding 60px -->
  <div v-fill.add="60"></div>
</template>
```

## Directive Modifiers

- `add`: Specifies a value to be added to the calculated fill height.
- `subtract`: Specifies a value to be subtracted from the calculated fill height, to account for space taken up by headers, footers, or other fixed elements.
- `isMinHeight`: Sets as a minimum height instead of an absolute height.

## Example

Suppose you have a page layout that includes a footer, and you want the main content area to fill the remaining space.

```html
<template>
  <header>...</header>

  <main v-fill.subtract.isMinHeight="100"></main>

  <footer style="height: 100px;"></footer>
</template>
```

In this example, the distance of the `main` from the top is automatically calculated, while manually subtracting the height of the `footer` to ensure both `main` and `footer` are displayed on the screen, and the minimum height of `main` is to fill the remaining space.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
