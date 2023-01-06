import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Read'

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId: '39f29710-6922-4a81-a5cf-9398e0161fa0'
    }
} as any;

const result = handler(event, {} as any).then((apiResult)=>{
    const items = JSON.parse(apiResult.body);
    console.log(123)
}); 