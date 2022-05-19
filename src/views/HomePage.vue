<template>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">East Vantage</span>
      </div>
    </nav>
    <main>
      <div class="container">
        <div class="row m-0">
          <div class="col-12 m-0">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th
                    v-for = "(field,i) in fields"
                  :key    = "i"
                  >
                    {{field}}
                  </th>
                  <th style="width: 150px">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                    v-for = "(testData,i) in testDatas"
                  :key    = "i"
                >
                  <td scope="row">
                    {{testData.title}}
                  </td>
                  <td scope="row">
                    {{testData.content}}
                  </td>
                  <td scope="row">
                    {{formatDate(testData.date)}}
                  </td>
                  <td scope="row">
                    <button
                      class          = "btn btn-primary"
                      type           = "button"
                      data-bs-toggle = "modal"
                      data-bs-target = "#editModal"
                      @click         = "onclickEdit(testData)"
                    >Edit</button>
                    <button
                      class = "btn btn-danger pl-2"
                      type  = "button"
                    >Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row m-0 mt-3">
          <div class="col-2 " />
          <div class="col-3 input-col">
              <form class="input-group">
                <input
                  class       = "form-control"
                  v-model     = "newTitle"
                  placeholder = "Add News Here (Title)"
                  type        = "text"
                >
                <button
                  id             = "button-addon2"
                  class          = "btn btn-success"
                  type           = "button"
                  data-bs-toggle = "modal"
                  data-bs-target = "#editModal"
                >Add</button>
              </form>
          </div>
        </div>
        <!-- <AddModal
            id           = "editModal"
          :editItem.sync = "editItem"
          :newTitle.sync = "newTitle"
        /> -->
        <div
          id          = "editModal"
          class       = "modal fade in"
          aria-hidden = "true"
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
                    v-if    = "newTitle !== ''"
                    v-model = "newTitle"
                    id      = "title"
                    class   = "form-control"
                    type    = "text"
                  />
                  <input
                    v-else
                    v-model = "editItem.title"
                    id      = "title"
                    class   = "form-control"
                    type    = "text"
                  />
                </div>
                <div class="mb-3">
                  <label
                    class = "form-label"
                    for   = "title"
                  >Content</label>
                  <textarea
                    v-model = "editItem.content"
                    id      = "content"
                    class   = "form-control"
                    type    = "text"
                  />
                </div>
                <div class="mb-3">
                  <label
                    class = "form-label"
                    for   = "title"
                  >Date</label>
                  <input
                    v-model = "editItem.date"
                    id      = "date"
                    class   = "form-control"
                    type    = "date"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  class           = "btn btn-danger"
                  data-bs-dismiss = "modal"
                  type            = "button"
                  @click          = "onclickCancel()"
                >Cancel</button>
                <button
                  class           = "btn btn-primary"
                  data-bs-dismiss = "modal"
                  type            = "button"
                  @click          = "onclickSave()"
                >Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  // import AddModal from '@/modals/AddModal.vue'
  import moment from 'moment';
  export default {
    name: 'HomeView',
    components: {  },
    data() {
      return {
        fields   : ['Title', 'Content', 'Date'],
        newTitle : '',
        testDatas: [
          {
            id     : 1,
            title  : 'News1',
            content: 'Content1',
            date   : '2022-05-19',
          },
          {
            id     : 2,
            title  : 'News2',
            content: 'Content2',
            date   : '2022-05-19',
          },
          {
            id     : 3,
            title  : 'News3',
            content: 'Content3',
            date   : '2022-05-20',
          }
        ],
        editItem: {
          id     : null,
          title  : null,
          content: null,
          date   : null,
        },
      }
    },
    computed: {
      title() {
        if(this.newTitle !== '') {
          return 'Add News'
        } else {
          return 'Edit News' 
        }
      },
      lastId() {
        return this.testDatas[this.testDatas.length -1].id;
      }
    },
    methods: {
      onclickEdit(item) {
        this.editItem = item;
      },
      onclickSave(){
        if (this.newTitle !== '') {
          this.editItem.title = this.newTitle;
          this.editItem.id    = this.lastId + 1;
          this.testDatas.push(this.editItem)
        }
        
        this.editItem = {};
        this.newTitle = '';
      },
      onclickCancel() {
        this.editItem = {};
        this.newTitle = '';
      },
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

<style scoped>
  .container {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
  }
  
  .border {
    border: 1px solid black;
  }
  
  .table {
    width: 60%;
    margin: auto;
  }
  
  .input-col {
    margin-left: 38px;
  }
</style>