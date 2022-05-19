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
                    {{ field }}
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
                    {{ testData.title }}
                  </td>
                  <td scope="row">
                    {{ testData.content }}
                  </td>
                  <td scope="row">
                    {{ formatDate(testData.date) }}
                  </td>
                  <td scope="row">
                    <button
                      class          = "btn btn-sm btn-info action-button"
                      type           = "button"
                      data-bs-toggle = "modal"
                      data-bs-target = "#newsDetailsModal"
                      @click         = "onclickView(testData)"
                    >
                      <fontA class="icons" icon="eye"/>
                    </button>
                    <button
                      class          = "btn btn-sm btn-primary action-button"
                      type           = "button"
                      data-bs-toggle = "modal"
                      data-bs-target = "#editModal"
                      @click         = "onclickEdit(testData)"
                    > 
                      <fontA icon="pen-to-square"/>
                    </button>
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
        
        <!-- Edit Modal -->
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
                <button
                  class           = "btn-close"
                  aria-label      = "Close"
                  data-bs-dismiss = "modal"
                  type            = "button"
                  @click          = "onclickCancel()"
                />
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
                  v-if            = "newTitle === ''"
                  class           = "btn btn-danger"
                  data-bs-dismiss = "modal"
                  type            = "button"
                  @click          = "onclickDelete()"
                >
                  <fontA icon="trash-can"/>
                  Delete
                </button>
                <button
                  class           = "btn btn-success"
                  data-bs-dismiss = "modal"
                  type            = "button"
                  @click          = "onclickSave()"
                >
                  <fontA icon="check"/>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <NewsDetails
            id  = "newsDetailsModal"
          :data = "editItem"
        />
      </div>
    </main>
  </div>
</template>

<script>
  import NewsDetails from '@/components/NewsDetails.vue'
  import _ from 'lodash';
  import moment from 'moment';
  
  export default {
    name: 'HomeView',
    components: { NewsDetails },
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
        editItem: {},
        cache   : '',
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
      clearData() {
        this.editItem = {};
        this.newTitle = '';
      },
      onclickView(item) {
        this.editItem = item
      },
      onclickEdit(item) {
        this.editItem = _.cloneDeep(item);
        this.cache    = this.editItem;
      },
      onclickSave(){
        var alertTitle, alertMessage;
        if (this.newTitle !== '') {
          this.editItem.title = this.newTitle;
          this.editItem.id    = this.lastId + 1;
          this.testDatas.push(this.editItem)
          
          alertTitle   = "Created"
          alertMessage = 'News Created!'
          this.showAlert(alertTitle, alertMessage, 'success');
        } else {
          var index = this.testDatas.map(function (e) { return e.id }).indexOf(this.cache.id);
          this.testDatas.splice(index, 1, this.editItem);
          
          alertTitle   = "Saved"
          alertMessage = 'Changes Saved'
          this.showAlert(alertTitle, alertMessage, 'success');
        }
        
        this.clearData();
      },
      onclickCancel() {
        this.clearData()
      },
      onclickDelete() {
        this.$swal({
          title            : 'Are You Sure Want To Delete This News?',
          icon             : 'warning',
          showCancelButton : true,
          confirmButtonText: 'Delete',
        }).then((result) => {
          if (result.isConfirmed) {     
            var index = this.testDatas.map(function (e) { return e.id }).indexOf(this.cache.id);
            this.testDatas.splice(index, 1);
            this.$swal('Deleted', '', 'error')
          }
        })
      },
      showAlert(title, text, icon) {
        this.$swal({
          title: title,
          text : text,
          icon : icon,
        });
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
  
  .action-button {
    color: white;
    /* text-align: center; */
    margin-left: 8px;
  }
</style>