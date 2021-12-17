<template>
  <v-container>
    <h1 class="pa-4"> Toodete kategooriad: </h1>
    <br>

    <v-row>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'https://toitumine.ee/wp-content/uploads/2015/08/veges-1060x663.jpg'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="puujakoogiviljad">
              Puu- ja köögiviljad
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'https://thaifoodtrading.se/thumb/4633/325x0/Ko-tt-Fa-gel-Fisk-Skaldjur.png'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="lihajakalatooted">
              Liha- ja kalatooted
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'http://ajakirisport.ee/wp-content/uploads/2020/07/egg-2191991_1920-678x381.jpg'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="piimatootedmunadvoid">
              Piimatooted, munad, võid
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'https://www.kontserdimaja.ee/static/2012/03/juustud.png'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="juustud">
              Juustud
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'http://ajaviide.ee/wp-content/uploads/2016/08/leib.png'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="leivadsaiadkondiitritooted">
              Leivad, saiad, kondiitritooted
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'https://majandus.goodnews.ee/wp-content/uploads/sites/6/2016/06/Valmistoidud-II-300x200.jpg'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="valmistoidud">
              Valmistoidud
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'https://et.mamydziecko.com/f/ee1eee16fb02b9fe8f781a3ebbc2bdb5'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="kuivainedhommikusoogidhoidised">
              Kuivained, hommikusöögid, hoidised
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'https://assets.livinn.lt/fit-in/665x665/08/ea/45/2freegreatpicture-com-638-the-seasoning-ingredients-hd.jpeg'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="maailmakookmaitseainedpuljongid">
              Maailma köök, maitseained, puljongid
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'https://api.delfi.ee/media-api-image-cropper/v1/88e56f30-b7c5-11eb-94ef-7b0ee2fca87c.jpg?w=1200&h=711&ch=0.8427&cw=1&cx=0&cy=0.0009&r=16:9'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="kastmedolid">
              Kastmed, õlid
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'https://www.telegram.ee/wp-content/uploads/2014/05/Candy_LargeWide-300x168.jpg'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="maiustusedkupsisednaksid">
              Maiustused, küpsised, näksid
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'https://unisabanaradio.tv/img/other/66/9-healthy-frozen-meals-you-can-buy-grocery-store-2.jpg'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="kulmutatudtoidukaubad">
              Külmutatud toidukaubad
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
          class="d-flex child-flex"
          cols="4">
        <v-card>
          <v-img
              :src="'https://api.delfi.ee/media-api-image-cropper/v1/1df26a10-b915-11eb-a43e-c39d2a6aaf33.jpg?w=1200&h=711'"
              aspect-ratio="2"
              class="grey lighten-2">
          </v-img>
          <v-card-title>
            <v-btn
                class="pa-md-10 cyan lighten-3 flex-fill"
                @click="joogid">
              Joogid
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>

    </v-row>
    <br>
    <br>
    <br>
  </v-container>
</template>

<script>
import router from "../router";

export default {
  data: function () {
    return {}
  },
  methods: {
    puujakoogiviljad: function () {
      router.push({name: 'PuuJaKoogiviljad'})
    },
    lihajakalatooted: function () {
      router.push({name: 'LihaJaKalatooted'})
    },
    piimatootedmunadvoid: function () {
      router.push({name: 'PiimatootedMunadVoid'})
    },
    juustud: function () {
      router.push({name: 'Juustud'})
    },
    leivadsaiadkondiitritooted: function () {
      router.push({name: 'LeivadSaiadKondiitritooted'})
    },
    valmistoidud: function () {
      router.push({name: 'Valmistoidud'})
    },
    kuivainedhommikusoogidhoidised: function () {
      router.push({name: 'KuivainedHommikusoogidHoidised'})
    },
    maailmakookmaitseainedpuljongid: function () {
      router.push({name: 'MaailmakookMaitseainedPuljongid'})
    },
    kastmedolid: function () {
      router.push({name: 'KastmedOlid'})
    },
    maiustusedkupsisednaksid: function () {
      router.push({name: 'MaiustusedKupsisedNaksid'})
    },
    kulmutatudtoidukaubad: function () {
      router.push({name: 'KulmutatudToidukaubad'})
    },
    joogid: function () {
      router.push({name: 'Joogid'})
    },
  }

}


</script>
