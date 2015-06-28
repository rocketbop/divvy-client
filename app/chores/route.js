import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // 'chore' is the name of the model
    return this.store.find('chore')
  },
  actions: {
    addNew: function() {
      var self = this;
      var chore = this.store.createRecord('chore', {
        description: this.controller.get('description')
      });
      chore.save().then(function() {
        console.log('save successful');
        self.controller.set('message', 'New chore added');
      }, function() {
        console.log('save failed');
      });
    }
  }
});
