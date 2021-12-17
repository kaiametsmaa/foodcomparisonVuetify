<template>
  <v-container>
    <v-card class="cyan lighten-3">
      <h1 class="text-left pa-4">Külmutatud toidukaubad:</h1>
      <div class="text-right text-h5">
        <input class="text-h6 "v-model="search" placeholder="Otsi toodet" v-on:keyup.enter="getProductInfoByCategory">
        <v-btn icon
               x-large
               @click="getProductInfoByCategory">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
    </v-card>
    <br>
    <template>
      <div class="text-center">
        <v-pagination
            v-model="page"
            :length="count"
            @input="getProductInfoByCategory"
        ></v-pagination>
      </div>
    </template>
    <br>
    <template>
      <v-row>
        <v-col
            v-for="product in products"
            class="d-flex child-flex"
            cols="2">
          <v-card hover height="100%"
                  class="cyan lighten-3">
            <v-img
                :src="product.image"
                aspect-ratio="1"
                class="white">
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

            <v-card-text
                class="cyan lighten-3 text-subtitle-2"
                text.color="white"
                style="word-break: break-word">
              {{ product.name }}
            </v-card-text>
            <br>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-alert
                  v-model="product.alertVariable"
                  border="left"
                  close-text="Close Alert"
                  dismissible>
                Lisatud ostukorvi
              </v-alert>
              <div class="ma-1" style="position: absolute; bottom: 0;">
                <v-btn
                    v-if="!product.alertVariable"
                    icon
                    large
                    @click="userPick(product)"
                >
                  <v-icon right>mdi-cart-arrow-down</v-icon>
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </template>
    <br>
    <template>
      <div class="text-center">
        <v-pagination
            v-model="page"
            :length="count"
            @input="getProductInfoByCategory"
        ></v-pagination>
      </div>
    </template>
    <br>
    <br>
  </v-container>
</template>

<script>


export default {
  data: function () {
    return {
      alertVariable: false,
      products: [],
      page: 1,
      search: '',
      count: 0,
    }
  },
  methods: {

    getProductInfoByCategory: function () {
      this.getPageCount()
      this.$http.get('api/productController/productsByCategory',
          {
            params: {
              ourCategory: 11,
              page: this.page,
              search: this.search,
            }
          })
          .then(response => this.products = response.data)
    },
    getPageCount: function () {
      this.$http.get('api/productController/getPageCount/11',
          {
            params: {
              search: this.search,
            }
          })
          .then(response => this.count = response.data)
    },
    userPick: function (product) {
      let body = {
        ean: product.ean
      }
      this.$http.post('api/productController/userPick', body)
      product.alertVariable = !product.alertVariable
    },
  },
  // "
  mounted() {
    this.getProductInfoByCategory()
  },
}

</script>

<style scoped>

</style>