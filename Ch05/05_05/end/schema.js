// Schema for product data
var productSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://hplussport.com/schemas/products.json",
  "title": "h+ Sport Products",
  "description": "Schema for h+ Sport product data",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
          "type": "string"
      },
      "name": {
          "type": "string"
      },
      "description": {
          "type": "string"
      },
      "image_title": {
          "type": "string"
      },
      "image": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "name",
      "description",
      "image_title",
      "image"
    ]
  }
};

var personSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://hplussport.com/schemas/person.json",
    "type": "object",
    "title": "h+ Sport People",
    "description": "Schema for h+ Sport person cards.",
    "default": {},
    "required": [
        "cards"
    ],
    "properties": {
        "cards": {
            "$id": "#/properties/cards",
            "type": "array",
            "title": "The cards schema",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "items": {
                "$id": "#/properties/cards/items",
                "anyOf": [
                    {
                        "$id": "#/properties/cards/items/anyOf/0",
                        "type": "object",
                        "title": "The first anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": {},
                        "required": [
                            "img",
                            "cardInfo",
                            "cardText"
                        ],
                        "properties": {
                            "img": {
                                "$id": "#/properties/cards/items/anyOf/0/properties/img",
                                "type": "object",
                                "title": "The img schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": {},
                                "required": [
                                    "src",
                                    "alt"
                                ],
                                "properties": {
                                    "src": {
                                        "$id": "#/properties/cards/items/anyOf/0/properties/img/properties/src",
                                        "type": "string",
                                        "title": "The src schema",
                                        "description": "An explanation about the purpose of this instance.",
                                        "default": ""
                                    },
                                    "alt": {
                                        "$id": "#/properties/cards/items/anyOf/0/properties/img/properties/alt",
                                        "type": "string",
                                        "title": "The alt schema",
                                        "description": "An explanation about the purpose of this instance.",
                                        "default": ""
                                    }
                                },
                                "additionalProperties": true
                            },
                            "cardInfo": {
                                "$id": "#/properties/cards/items/anyOf/0/properties/cardInfo",
                                "type": "object",
                                "title": "The cardInfo schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": {},
                                "required": [
                                    "cardName",
                                    "cardTitle"
                                ],
                                "properties": {
                                    "cardName": {
                                        "$id": "#/properties/cards/items/anyOf/0/properties/cardInfo/properties/cardName",
                                        "type": "string",
                                        "title": "The cardName schema",
                                        "description": "An explanation about the purpose of this instance.",
                                        "default": ""
                                    },
                                    "cardTitle": {
                                        "$id": "#/properties/cards/items/anyOf/0/properties/cardInfo/properties/cardTitle",
                                        "type": "string",
                                        "title": "The cardTitle schema",
                                        "description": "An explanation about the purpose of this instance.",
                                        "default": ""
                                    }
                                },
                                "additionalProperties": true
                            },
                            "cardText": {
                                "$id": "#/properties/cards/items/anyOf/0/properties/cardText",
                                "type": "string",
                                "title": "The cardText schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": ""
                            }
                        },
                        "additionalProperties": true
                    }
                ]
            }
        }
    },
    "additionalProperties": true
};
