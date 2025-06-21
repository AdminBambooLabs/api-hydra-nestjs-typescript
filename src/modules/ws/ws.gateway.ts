import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ListService } from '../list/list.service';
import { UpdateListDto } from '../list/dto/update-list.dto';

@WebSocketGateway({ cors: true })
export class WsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly listService: ListService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinList')
  handleJoinList(
    @MessageBody() data: { listId: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.join(data.listId);
  }

  @SubscribeMessage('updateItem')
  async handleUpdateItem(
    @MessageBody() payload: UpdateListDto,
    @ConnectedSocket() client: Socket,
  ) {
    const { id, ...rest } = payload;
    const updatedItem = await this.listService.update(id, rest);
  }
}

// @WebSocketGateway({ cors: true })
//    export class WsGateway implements OnGatewayConnection, OnGatewayDisconnect {
//    @WebSocketServer()
//    server: Server;

//    constructor(private readonly listService: ListService) {}
//    handleConnection(client: Socket) {
//      console.log(`Client connected: ${client.id}`);
//    }
//    handleDisconnect(client: Socket) {
//      console.log(`Client disconnected: ${client.id}`);
//    }
//    @SubscribeMessage('joinList')
//    handleJoinList(@MessageBody() data: { listId: string }, @ConnectedSocket() client: Socket) {
//      client.join(data.listId);
//    }
//    @SubscribeMessage('updateItem')
//    async handleUpdateItem(@MessageBody() payload, @ConnectedSocket() client: Socket) {
//      const updatedItem = await this.listService.updateItem(...);
//      this.server.to(payload.listId).emit('itemUpdated', updatedItem);
//    }
// }
