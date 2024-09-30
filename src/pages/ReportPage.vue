<template>
  <div class="report-page">
    <Navbar />
    <StandardReports />
    <CustomReportBuilder />
    <ChartsAndGraphs />
    <ExportButtons />
    <ScheduleReportButton />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import StandardReports from '@/components/StandardReports.vue'
import CustomReportBuilder from '@/components/CustomReportBuilder.vue'
import ChartsAndGraphs from '@/components/ChartsAndGraphs.vue'
import ExportButtons from '../components/buttons/ExportButtons.vue'
import ScheduleReportButton from '../components/buttons/ScheduleReportButton.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'ReportPage',
  components: {
    Navbar,
    StandardReports,
    CustomReportBuilder,
    ChartsAndGraphs,
    ExportButtons,
    ScheduleReportButton,
    Footer
  }
}
</script>