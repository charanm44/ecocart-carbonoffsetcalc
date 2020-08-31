export const CarbonData = [
    {
        "id": "commute_method",
        "question": "To start, how do you get around?",
        "icon": "car",
        "multiple": true,
        "options": [
            {
                "type": "text",
                "value": "Car",
                "score": 4.6
            },
            {
                "type": "text",
                "value": "Public transport",
                "score": 3.5
            },
            {
                "type": "text",
                "value": "Ride share",
                "score": 2.2
            },
            {
                "type": "text",
                "value": "Bike / walk",
                "score": 0
            }
        ],
        "next": "1"
    },
    {
        "condition": "prevSelections[0] == 'Car'",
        "question": "Is your car electric?",
        "icon": "car",
        "multiple": false,
        "options": [
            {
                "type": "text",
                "value": "Yes",
                "score": -3.1
            },
            {
                "type": "text",
                "value": "No",
                "score": 0
            }
        ]
    },
    {
        "question": "Where do you usually go?",
        "icon": "location",
        "multiple": false,
        "options": [
            {
                "type": "text",
                "value": "Not far",
                "aside": "~50 miles a week",
                "score": -2.5
            },
            {
                "type": "text",
                "value": "Commute to work",
                "aside": "~200 miles a week",
                "score": 0
            },
            {
                "type": "text",
                "value": "I get around",
                "aside": "~400 miles a week",
                "score": 3.4
            },
            {
                "type": "input",
                "value": "Other",
                "aside": "miles a week",
                "score": "parseInt(value)*0.02"
            }
        ]
    },
    {
        "question": "How often do you fly?",
        "icon": "airplane",
        "multiple": false,
        "options": [
            {
                "type": "input",
                "value": "Type your answer here...",
                "aside": "times a year"
            }
        ]
    },
    {
        "condition": "parseInt(prevSelections[0]) > 0",
        "question": "Alright, how far do you usually fly?",
        "icon": "airplane",
        "multiple": false,
        "options": [
            {
                "type": "text",
                "value": "Across the world",
                "aside": "2500+ miles",
                "score": "parseInt(prevSelections[0])*1.6"
            },
            {
                "type": "text",
                "value": "Across the country",
                "aside": "1000-2500 miles",
                "score": "parseInt(prevSelections[0])*0.8"
            },
            {
                "type": "text",
                "value": "Not far",
                "aside": "Less than 1000 miles",
                "score": "parseInt(prevSelections[0])*0.3"
            }
        ]
    }
]
