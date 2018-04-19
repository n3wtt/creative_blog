/* eslint-disable */
<template>
<b-row>
  <b-col cols="12">
    <h2>
        Edit Blog
        <router-link :to="{ name: 'ShowBlog', params: { id: blog._id } }">(Show Blog)</router-link>
      </h2>
    <b-form @submit="onSubmit">
      <b-form-group id="fieldsetHorizontal" horizontal :label-cols="4" breakpoint="md" label="Enter Title">
        <b-form-input id="isbn" :state="state" v-model.trim="blog.title"></b-form-input>
      </b-form-group>
      <b-form-group id="fieldsetHorizontal" horizontal :label-cols="4" breakpoint="md" label="Enter Body">
        <b-form-input id="title" :state="state" v-model.trim="blog. body"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Update</b-button>
    </b-form>
  </b-col>
</b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditBlog',
  data () {
    return {
      blog: {}
    }
  },
  created () {
    axios.get(`http://armyofhackers.com:3000/blog/` + this.$route.params.id)
      .then(response => {
        this.blog = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.put(`http://armyofhackers.com:3000/blog/` + this.$route.params.id, this.blog)
        .then(response => {
          this.$router.push({
            name: 'ShowBlog',
            params: {
              id: this.$route.params.id
            }
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
