// For more information see: http://emberjs.com/guides/routing/

KickstarterRails4EmberHeroku.Router.map(function () {
  this.resource('todos', { path: '/' }, function () {
    // additional child routes
    this.route('active');
    this.route('completed');
  });
});

KickstarterRails4EmberHeroku.Router.reopen({
  location: 'history'
});

KickstarterRails4EmberHeroku.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});

KickstarterRails4EmberHeroku.TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('todos');
  }
});

KickstarterRails4EmberHeroku.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function (todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});

KickstarterRails4EmberHeroku.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function (todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});