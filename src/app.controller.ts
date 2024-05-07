/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common'
import { CreateTeamMemberBody } from './dtos/create-team-member-body'
import { RocketMembersRepository } from './repositories/rocket-members-repository'

@Controller('app')
export class AppController {
  constructor(
    private rocketMembersRepository: RocketMembersRepository) {}
  
  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, 'function': memberFunction } = body
    
    await this.rocketMembersRepository.create(name, memberFunction) 

    /* const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction
      } 
    }) 

    return {
      member
    } */
  }
}
