<template>
  <div class="home">
      <BotCard v-for="bot in botData" :key="bot.id" :data=bot />
  </div>
</template>

<script>
// @ is an alias to /src
import BotCard from '@/components/BotCard.vue'
import firebase from "../db";

const db = firebase.collection("bots");

export default {
  data() {
    return {
      botData: [],
    }
  },
  name: 'Home',
  components: {
    BotCard
  },
  methods: {
    remove_all_bots() {
      const cards = document.querySelectorAll('#card');
      cards.forEach(card => {
        card.remove();
      });
    },
    readBots() {
      this.botData = []
      db
      .onSnapshot((querySnapshot) => {
        this.remove_all_bots()
          querySnapshot.forEach((doc) => {
            this.botData.push(
              doc.data()
            );
          });
          return this.botData
        })
    }
  },
  beforeMount(){
    this.readBots()
 },
}
</script>
<style scoped>
  .home {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
  }
</style>
