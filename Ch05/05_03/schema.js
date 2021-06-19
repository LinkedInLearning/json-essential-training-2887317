// Schema for product data
var productSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/schemas/products.json",
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
    }
  }
};
