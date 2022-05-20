<template>
<div
  class       = "modal fade in"
  aria-hidden = "true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Details</h5>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <strong>Title</strong>
            </div>
            <div class="col-12">
              <label>{{ data.title }}</label>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <strong>Content</strong>
            </div>
            <div class="col-12">
              <label>{{ data.content }}</label>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <strong>Date</strong>
            </div>
            <div class="col-12">
              <label>{{ formatDate(data.date) }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import moment from 'moment';
  export default {
    props: {
      data: {
        type: Object,
        default () {}
      },
    },
    name: 'NewsDetails',
    methods: {
      formatDate(value, format) {
        if (value) {
          var date = moment.unix(value)
          if (!date.isValid()) {
            date = moment(value)
          }
          if (format) {
            return moment(date).format(format)
          } else {
            return moment(date).format('DD/MM/YYYY')
          }
        }
        return ''
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>