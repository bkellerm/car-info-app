export const schema = {
    "models": {
        "Car": {
            "syncable": true,
            "name": "Car",
            "pluralName": "Cars",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ],
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "registration": {
                    "name": "registration",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "mileage": {
                    "name": "mileage",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "fuel_level": {
                    "name": "fuel_level",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "fuel_liters": {
                    "name": "fuel_liters",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "battery_status": {
                    "name": "battery_status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "last_location_longitude": {
                    "name": "last_location_longitude",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "last_location_latitude": {
                    "name": "last_location_latitude",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "enums": {},
    "version": "0fe5815038089c0a54b4c02d7e03ff53"
};