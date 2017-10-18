import Ember from 'ember';

export default Ember.Component.extend({
  //Default image.
  imageSrc: "assets/images/icon.jpg",
  file: undefined,

  uploadData: function(file){
    var fd = new FormData();
    fd.append('data', file);
    console.log('Ajax Request! Start')
    // Do a Ajax Post
    Ember.$.ajax({
      type: 'POST',
      url: '/upload',
      data: fd,
      processData: false,
      contentType: false,

    }).done(function(){
      console.log("Attempting to send file");
    });
    //End 
  },

  actions:{
    upload: function()  {
      let file = document.getElementById('file').files[0];
      console.log('FILE:', file);
      this.set('file',file);

      let reader =  new FileReader();

      

      if(file){
        console.log(file instanceof Blob);
        this.uploadData(file);

        }
      }
    },
});
