<template>
  <div
    class           = "modal fade in"
    aria-hidden     = "true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id    = "exampleModalLabel"
            class = "modal-title"
          >{{ title }}</h5>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label
              class = "form-label"
              for   = "title"
            >Title</label>
            <input
              v-if    = "Object.keys(this.editItem).length"
              id      = "title"
              class   = "form-control"
              type    = "text"
            />
            <input
              v-else
              id      = "title"
              class   = "form-control"
              type    = "text"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            class           = "btn btn-danger"
            data-bs-dismiss = "modal"
            type            = "button"
          >Cancel</button>
          <button
            class           = "btn btn-primary"
            data-bs-dismiss = "modal"
            type            = "button"
          >Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddModal',
    props: {
      editItem: {
        type: Object,
        default () {}
      },
      newTitle: {
        type   : String,
        default: ''
      }
    },
    data() {
      return {
        item        : {},
        newDataTitle: '',
      }
    },
    computed: {
      title() {
        if(Object.keys(this.editItem).length) {
          return 'Edit News' 
        } else {
          return 'Add News'
        }
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>

</style>