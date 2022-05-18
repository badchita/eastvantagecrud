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
                    {{testData.news}}
                  </td>
                  <td scope="row">
                    {{testData.content}}
                  </td>
                  <td scope="row">
                    {{testData.date}}
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
            <div class="input-group">
              <input
                class       = "form-control"
                placeholder = "Add News Here"
                type        = "text"
              >
              <button class="btn btn-success" type="button" id="button-addon2">Add</button>
            </div>
          </div>
        </div>
        <AddModal
          :editItem = "editItem"
            id      = "editModal"
        />
      </div>
    </main>
  </div>
</template>

<script>
  import AddModal from '@/modals/AddModal.vue'
  export default {
    name: 'HomeView',
    components: { AddModal },
    data() {
      return {
        fields: ['Title', 'Content', 'Date'],
        testDatas: [
          {
            id     : 1,
            news   : 'News1',
            content: 'Content1',
            date   : '05/18/2022',
          },
          {
            id     : 2,
            news   : 'News2',
            content: 'Content2',
            date   : '05/19/2022',
          },
          {
            id     : 3,
            news   : 'News3',
            content: 'Content3',
            date   : '05/19/2022',
          }
        ],
        editItem: {},
      }
    },
    methods: {
      onclickEdit(item) {
        this.editItem = item;
      }
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