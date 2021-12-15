<template>
  <v-container
  >
    <h1 class="pa-4">Puu- ja köögiviljad: </h1>
    <template>
      <v-row>
        <v-col
            v-for="ean2 in 1"
            class="d-flex child-flex"
            cols="2">
          <v-card>
            <v-img
                :src="'https://www.selver.ee/img/450/440/resize/2/7/2701385000002.jpg'"
                aspect-ratio="1"
                class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center">
                  <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div>
              <v-card-title
                  class="cyan lighten-2 text-subtitle-2"
                  color="cyan"
                  text.color="white"
                  style="word-break: break-word">
                Pirn Conference, kg
                <v-spacer></v-spacer>
                <v-alert
                    v-model="alertVariable"
                    border="left"
                    close-text="Close Alert"
                    dismissible>
                  Lisatud ostukorvi
                </v-alert>
                <div>
                  <v-btn
                      v-if="!alertVariable"
                      icon
                      @click="alertVariable = !alertVariable">
                    <v-icon right>mdi-cart-arrow-down</v-icon>
                  </v-btn>
                </div>
              </v-card-title>

            </div>
          </v-card>
        </v-col>
<!--        <v-col-->
<!--            v-for="ean in 1"-->
<!--            :key="ean"-->
<!--            class="d-flex child-flex"-->
<!--            cols="2"-->
<!--        >-->
<!--          <v-card>-->
<!--            <v-img-->
<!--                :src="' https://www.selver.ee/img/450/440/resize/4/7/4742818010623.jpg'"-->

<!--                aspect-ratio="1"-->
<!--                class="grey lighten-2"-->
<!--            >-->
<!--              <template v-slot:placeholder>-->
<!--                <v-row-->
<!--                    class="fill-height ma-0"-->
<!--                    align="center"-->
<!--                    justify="center"-->
<!--                >-->
<!--                  <v-progress-circular-->
<!--                      indeterminate-->
<!--                      color="grey lighten-5"-->
<!--                  ></v-progress-circular>-->
<!--                </v-row>-->
<!--              </template>-->
<!--            </v-img>-->
<!--            <div>-->
<!--              <v-card-title-->
<!--                  class="cyan lighten-2 text-subtitle-2"-->
<!--                  color="cyan"-->
<!--                  text.color="white"-->
<!--                  style="word-break: break-word">-->
<!--                Mahe pirn, 500 g-->
<!--                <v-spacer></v-spacer>-->
<!--                <v-alert-->
<!--                    v-model="alertVariable1"-->
<!--                    border="left"-->
<!--                    close-text="Close Alert"-->
<!--                    dismissible>-->
<!--                  Lisatud ostukorvi-->
<!--                </v-alert>-->
<!--                <div>-->
<!--                  <v-btn-->
<!--                      v-if="!alertVariable1"-->
<!--                      icon-->
<!--                      @click="alertVariable1 = !alertVariable1">-->
<!--                    <v-icon right>mdi-cart-arrow-down</v-icon>-->
<!--                  </v-btn>-->
<!--                </div>-->
<!--              </v-card-title>-->
<!--            </div>-->
<!--          </v-card>-->
<!--        </v-col>-->
      </v-row>
    </template>
  </v-container>
</template>

<script>
import router from "../router";

export default {
  data: function () {
    return {
      alertVariable: false,
      alertVariable1: false,
      products: []
    }
  },
  // methods: {
  //   saveToList: function () {
  //   },
  //   getProductInfoByCategory: function () {
  //     this.$http.get('api/productController/productsByCategory?ourCategory=1')
  //   }
  //       .then(response => this.products = response.data)
  //
  // },
  // mounted() {
  //   this.getProductInfoByCategory(1)
  // },
}

</script>

<style scoped>

</style>