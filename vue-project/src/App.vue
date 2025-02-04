<template>
  <h1>Food</h1>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>

  <br>

  <food-item />
  <food-item2 />
  <food-item />
  <personal-profile />
  <comment-form />
  <comment />

  <ul>
    <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'

const countries = ref([])
const comments = ref([])

async function getCountries() {
  const { data, error } = await supabase.from('countries').select()
  if (!error && data) {
    countries.value = data
  }
}

async function getComments() {
  const { data, error } = await supabase.from('comments').select()
  if (!error && data) {
    comments.value = data
  }
}

onMounted(() => {
  getCountries()
  getComments()
})
</script>
