<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="black-bg" v-if="isOpenModal == true">
    <div class="white-bg">
      <h4>Detail Page</h4>
      <p>text</p>
      <!-- <p @click="openModal()">[닫기]</p> -->
      <button @click="openModal()">닫기</button>
    </div>
  </div>

  <header>
    <div class="menu">
      <a v-for="menu in menuNames" :key="menu">{{ menu }}</a>
      <!-- <a>Home</a>
      <a>Products</a>
      <a>About</a> -->
    </div>
  </header>
  <body>
    <div v-for="(a, i) in roomData" :key="a">
      <img :src="a[i].image" class="room-img" alt="i" />
      <h4>{{ a[i].title }}</h4>
      <p>{{ a[i].price.toLocaleString() }}만 원</p>
      <button @click="increase(i)">허위매물 신고</button>
      <span>신고수: {{ reportNum[i] }}</span>
    </div>

    <div>
      <div @click="openModal()">
        <img :src="roomData[0].image" class="room-img" alt="-" />
        <h4 class="product">{{ roomData[0].title }}</h4>
        <p class="price">{{ roomData[0].price.toLocaleString() }} 원</p>
      </div>
      <!-- toLocaleString: 그냥 한번 찾아서 넣어봄 -->
      <!-- <button @click="reportNum[0]++">허위매물 신고</button> -->
      <div>
        <button @click="increase(0)">허위매물 신고</button>
        <p>신고수: {{ reportNum[0] }}</p>
      </div>
    </div>

    <div>
      <div @click="openModal()">
        <img :src="roomData[1].image" class="room-img" />
        <h4 class="product">{{ roomData[1].title }}</h4>
        <p class="price">{{ roomData[1].price.toLocaleString() }} 원</p>
        <!-- <button @click="reportNum[1]++">허위매물 신고</button> -->
      </div>
      <div>
        <button @click="increase(1)">허위매물 신고</button>
        <p>신고수: {{ reportNum[1] }}</p>
      </div>
    </div>

    <div>
      <div @click="openModal()">
        <img :src="roomData[2].image" class="room-img" />
        <h4 class="product">{{ roomData[2].title }}</h4>
        <p class="price">{{ roomData[2].price.toLocaleString() }} 원</p>
      </div>
      <div>
        <button @click="reportNum[2]++">허위매물 신고</button>
        <p>신고수: {{ reportNum[2] }}</p>
      </div>
    </div>
  </body>
</template>

<script>
import roomData from './stores/roomData';

export default {
  data() {
    return {
      roomData: roomData,
      menuNames: ['Home', 'Shop', 'About'],
      menuPrices: ['60', '70', '80'],
      imageSets: [
        './assets/images/room0.jpg',
        './assets/images/room1.jpg',
        './assets/images/room2.jpg',
      ],
      products: ['한강원룸', '강남원룸', '강동원룸'],
      reportNum: [0, 0, 0],
      isOpenModal: false,
      price1: 60,
      price2: 70,
      price3: 80,
      nameStyle: 'color: blue',
      // reportNum: 0,
    };
  },
  methods: {
    increase(i) {
      this.reportNum[i]++;
    },
    openModal() {
      if (this.isOpenModal == true) {
        this.isOpenModal = false;
      } else if (this.isOpenModal == false) {
        this.isOpenModal = true;
      } else {
        print('ERROR');
      }
    },
  },
  // 실시간 렌더링도 가능(지원)
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
/* .menu :hover {
    background-color: yellow;
    color: red;
  } */
.product {
  font-weight: bold;
}

.price {
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

@media screen and (orientation: portrait) {
  header {
    text-align: center;
  }
  body {
    text-align: center;
  }
  p {
    padding-bottom: 10px;
  }
}
</style>
