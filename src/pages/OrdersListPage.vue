<template>
  <div class="orders-list-page">
    <Navbar />
    <SearchFilter />
    <OrdersTable />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import SearchFilter from '@/components/SearchFilter.vue'
import OrdersTable from '../components/tables/OrdersTable.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'OrdersListPage',
  components: {
    Navbar,
    SearchFilter,
    OrdersTable,
    Footer
  }
}
</script>