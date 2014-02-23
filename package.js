Package.describe({
    summary: "Meteor wrapper for node-vkontakte"
});
Npm.depends({feedparser: "~0.3.0"});
Package.on_use(function(api){
    api.add_files('meteor-vkontakte.js', 'server');
    if(api.export)
        api.export('VkontakteApi');
});