<template lang="html">
  <div class="">
    <strong>striped table for {{brand}}</strong>
    <table>
      <thead>
        <tr>
          <td v-for="(header, index) in headers" :key="index"><strong>{{header}}</strong></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(cell, index) in row" :key="index">{{cell}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
