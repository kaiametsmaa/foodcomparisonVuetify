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
                <th class="text-left">
                  Prisma hind
                </th>
                <th class="text-left">
                  Selveri hind
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="item in ProductInfo"
                  :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.prismaPrice }}</td>
                <td>{{ item.selverPrice }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </v-container>
</template>
<script>

export default {
  data: function () {
    return {


    }
  },
  methods: {

  },
}
</script>