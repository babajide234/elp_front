<template>
  <div class="">
    <div class="row">
      <div class="col-lg-12">
        <!-- <div class=" float-right p-4">
          <button class="">Add Log</button>
        </div> -->
        <b-modal id="upload" size="md" title="Uplaod Attachement">
          <b-container>
            <b-row>
              <b-col>
                <b-card>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                      >
                        <b-form-input id="Name" type="text" placeholder="Rename File" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-file
                        v-model="file1"
                        :state="Boolean(file1)"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                      />
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </b-modal>

        <div class="page-header">
          <h3 class="page-title">
            File Uploads
          </h3>
          <div class="">
            <b-button v-b-modal.AddLog class="btn btn btn-gradient-primary btn-fw btn-secondary">
              <i class="mdi mdi-plus" />
              New Folder
            </b-button>
            <b-button v-b-modal.upload class="btn btn btn-gradient-primary btn-fw btn-secondary">
              <i class="mdi mdi-plus" />
              Upload
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Janes Folder(No Files)</h6>
          </template>
          <b-card-text>No Files in This Folder</b-card-text>
          <template #footer>
            <div class=" float-right">
              <b-button href="#" class="btn btn btn-gradient-primary btn-fw btn-secondary">Upload File To Folder</b-button>
              <b-button href="#" class="btn btn btn-gradient-primary btn-fw btn-secondary">Rename</b-button>
              <b-button href="#" class="btn btn btn-gradient-danger btn-fw btn-danger">Delete</b-button>
            </div>
          </template>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          latest_reply: 40,
          user: 'Dickerson',
          flag: 'Macdonald',
          group: 'Macdonald',
          notes: 'Macdonald',
          replies: 'Macdonald',
          actions: 2,
        },
      ],
      options: [
        { text: 'Allow Replies', value: 'orange' },
        { text: 'Prevent Replies', value: 'apple' },
        { text: 'Archived', value: 'pineapple' },
        { text: 'Resolved', value: 'grape' },
      ],
      input: [
        {
          typ: 'text',
          placeholder: 'nbfia',
          label: 'label',
        },
      ],
    };
  },
  mounted() {

  },
  updated() {

  },
  methods: {

  },
};
</script>

<style>
.checkbox:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
