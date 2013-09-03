// http://emberjs.com/guides/models/defining-a-store/

KickstarterRails4EmberHeroku.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});
