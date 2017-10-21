<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song Metadata">
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
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    // const song = await SongsService.show(songId)
    console.log(this.song)
    console.log(songId)
  },
  components: {
    Panel
  },
  data () {
    return {
      song: {}
    }
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
