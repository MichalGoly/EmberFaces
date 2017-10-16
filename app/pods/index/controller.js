import Ember from 'ember';

export default Ember.Controller.extend({

    //Image push up from component
    file: undefined,
    number: 10,

    microsoftFaceApiRequest: function() {
        console.log('File Changed',this.get('file'));
        

    }.observes('file')

});
