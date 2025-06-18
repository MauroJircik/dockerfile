<template>
  <div>
    <h2>Usuários</h2>
    <ul>
      <li v-for="u in users" :key="u.id">{{ u.name }} ({{ u.email }})</li>
    </ul>

    <h2>Compras</h2>
    <ul>
      <li v-for="p in purchases" :key="p.id">
        {{ p.user?.name }} comprou {{ p.quantity }}x {{ p.item?.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const purchases = ref([])
const items = ref([])

const baseUrl = import.meta.env.VITE_API_URL

onMounted(async () => {
  try {
    const resUsers = await axios.get(`${baseUrl}/users`)
    const resPurchases = await axios.get(`${baseUrl}/purchases`)
    const resItems = await axios.get(`${baseUrl}/items`)

    users.value = resUsers.data
    items.value = resItems.data

    purchases.value = resPurchases.data.map(purchase => ({
        ...purchase,
        user: users.value.find(u => u.id === purchase.userId),
        item: items.value.find(i => i.id === purchase.itemId)
    }))
  } catch (err) {
    console.error('Erro ao carregar dados:', err)
  }
})
</script>

