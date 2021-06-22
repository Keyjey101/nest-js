import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { UserRole } from "./user.interface";




@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    _id: string;
    
    @Column({unique: true})
    email: string;

    @Column({select: false})
    password: string;

    @Column({type: 'enum', enum: UserRole, default: UserRole.REGULAR})
    role: UserRole;

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
}