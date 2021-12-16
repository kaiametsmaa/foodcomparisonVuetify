<template>
  <v-container
      class="align-center">

    <template>
      <h1 class="ma-5">
        Tere tulemast Ostukorvi võrdlusesse! </h1>
      <br>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Toote nimetus
            </th>
            <th class="text-center">
              Prisma hind
            </th>
            <th class="text-center">
              Selveri hind
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in userProducts"
              :key="item.ean"
          >
            <td>{{ item.name }}</td>
            <td class="text-center"> {{ item.prismaPrice }}</td>
            <td class="text-center"> {{ item.selverPrice }}</td>
            <v-btn
                class="pa-md-5 cyan lighten-3 flex-fill"
                @click="deleteOne(item.ean)">Eemalda
            </v-btn>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <th class="text-left text-h6">
              Kokku
            </th>
            <th v-if="prismaPrice < selverPrice" class="text-center text-h6 green--text">
              {{ prismaPrice }} €
            </th>
            <th v-if="prismaPrice > selverPrice" class="text-center text-h6 red--text">
              {{ prismaPrice }} €
            </th>
            <th v-if="prismaPrice == selverPrice" class="text-center text-h6">
              {{ prismaPrice }} €
            </th>
            <th v-if="prismaPrice > selverPrice" class="text-center text-h6 green--text">
                {{ selverPrice }} €
            </th>
            <th v-if="prismaPrice < selverPrice" class="text-center text-h6 red--text">
              {{ selverPrice }} €
            </th>
            <th v-if="prismaPrice == selverPrice" class="text-center text-h6">
              {{ selverPrice }} €
            </th>
          </tr>
          </tfoot>
        </template>
      </v-simple-table>
      <v-btn
          class="pa-md-5 cyan lighten-3 flex-fill"
          @click="deleteAll()">Tühjenda tabel
      </v-btn>
    </template>
    <br>
    <br>
    <br>
    <br>
  </v-container>
</template>
<script>

export default {
  data: function () {
    return {
      userProducts: [],
      prismaPrice: 0,
      selverPrice: 0,
    }
  },
  methods: {
    getUserPick: function () {
      this.$http.get('api/productController/getUserPick')
          .then(response => this.userProducts = response.data)
    },
    deleteOne: function (ean) {
      this.$http.delete('api/productController/deleteOne/' + ean).then(
          result => {
            this.sumPrismaPrice()
            this.sumSelverPrice()
            this.getUserPick()
          })
    },
    deleteAll: function () {
      this.$http.delete('api/productController/deleteAll')
      this.userProducts = []
      this.prismaPrice = 0
      this.selverPrice = 0

    },
    sumPrismaPrice: function () {
      this.$http.get('api/productController/sumPrismaPrice')
          .then(response => this.prismaPrice = response.data)
    },
    sumSelverPrice: function () {
      this.$http.get('api/productController/sumSelverPrice')
          .then(response => this.selverPrice = response.data)
    },
    cheaperPrice: function () {
      if(this.prismaPrice < this.selverPrice){
        this.prismaPrice
      }else{
        this.selverPrice
      }
    }
  },
  mounted() {
    this.getUserPick()
    this.sumPrismaPrice()
    this.sumSelverPrice()
  },
}
</script>