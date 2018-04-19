/* eslint-disable */
<template>
<div>
  <h2>
        Blog Lists
        <b-link href="#/add-blog">(Add Blog)</b-link>
      </h2>
  <template>
    <b-table striped hover :items="blogs" :fields="fields">
      <template slot="actions" slot-scope="row">
                <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
              </template>s
  </b-table>
  </template>


</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogList',
  data() {
    return {
      fields: {
        title: {
          label: 'Blog Title',
          sortable: true,
          'class': 'text-center'
        },
        body: {
          label: 'Blog Body'
        },
        actions: {
          label: 'Action',
          'class': 'text-center'
        }
      },
      blogs: [],
      errors: []
    }
  },
  created() {
    axios.get(`http://localhost:3000/blog`)
      .then(response => {
        this.blogs = response.data
      })
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
  },
  methods: {
    details(blog) {
      this.$router.push({
        name: 'ShowBlog',
        params: {
          id: blog._id
        }
      })
    }
  }
}
</script>
