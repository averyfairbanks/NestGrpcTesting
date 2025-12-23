import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Blog } from "./interfaces/blog.interface";

@Entity()
export class BlogEntity implements Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column({type: "jsonb", default: {}})
    body: { [key: string]: any; } | undefined;

}