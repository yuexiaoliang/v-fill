# v-fill

[English](./README.md)

`v-fill` 是一个 Vue 自定义指令，旨在帮助开发者快速实现让页面元素自动撑满屏幕剩余高度的功能。它特别适用于创建全屏布局或需要填充屏幕剩余空间的组件。

## 特性

- **自动计算**：自动计算并应用所需的高度，以确保元素填满屏幕的剩余空间。
- **灵活配置**：支持通过修饰符和值进行配置，以满足不同的布局需求。
- **最小高度控制**：可以指定最小高度模式，确保布局的灵活性和响应性。

## 安装

使用 npm 安装 `v-fill`:

```sh
npm install v-fill --save
```

## 使用方法

首先，你需要在你的 Vue 应用中注册 `v-fill` 指令。

```js
import { createApp } from 'vue';
import VFill from 'v-fill';
import App from './app.vue';

const app = createApp(App);
app.use(vFill);

app.mount('#app');
```

然后，你可以在任何 Vue 组件中，使用 `v-fill` 指令来使元素撑满屏幕的高度。

```html
<template>
  <!-- 这个元素将会撑满屏幕的剩余高度，同时减去60px -->
  <div v-fill.subtract="60"></div>
</template>

<template>
  <!-- 这个元素将会撑满屏幕的剩余高度，同时增加60px -->
  <div v-fill.add="60"></div>
</template>
```

## 指令修饰符

- `add`：指定一个值，该值将从计算的填充高度中增加。
- `subtract`：指定一个值，该值将从计算的填充高度中减去，用于考虑页眉、页脚或其他固定元素的空间。
- `isMinHeight`：设置为最小高度而不是绝对高度。

## 示例

假设你有一个页面布局，其中包含一个页脚，你希望中间的内容区域撑满剩余空间。

```html
<template>
  <header>...</header>

  <main v-fill.subtract.isMinHeight="100"></main>

  <footer style="height: 100px;"></footer>
</template>
```

在这个例子中，`main` 距离顶部的距离是自动计算的，同时手动减去了 `footer` 的高度，以确保 `main` 和 `footer` 都显示在屏幕中，并且 `main` 的最小高度是撑满剩余空间的。

## 许可证

该项目遵循 MIT 许可证。详情请见 `LICENSE` 文件。
