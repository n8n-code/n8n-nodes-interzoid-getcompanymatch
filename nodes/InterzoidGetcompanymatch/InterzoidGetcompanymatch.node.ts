import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { companyNameSimilarityKeyDescription } from './resources/company-name-similarity-key';

export class InterzoidGetcompanymatch implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Interzoid Getcompanymatch',
		name: 'N8nDevInterzoidGetcompanymatch',
		icon: { light: 'file:./interzoid-getcompanymatch.png', dark: 'file:./interzoid-getcompanymatch.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API generates similarity keys for company name deduplication, fuzzy matching, and dataset merging.',
		defaults: { name: 'Interzoid Getcompanymatch' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevInterzoidGetcompanymatchApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Company Name Similarity Key",
					"value": "Company Name Similarity Key",
					"description": ""
				}
			],
			"default": ""
		},
		...companyNameSimilarityKeyDescription
		],
	};
}
