<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <!-- <router-link 
          slot="action"
          :to="{name: 'song-create'}">-->
          <v-btn
            slot="action"
            class="green"
            @click="navigateTo({name: 'songs-create'})"
            dark
            medium
            absolute
            right
            middle
            fab>
            <v-icon>add</v-icon>
          </v-btn>        
        <!-- </router-link>-->
        <div 
          v-for="song in songs"
          :key="song.id" class="song">

          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div> 

              <v-btn
                dark
                class="cyan"
                @click="navigateTo({
                  name: 'song', 
                  params: {songId: song.id}
                })">
                View
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
          </v-layout>
          {{song.title}} - 
          {{song.artist}} - 
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song {
    overflow: hidden;
    padding: 20x;
    height: 300px;
  }
  .song-title {
    font-size: 30px;
  }
  .song-artist {
    font-size: 20px;
  }
  .song-genre {
    font-size: 18px;
  }
  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>
