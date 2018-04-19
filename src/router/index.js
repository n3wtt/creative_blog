/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import BlogList from '@/components/BlogList'
import ShowBlog from '@/components/ShowBlog'
import CreateBlog from '@/components/CreateBlog'
import EditBlog from '@/components/EditBlog'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/show-blog/:id',
      name: 'ShowBlog',
      component: ShowBlog
    },
    {
      path: '/add-blog',
      name: 'CreateBlog',
      component: CreateBlog
    },
    {
      path: '/edit-blog/:id',
      name: 'EditBlog',
      component: EditBlog
    }
  ]
})
