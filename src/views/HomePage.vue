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
                    scope="col"
                  >
                    {{field}}
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    data() {
      return {
        fields: ['Title', 'Content', 'Date', 'Actions']
      }
    },
    components: {
      // HelloWorld
    }
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
</style>