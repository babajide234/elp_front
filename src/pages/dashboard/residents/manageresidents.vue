<template>
  <div class="">
    <b-modal id="EditResident" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div>
              <b-tabs content-class="mt-3">
                <b-tab title="Add Resident" active>
                  <AddResident />
                </b-tab>
                <b-tab title="Add Independent"><p>I'm the second tab</p></b-tab>
                <b-tab title="Add Prospect"><p>I'm a disabled tab!</p></b-tab>
                <b-tab title="Resident Group"><p>I'm a disabled tab!</p></b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddResident from './components/addResident';
export default {
  components: {
    AddResident,
  },
  data() {
    return {
    };
  },
};

</script>
