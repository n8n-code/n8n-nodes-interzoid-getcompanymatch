import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class InterzoidGetcompanymatchApi implements ICredentialType {
        name = 'N8nDevInterzoidGetcompanymatchApi';

        displayName = 'Interzoid Getcompanymatch API';

        icon: Icon = { light: 'file:../nodes/InterzoidGetcompanymatch/interzoid-getcompanymatch.png', dark: 'file:../nodes/InterzoidGetcompanymatch/interzoid-getcompanymatch.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.interzoid.com',
                        required: true,
                        placeholder: 'https://api.interzoid.com',
                        description: 'The base URL of your Interzoid Getcompanymatch API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
