<template>
  <div id="clock">
    <div class="container">
      <div class="inner">
        <div class="onesandtwo">
          <div class="box two" id="b2" :style="{ 'background-color': b2['background-color'] }" ></div>
          <div class="ones">
            <div class="box one" id="b1t" :style="{ 'background-color': b1t['background-color'] }"></div>
            <div class="box one" id="b1b" :style="{ 'background-color': b1b['background-color'] }"></div>
          </div>
        </div>
          <div class="box" id="b3" :style="{ 'background-color': b3['background-color'] }"></div>
      </div>
      <div class="box" id="b5" :style="{ 'background-color': b5['background-color'] }"></div>
    </div>
    <div class="center">
      <h1>{{ now }}</h1>
      <select class="zone" v-model="zone">
        <option value="">Select A Different Time Zone</option>
        <option value="America/Los_Angeles">America/Los_Angeles</option>
        <option value="America/Chicago">America/Chicago</option>
      </select>
    </div>
  </div>
</template>


<script src="./clock.js"></script>
<style lang="css" scoped src="./clock.css" />
