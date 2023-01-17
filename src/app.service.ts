import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Chat } from "./entities/chat.entity";

@Injectable()
export class AppService {
  constructor(@InjectRepository(Chat) private chatRepository: Repository<Chat>) { }

  async getMessages() {
    return await this.chatRepository.find();
  }

  async createMessage(payload: Chat) {
    return await this.chatRepository.insert(payload);
  }
}
