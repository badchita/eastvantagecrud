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
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{ editItem }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
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
      },
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
    methods: {
    },
  }
</script>

<style lang="scss" scoped>

</style>