<template>
  <v-app>
    <v-card>
      <v-app-bar
          app
          color="cyan"
          dark
          flat
      >
        <v-spacer></v-spacer>

        <input placeholder="Otsi toodet">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <br>
        <v-btn icon
               :href="`#/ostukorv`">
          <v-icon>mdi-cart</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs
              centered
              slider-color="yellow"
          >
            <v-tab
                :href="`/`"
            >
              <v-btn
                  color="cyan"
                  text.color="white">
                Tooteid valima
              </v-btn>
            </v-tab>
            <v-tab
                to = "/ostukorv"
            >
              <v-btn
                  color="cyan"
                  text.color="white"
                  >
                Ostukorvi võrdlus
              </v-btn>
            </v-tab>
            <v-tab
                to ="/puujakoogiviljad"
            >
              <v-btn
                  color="cyan"
                  text.color="white">
                Puu- ja Köögiviljad
              </v-btn>
            </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

    </v-card>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
