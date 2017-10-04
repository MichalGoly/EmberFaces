import Ember from 'ember';

export default Ember.Component.extend({

  imageSrc: "assets/images/icon.jpg",


  actions:{

    // On Submit send request to Microsoft Server for json information and then create a record.
    submit: (image) => {
        // Make aJax reuqest
        // Get json back
        //create ember record.
    },

    //file upload action change to preview upload image before sending it,

    upload: () => {
      // this.set('imageSrc', );
      console.log('Image Uploaded');
    },

    test: function() {
      console.log("HELLO WORLD!");
    }
  }

});
