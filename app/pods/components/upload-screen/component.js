import Ember from 'ember';

export default Ember.Component.extend({

  imageSrc: "assets/images/icon.jpg",
  


  options: Ember.computed(function() {
    return {
      url: '#',
      createImageThumbnails: "false",
      dictDefaultMessage: "Upload your selfie to begin!",
      acceptedFiles: "image/*",
      addRemoveLinks: "true",
      parallelUploads: "1"
    };
  }),

  actions: {
    onUploadComplete: (file) => {
      console.log("Michal is the King of Poland", file);
    }
  }
});
