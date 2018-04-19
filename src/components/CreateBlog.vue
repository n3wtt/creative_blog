/* eslint-disable */
<template>
<b-row>
  <b-col cols="12">
    <h2>
        Add Blog
        <b-link href="#/">(Blog List)</b-link>
      </h2>
    <b-form @submit="onSubmit">

      <b-form-group id="fieldsetHorizontal" style="width: 400px;margin-left: auto;margin-right: auto" :label-cols="4" label="Enter Title">
        <b-form-input id="title" :state="state" v-model="blog.title"></b-form-input>
      </b-form-group>
      <b-form-textarea placeholder="Enter content"id="body" :state="state" v-model="blog.body" style="width: 800px;margin-left: auto;margin-right: auto" :rows="4" :max-rows="20">
      </b-form-textarea>
      <b-button type="submit" variant="primary">Save</b-button>
    </b-form>
  </b-col>
</b-row>
</template>

<script>
import axios from 'axios'





export default {
  name: 'CreateBlog',
  data () {
    return {
      blog: {}
    }
  },
  methods: {
    onSubmit (evt) {
      console.log("HERE")
      evt.preventDefault();
      console.log("HERE")
      axios.post('http://localhost:3000/blog', { title: this.blog.title, body: this.blog.body })
        .then(response => {
          console.log("HITSent");
          this.$router.push({
            name: 'ShowBlog',
            params: {
              id: response.data._id
            }
          })
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e)
        })
    }
  }
}
</script>
