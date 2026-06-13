import type { INodeProperties } from 'n8n-workflow';

export const companyNameSimilarityKeyDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Company Name Similarity Key"
					]
				}
			},
			"options": [
				{
					"name": "Getcompanymatch",
					"value": "Getcompanymatch",
					"action": "Gets a similarity key for matching purposes for company name data",
					"description": "Gets a similarity key for matching purposes for company name data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getcompanymatch"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getcompanymatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Company Name Similarity Key"
					],
					"operation": [
						"Getcompanymatch"
					]
				}
			}
		},
		{
			"displayName": "License",
			"name": "license",
			"required": true,
			"description": "Your Interzoid license API key. Register at www.interzoid.com/register",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "license",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Name Similarity Key"
					],
					"operation": [
						"Getcompanymatch"
					]
				}
			}
		},
		{
			"displayName": "Company",
			"name": "company",
			"required": true,
			"description": "Company name from which to generate similarity key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "company",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Company Name Similarity Key"
					],
					"operation": [
						"Getcompanymatch"
					]
				}
			}
		},
];
