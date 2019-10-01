<template>
  <div>
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
      <h1>{{ now }} in {{ tzLabel }}</h1>
      <div>
        <select v-model="tzLabel" @change="zoneUpdate">
          <option v-for="tzLabel in tzLabels" :key="tzLabel.key">{{ tzLabel }}</option>
        </select>
      </div>
    </div>
  </div>
</template>


<script src="./clock.js"></script>
<style lang="css" scoped src="./clock.css" />
