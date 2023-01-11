import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Delete'

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId: 'a283c575-85c7-4392-a6c4-dc075b059528'
    }
} as any;



const result = handler(event, {} as any).then((apiResult)=>{
    const items = JSON.parse(apiResult.body);
    console.log(123)
}); 