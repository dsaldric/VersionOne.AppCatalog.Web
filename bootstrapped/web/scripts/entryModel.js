// Generated by CoffeeScript 1.6.2
(function() {
  define(["backbone-min", "catalogApp"], function(Backbone, catalogApp) {
    catalogApp.EntryModel = Backbone.Model.extend({
      url: function() {
        return "http://appcatalog.azurewebsites.net/entry?id=" + this.id;
      }
    });
    return catalogApp.EntryModel;
  });

}).call(this);