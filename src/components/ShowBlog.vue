/* eslint-disable */
<template>
<b-row>
  <b-col cols="12">
    <h2>
        Edit Blog
        <b-link href="#/">(Blog List)</b-link>
      </h2>
    <b-jumbotron>
      <template slot="header">
          {{blog.title}}
        </template>
      <template slot="lead">
          {{blog.body}}<br>
        </template>
      <hr class="my-4">
      <p>
        Updated Date: {{blog.updated_date}}
      </p>
      <b-btn variant="success" @click.stop="editblog(blog._id)">Edit</b-btn>
      <b-btn variant="danger" @click.stop="deleteblog(blog._id)">Delete</b-btn>
      <b-btn variant="secondary" @click.stop="viewblog(blog._id)">View Blog</b-btn>
    </b-jumbotron>
  </b-col>
</b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ShowBlog',
  data() {
    return {
      blog: []
    }
  },
  created() {
    axios.get(`http://armyofhackers.com:3000/blog/` + this.$route.params.id)
      .then(response => {
        this.blog = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    editblog(blogid) {
      this.$router.push({
        name: 'EditBlog',
        params: {
          id: blogid
        }
      })
    },
    deleteblog(blogid) {
      axios.delete('http://localhost:3000/blog/' + blogid)
        .then((result) => {
          this.$router.push({
            name: 'BlogList'
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    viewblog(blogid) {
      this.$router.push({
        name: 'BlogList',
        params: {
          id: blogid
        }

      })
    }
  }
}
</script>

<style>
.jumbotron {
  padding: 2rem;
}
</style>
