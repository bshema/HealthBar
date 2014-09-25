exports.definition = {
    config : {
        "columns": {
            "id": "int",
            "description": "String",
            "tags": "String",
            "manufacturer": "String",
            "group": "String",
            "portions": "String",
            "nutrients": "String"
        },
        "defaults": {
            "title": "-",
            "author": "-"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "foods",
            "db_file": "/usda.sql3",  
    		"db_name": "fighters",  
    		"idAttribute": "id",  
    		"remoteBackup":false
        }
    },
/*
var obj = {
  "id": 21441,
  "description": "KENTUCKY FRIED CHICKEN, Fried Chicken, EXTRA CRISPY, Wing, meat and skin with breading",
  "tags": ["KFC"],  
  "manufacturer": "Kentucky Fried Chicken",
  "group": "Fast Foods",
  "portions": [
    {
      "amount": 1,
      "unit": "wing, with skin",
      "grams": 68.0
    }
  ],
  "nutrients": [
    {
      "value": 20.8,
      "units": "g",
      "description": "Protein",
      "group": "Composition"
    }
  ]
};*/


    extendModel: function(Model) {		
        _.extend(Model.prototype, {
            // Extend, override or implement Backbone.Model 
        });
		
        return Model;
    },

    extendCollection: function(Collection) {		
        _.extend(Collection.prototype, {
            // Extend, override or implement Backbone.Collection 
        });
		
        return Collection;
    }
};