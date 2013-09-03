KickstarterRails4EmberHeroku = Ember.Application.create();

KickstarterRails4EmberHeroku.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});