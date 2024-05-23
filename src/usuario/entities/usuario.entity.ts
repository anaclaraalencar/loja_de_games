import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "src/produto/entities/produto.entity"
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard"
import { UseGuards } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"

@UseGuards(JwtAuthGuard)
@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    @ApiProperty()
    public id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    @ApiProperty()
    public nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty()
    public usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    @ApiProperty()
    public senha: string

    @Column({length: 5000 }) 
    @ApiProperty()
    public foto: string

    @ApiProperty()
    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto[]

}