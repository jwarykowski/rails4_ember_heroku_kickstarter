KickstarterRails4EmberHeroku.EditTodoView = Ember.TextField.extend({
  didInsertElement: function () {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-todo', KickstarterRails4EmberHeroku.EditTodoView);