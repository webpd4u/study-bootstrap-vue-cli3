<template>
  <div>
    <b-button v-b-modal.modal1>Launch demo modal</b-button>

    <!-- Modal Component -->
    <b-modal id="modal1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

    <!-- Using show() and hide() component methods -->
    <hr>
    <p>Using show() and hide() component methods</p>
    <b-button @click="showModal">Open Modal</b-button>

    <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    </b-modal>

    <!-- Using v-model property -->
    <hr>
    <p>Using v-model property</p>
    <b-button @click="modalShow = !modalShow">Open Modal</b-button>

    <b-modal v-model="modalShow">Hello From Modal!</b-modal>

    <!-- Emitting Events on $root -->
    <hr>
    <p>Emitting Events on $root</p>
    <b-button @click="showModalEmit" ref="btnShow">Open Modal</b-button>

    <b-modal id="modalEmit" @hidden="onHidden">
      <div class="d-block">Hello From My Modal!</div>
      <b-button @click="hideModalEmit">Close Me</b-button>
    </b-modal>

    <!-- Prevent Closing -->
    <hr>
    <b-button v-b-modal.modalPrevent>Launch demo modal</b-button>

    <!-- Main UI -->
    <div class="mt-3 mb-3">Submitted Names:
      <ul>
        <li v-for="n in names">{{ n }}</li>
      </ul>
    </div>

    <!-- Modal Component -->
    <b-modal
      id="modalPrevent"
      ref="modal"
      title="Submit your name"
      @ok="handleOk"
      @shown="clearName"
    >
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text" placeholder="Enter your name" v-model="name"/>
      </form>
    </b-modal>

    <!-- Variants -->
    <hr>
    <b-button @click="show=true" variant="primary">Show Modal</b-button>

    <b-modal
      v-model="show"
      title="Modal Variants"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3"/>
          <b-col>Background</b-col>
          <b-col>Text</b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Header</b-col>
          <b-col>
            <b-form-select :options="variants" v-model="headerBgVariant"/>
          </b-col>
          <b-col>
            <b-form-select :options="variants" v-model="headerTextVariant"/>
          </b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Body</b-col>
          <b-col>
            <b-form-select :options="variants" v-model="bodyBgVariant"/>
          </b-col>
          <b-col>
            <b-form-select :options="variants" v-model="bodyTextVariant"/>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">Footer</b-col>
          <b-col>
            <b-form-select :options="variants" v-model="footerBgVariant"/>
          </b-col>
          <b-col>
            <b-form-select :options="variants" v-model="footerTextVariant"/>
          </b-col>
        </b-row>
      </b-container>

      <div slot="modal-footer" class="w-100">
        <p class="float-left">Modal Footer Content</p>
        <b-button size="sm" class="float-right" variant="primary" @click="show=false">Close</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false,
      name: "",
      names: [],
      show: false,
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark"
      ],
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "warning",
      footerTextVariant: "dark"
    };
  },
  methods: {
    showModal() {
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    },
    showModalEmit() {
      this.$root.$emit("bv::show::modal", "modalEmit");
    },
    hideModalEmit() {
      this.$root.$emit("bv::hide::modal", "modalEmit");
    },
    onHidden(evt) {
      // Return focus to our Open Modal button
      // See accessibility below for additional return-focus methods

      // comment for error "TypeError: Cannot read property 'focus' of undefined"
      // this.$refs.btnShow.$el.focus()

      console.log("onHidden");
      console.log(evt);
    },
    clearName() {
      this.name = "";
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault();
      if (!this.name) {
        alert("Please enter your name");
      } else {
        this.handleSubmit();
      }
    },
    handleSubmit() {
      this.names.push(this.name);
      this.clearName();
      this.$nextTick(() => {
        // Wrapped in $nextTick to ensure DOM is rendered before closing
        this.$refs.modal.hide();
      });
    }
  }
};
</script>