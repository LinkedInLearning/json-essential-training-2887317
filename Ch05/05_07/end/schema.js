// Schema for weather data
var weatherSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://explorecalifornia.com/schemas/weather.json",
    "type": "array",
    "title": "Explore California Weather",
    "description": "Schema for Explore California weather data.",
    "default": [],
    "items": {
        "$id": "#/items",
        "anyOf": [
            {
                "$id": "#/items/anyOf/0",
                "type": "object",
                "title": "The first anyOf schema",
                "description": "An explanation about the purpose of this instance.",
                "default": {},
                "required": [
                    "id",
                    "name",
                    "name_ascii",
                    "lat",
                    "lng",
                    "population",
                    "country_id",
                    "province",
                    "country_name",
                    "unit",
                    "season",
                    "forecast"
                ],
                "properties": {
                    "id": {
                        "$id": "#/items/anyOf/0/properties/id",
                        "type": "string",
                        "title": "The id schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "name": {
                        "$id": "#/items/anyOf/0/properties/name",
                        "type": "string",
                        "title": "The name schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "name_ascii": {
                        "$id": "#/items/anyOf/0/properties/name_ascii",
                        "type": "string",
                        "title": "The name_ascii schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "lat": {
                        "$id": "#/items/anyOf/0/properties/lat",
                        "type": "string",
                        "title": "The lat schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "lng": {
                        "$id": "#/items/anyOf/0/properties/lng",
                        "type": "string",
                        "title": "The lng schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "population": {
                        "$id": "#/items/anyOf/0/properties/population",
                        "type": "string",
                        "title": "The population schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "country_id": {
                        "$id": "#/items/anyOf/0/properties/country_id",
                        "type": "string",
                        "title": "The country_id schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "province": {
                        "$id": "#/items/anyOf/0/properties/province",
                        "type": "string",
                        "title": "The province schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "country_name": {
                        "$id": "#/items/anyOf/0/properties/country_name",
                        "type": "string",
                        "title": "The country_name schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "unit": {
                        "$id": "#/items/anyOf/0/properties/unit",
                        "type": "string",
                        "title": "The unit schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "season": {
                        "$id": "#/items/anyOf/0/properties/season",
                        "type": "string",
                        "title": "The season schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": ""
                    },
                    "forecast": {
                        "$id": "#/items/anyOf/0/properties/forecast",
                        "type": "array",
                        "title": "The forecast schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": [],
                        "items": {
                            "$id": "#/items/anyOf/0/properties/forecast/items",
                            "anyOf": [
                                {
                                    "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0",
                                    "type": "object",
                                    "title": "The first anyOf schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": {},
                                    "required": [
                                        "date",
                                        "temp_min",
                                        "temp_max",
                                        "season_min",
                                        "season_max",
                                        "condition_name",
                                        "condition_desc",
                                        "condition_video",
                                        "condition_icon"
                                    ],
                                    "properties": {
                                        "date": {
                                            "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/date",
                                            "type": "string",
                                            "title": "The date schema",
                                            "description": "An explanation about the purpose of this instance.",
                                            "default": ""
                                        },
                                        "temp_min": {
                                            "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/temp_min",
                                            "type": "number",
                                            "title": "The temp_min schema",
                                            "description": "An explanation about the purpose of this instance.",
                                            "default": 0.0
                                        },
                                        "temp_max": {
                                            "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/temp_max",
                                            "type": "number",
                                            "title": "The temp_max schema",
                                            "description": "An explanation about the purpose of this instance.",
                                            "default": 0.0
                                        },
                                        "season_min": {
                                            "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/season_min",
                                            "type": "number",
                                            "title": "The season_min schema",
                                            "description": "An explanation about the purpose of this instance.",
                                            "default": 0.0
                                        },
                                        "season_max": {
                                            "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/season_max",
                                            "type": "number",
                                            "title": "The season_max schema",
                                            "description": "An explanation about the purpose of this instance.",
                                            "default": 0.0
                                        },
                                        "condition_name": {
                                            "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/condition_name",
                                            "type": "string",
                                            "title": "The condition_name schema",
                                            "description": "An explanation about the purpose of this instance.",
                                            "default": ""
                                        },
                                        "condition_desc": {
                                            "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/condition_desc",
                                            "type": "string",
                                            "title": "The condition_desc schema",
                                            "description": "An explanation about the purpose of this instance.",
                                            "default": ""
                                        },
                                        "condition_video": {
                                            "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/condition_video",
                                            "type": "string",
                                            "title": "The condition_video schema",
                                            "description": "An explanation about the purpose of this instance.",
                                            "default": ""
                                        },
                                        "condition_icon": {
                                            "$id": "#/items/anyOf/0/properties/forecast/items/anyOf/0/properties/condition_icon",
                                            "type": "string",
                                            "title": "The condition_icon schema",
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
            }
        ]
    }
};
